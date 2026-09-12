import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HostSection() {
    const features = [
        {
            title: 'COURT SCHEDULING',
            description:
                'Set your hours, define court availability, and let players book instantly without the back-and-forth messaging.',
        },
        {
            title: 'OPEN PLAY MANAGEMENT',
            description:
                'Create capped, skill-based sessions. We handle the waitlists, drop-outs, and player limits automatically.',
        },
        {
            title: 'AUTOMATED PAYMENTS',
            description:
                'Securely collect court fees and event registrations upfront, completely eliminating no-shows.',
        },
    ];

    return (
        <section className="bg-[#111111] text-white">
            <div className="mx-auto flex max-w-[1400px] flex-col lg:flex-row">
                {/* Left Side: Sleek Headline */}
                <div className="flex flex-1 flex-col justify-center border-white/10 p-12 lg:border-r-2 lg:p-24">
                    <span className="mb-6 block text-xs font-black tracking-widest text-[#A5ED0F] uppercase">
                        For Organizers
                    </span>
                    <h3 className="mb-8 text-5xl leading-[1.05] font-semibold tracking-tighter md:text-6xl lg:text-7xl">
                        RUN YOUR
                        <br />
                        CLUB ON
                        <br />
                        AUTOPILOT.
                    </h3>
                    <p className="mb-10 max-w-md text-lg leading-relaxed font-medium text-gray-400">
                        Ditch the spreadsheets and chat groups. PickleHQ gives
                        you the tools to list, manage, and scale your local
                        pickleball community effortlessly.
                    </p>
                    <div>
                        <Button className="rounded-none bg-[#A5ED0F] px-8 py-7 text-sm font-bold tracking-wider text-[#111111] uppercase transition-transform hover:-translate-y-1 hover:bg-[#8CD10B]">
                            START HOSTING{' '}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {/* Right Side: Refined Feature List */}
                <div className="flex flex-1 flex-col divide-y-2 divide-white/10 border-t-2 border-white/10 lg:border-t-0">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className="flex flex-col justify-center p-12 transition-colors duration-300 hover:bg-white/[0.02] lg:p-16"
                        >
                            <div className="mb-4 flex items-center gap-4">
                                <CheckCircle2
                                    className="h-7 w-7 text-[#A5ED0F]"
                                    strokeWidth={2.5}
                                />
                                <h4 className="text-2xl font-semibold tracking-tight md:text-3xl">
                                    {feature.title}
                                </h4>
                            </div>
                            <p className="max-w-lg pl-11 text-lg leading-relaxed font-medium text-gray-400">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
