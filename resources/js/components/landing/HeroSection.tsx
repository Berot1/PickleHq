import { Button } from '@/components/ui/button';

export default function HeroSection() {
    return (
        <section className="relative mx-auto w-full max-w-[1400px] px-4 pt-12 pb-24 sm:px-6 lg:px-8">
            {/* Subtle Architectural Grid Background */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage:
                        'linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)',
                    backgroundSize: '64px 64px',
                }}
            />
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                {/* Left: Typography */}
                <div className="z-10 space-y-8 lg:col-span-6">
                    <h1 className="text-6xl leading-[0.85] font-black tracking-tighter text-[#111111] uppercase md:text-[5.5rem] lg:text-[6.5rem]">
                        The Home
                        <br />
                        Of Modern
                        <br />
                        Pickleball<span className="text-[#A5ED0F]">.</span>
                    </h1>
                    <p className="max-w-md text-lg leading-relaxed font-medium text-gray-600">
                        A modern platform to connect your club, book courts, and
                        join open plays seamlessly.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <Button className="rounded-none bg-[#111111] px-8 py-6 text-sm font-bold tracking-wider text-white uppercase hover:bg-black">
                            Discover Clubs
                        </Button>
                        <Button className="rounded-none bg-[#A5ED0F] px-8 py-6 text-sm font-bold tracking-wider text-[#111111] uppercase hover:bg-[#8CD10B]">
                            Book a Court
                        </Button>
                    </div>
                </div>

                {/* Right: Phone & Image Composition */}
                <div className="relative mt-12 flex h-[600px] w-full justify-end lg:col-span-6 lg:mt-0">
                    {/* Background Grid Image */}
                    <div className="absolute top-0 right-0 h-full w-[85%] overflow-hidden">
                        <img
                            src="/home-bg/bg-1.jpg"
                            alt="Pickleball Court"
                            className="h-full w-full object-cover opacity-90 grayscale"
                        />
                    </div>

                    {/* Phone Mockup */}
                    <div className="absolute bottom-12 left-0 z-20 flex h-[560px] w-[280px] flex-col overflow-hidden rounded-[3rem] border-[10px] border-[#111111] bg-[#111111] shadow-2xl lg:left-12">
                        <img
                            src="/home-bg/bg-4.webp"
                            alt="App preview"
                            className="h-[55%] w-full object-cover"
                        />
                        <div className="flex flex-1 flex-col justify-end bg-[#111111] p-8">
                            <h3 className="mb-8 text-2xl leading-tight font-bold text-white">
                                Play.
                                <br />
                                Progress.
                                <br />
                                Share.
                            </h3>
                            <Button className="w-full rounded-full bg-[#A5ED0F] text-sm font-bold text-[#111111] hover:bg-[#8CD10B]">
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
