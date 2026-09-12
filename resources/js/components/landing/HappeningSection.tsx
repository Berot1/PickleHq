import { MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HappeningSection() {
    const events = [
        {
            title: 'FPB UNLIPLAY',
            image: '/home-bg/bg-1.jpg',
            badge: 'ALL LEVELS',
            badgeStyle: 'bg-[#A5ED0F] text-[#111111]',
            icon: MapPin,
            detail: 'Davao Occidental',
            price: 'P120',
        },
        {
            title: 'DINKLEBALL OPEN PLAY',
            image: '/home-bg/bg-2.jpg',
            badge: 'INTERMEDIATE',
            badgeStyle: 'bg-[#111111] text-white',
            icon: Clock,
            detail: 'Tonight, 7:00 PM',
            price: 'P200',
        },
        {
            title: 'THE SERVE LAUNCH',
            image: '/home-bg/bg-4.webp',
            badge: 'NEW CLUB',
            badgeStyle: 'bg-white text-[#111111]',
            icon: MapPin,
            detail: 'Lapu-Lapu City',
            price: 'Free',
        },
    ];

    return (
        <section className="bg-[#F9F9F6] px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1400px]">
                {/* High-End Editorial Header */}
                <div className="mb-16 flex flex-col justify-between gap-8 border-b border-black/10 pb-12 md:flex-row md:items-end">
                    <div className="max-w-3xl">
                        <h2 className="text-5xl leading-[0.9] font-black tracking-tighter text-[#111111] uppercase md:text-7xl">
                            Happening{' '}
                            <span className="text-gray-400">Right Now.</span>
                        </h2>
                    </div>
                    <div className="flex flex-col items-start text-left md:items-end md:text-right">
                        {/* REVISED COPY: Removed redundant feature list, focused on urgency */}
                        <p className="text-md mb-6 max-w-xs font-medium text-[#111111]">
                            Live updates from the community. Secure your spot
                            before courts book out.
                        </p>
                        <Button className="rounded-none border-2 border-[#111111] bg-transparent px-8 py-6 text-xs font-bold tracking-widest text-[#111111] uppercase transition-colors hover:bg-[#111111] hover:text-white">
                            View All Activity
                        </Button>
                    </div>
                </div>

                {/* Aesthetic Minimalist Grid */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                    {events.map((event, index) => (
                        <div key={index} className="group cursor-pointer">
                            {/* Cinematic Image Wrapper */}
                            <div className="relative mb-6 h-[360px] w-full overflow-hidden bg-gray-200">
                                {event.image && (
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                )}
                                <div className="absolute top-4 left-4">
                                    <span
                                        className={`px-3 py-1.5 text-[10px] font-black tracking-widest uppercase ${event.badgeStyle}`}
                                    >
                                        {event.badge}
                                    </span>
                                </div>
                                {/* Subtle overlay that lifts on hover */}
                                <div className="absolute inset-0 bg-[#111111]/10 transition-colors duration-500 group-hover:bg-transparent" />
                            </div>

                            {/* Clean Typography Block */}
                            <div className="flex flex-col pr-4">
                                <div className="mb-3 flex items-start justify-between gap-4">
                                    <h4 className="line-clamp-2 text-2xl leading-none font-black tracking-tight text-[#111111] uppercase transition-colors duration-300 group-hover:text-[#649e00]">
                                        {event.title}
                                    </h4>
                                    <ArrowUpRight className="h-7 w-7 shrink-0 text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#111111]" />
                                </div>

                                <div className="flex items-center gap-3 text-sm font-medium">
                                    <div className="flex items-center gap-1.5 text-xs font-bold tracking-wide text-gray-500 uppercase">
                                        <event.icon
                                            className="h-4 w-4 text-[#111111]"
                                            strokeWidth={2.5}
                                        />
                                        {event.detail}
                                    </div>
                                    <div className="h-1 w-1 rounded-full bg-gray-300" />
                                    <div className="text-sm font-black tracking-wide text-[#111111] uppercase">
                                        {event.price}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
