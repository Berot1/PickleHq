export default function HowItWorksSection() {
    const steps = [
        {
            step: '01',
            title: 'DISCOVER',
            description:
                "See what's happening near you — clubs, Open Plays, and tournaments ready to join.",
            image: '/home-bg/bg-1.jpg',
        },
        {
            step: '02',
            title: 'JOIN',
            description:
                'Book a court, join an Open Play, or register for a tournament. It only takes a minute.',
            image: '/home-bg/bg-2.jpg',
        },
        {
            step: '03',
            title: 'PLAY',
            description:
                "Show up and enjoy — we'll handle the rest. Focus on your game.",
            image: '/home-bg/bg-4.webp',
        },
    ];

    return (
        <section className="bg-[#F9F9F6] px-4 py-32 text-[#111111] sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1400px]">
                <div className="mb-16">
                    <h3 className="mb-4 text-4xl font-semibold tracking-tighter text-[#0A1B54] md:text-6xl">
                        HOW IT WORKS
                    </h3>
                    <p className="text-lg font-medium text-gray-500">
                        Get on the court in three simple steps.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {steps.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col bg-white shadow-sm transition-shadow hover:shadow-md"
                        >
                            <div className="h-64 w-full overflow-hidden bg-gray-200">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover grayscale transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                            <div className="p-8">
                                <div className="mb-4 flex items-center gap-3">
                                    <span className="text-xl font-bold text-[#A5ED0F]">
                                        {item.step}
                                    </span>
                                    <h4 className="text-xl font-bold tracking-tight text-[#0A1B54] uppercase">
                                        {item.title}
                                    </h4>
                                </div>
                                <p className="text-sm leading-relaxed font-medium text-gray-500">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
