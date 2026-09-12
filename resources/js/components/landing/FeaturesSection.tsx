import { MapPin, Users, Trophy } from 'lucide-react';

export default function FeaturesSection() {
    const features = [
        {
            title: 'DISCOVER CLUBS',
            description:
                "Explore pickleball clubs near you. See which ones are active, what's happening, and how to join.",
            icon: MapPin,
            href: '#',
        },
        {
            title: 'JOIN OPEN PLAYS',
            description:
                'No group? No problem. Open Plays are organized sessions — skill-based, capped, and welcoming.',
            icon: Users,
            href: '#',
        },
        {
            title: 'PLAY TOURNAMENTS',
            description:
                'Ready to compete? Find tournaments, track matches, and play at your level.',
            icon: Trophy,
            href: '#',
        },
    ];

    return (
        <section className="bg-[#1C1C1C] px-4 py-24 text-white sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-start"
                        >
                            <div className="mb-6 rounded-full bg-[#A5ED0F] p-3">
                                <feature.icon
                                    className="h-6 w-6 text-[#1C1C1C]"
                                    strokeWidth={2.5}
                                />
                            </div>
                            <h4 className="mb-4 text-2xl font-black tracking-tighter uppercase">
                                {feature.title}
                            </h4>
                            <p className="mb-6 text-sm leading-relaxed font-medium text-gray-400">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
