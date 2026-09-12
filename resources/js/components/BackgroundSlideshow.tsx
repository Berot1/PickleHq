import { useState, useEffect } from 'react';

const backgrounds = [
    '/home-bg/bg-1.jpg',
    '/home-bg/bg-2.jpg',
    '/home-bg/bg-3.png',
    '/home-bg/bg-4.webp',
];

export default function BackgroundSlideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex(
                (prevIndex) => (prevIndex + 1) % backgrounds.length,
            );
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#0A1B54]">
            {backgrounds.map((bg, index) => (
                <div
                    key={bg}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                        index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ backgroundImage: `url(${bg})` }}
                />
            ))}

            {/* Smooth gradient overlay: transparent at the top, solid navy at the bottom to blend perfectly into the next section */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A1B54]/50 via-[#0A1B54]/80 to-[#0A1B54]" />
        </div>
    );
}
