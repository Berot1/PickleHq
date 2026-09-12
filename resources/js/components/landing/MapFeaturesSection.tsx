import { MapPin, Users, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MapFeaturesSection() {
    const features = [
        {
            title: 'INSTANT RESERVATIONS',
            description:
                'Find available courts near you and book them instantly. No more calling, texting, or waiting for chat replies.',
            icon: Calendar,
        },
        {
            title: 'JOIN OPEN PLAYS',
            description:
                'No group? No problem. Open Plays are organized sessions — skill-based, capped, and welcoming.',
            icon: Users,
        },
        {
            title: 'DISCOVER CLUBS',
            description:
                'Navigate the fastest-growing network of pickleball facilities in the Philippines.',
            icon: MapPin,
        },
    ];

    // Static coordinates mapped to CSS percentage positions matching the reference design
    const staticCourts = [
        { id: 1, top: '35%', left: '55%' },
        { id: 2, top: '48%', left: '80%' },
        { id: 3, top: '62%', left: '35%' },
        { id: 4, top: '78%', left: '68%' },
    ];

    return (
        <section className="flex min-h-[750px] flex-col border-y border-white/5 bg-[#111111] text-white lg:flex-row">
            {/* Left: Brutalist Typography & Features */}
            <div className="z-20 flex w-full flex-col justify-center border-b border-white/10 bg-[#111111] p-10 sm:p-16 lg:w-[45%] lg:border-r lg:border-b-0 lg:p-20 xl:w-[40%]">
                <div className="mb-12">
                    <h3 className="mb-6 text-4xl leading-[1.05] font-bold tracking-tighter uppercase md:text-5xl lg:text-6xl">
                        Find Courts.
                        <br />
                        Anywhere.
                    </h3>
                    <p className="max-w-md text-sm leading-relaxed font-medium text-gray-400 md:text-base">
                        Navigate the fastest-growing network of pickleball clubs
                        in the Philippines. Real-time availability in your
                        pocket.
                    </p>
                </div>

                <div className="space-y-10">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-row items-start gap-5"
                        >
                            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#A5ED0F] shadow-lg">
                                <feature.icon
                                    className="h-5 w-5 text-[#111111]"
                                    strokeWidth={2.5}
                                />
                            </div>
                            <div>
                                <h4 className="mb-2 text-base font-bold tracking-tight text-white uppercase">
                                    {feature.title}
                                </h4>
                                <p className="max-w-sm text-sm leading-relaxed font-medium text-gray-400">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12">
                    <Button className="w-full rounded-none bg-white px-8 py-7 text-xs font-bold tracking-widest text-[#111111] uppercase transition-colors hover:bg-gray-200 sm:w-auto">
                        Explore Locations{' '}
                        <ArrowRight className="ml-3 h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* Right: Static Map Integration */}
            <div className="relative flex min-h-[500px] w-full items-center justify-center overflow-hidden bg-[#050505] lg:w-[55%] xl:w-[60%]">
                {/* The High-Contrast Street Map Background */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-50 mix-blend-screen"
                    style={{ backgroundImage: "url('/map.png')" }}
                />

                {/* Inner Vignette Shadow to blend map seamlessly into the brutalist layout */}
                <div className="pointer-events-none absolute inset-0 z-10 shadow-[inset_0_0_150px_rgba(17,17,17,1)]" />
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-24 bg-gradient-to-r from-[#111111] to-transparent lg:block" />

                {/* Static Map Markers */}
                {staticCourts.map((court) => (
                    <div
                        key={court.id}
                        className="group absolute z-20 flex cursor-pointer items-center justify-center"
                        style={{ top: court.top, left: court.left }}
                    >
                        {/* Ping Animation Effect */}
                        <div className="absolute inset-0 animate-ping rounded-full bg-[#A5ED0F] opacity-20 transition-opacity group-hover:opacity-40" />

                        {/* Marker Core */}
                        <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#A5ED0F] shadow-[0_0_20px_rgba(165,237,15,0.15)]">
                            <MapPin
                                className="h-5 w-5 text-[#111111]"
                                fill="#111111"
                                strokeWidth={1.5}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
