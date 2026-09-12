import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CtaSection() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="flex min-h-[350px] flex-col overflow-hidden bg-[#A5ED0F] shadow-sm lg:flex-row">
                {/* Left: Atmospheric Image */}
                <div className="relative h-64 lg:h-auto lg:w-5/12">
                    <img
                        src="/home-bg/bg-3.png"
                        alt="Pickleball net"
                        className="absolute inset-0 h-full w-full object-cover opacity-80 mix-blend-multiply"
                    />
                </div>

                {/* Right: Newsletter Signup */}
                <div className="flex flex-col justify-center p-10 md:p-16 lg:w-7/12">
                    <div className="mb-6 flex items-center gap-4">
                        <div className="rounded-full bg-[#1C1C1C] p-3 text-white md:p-4">
                            <Mail className="h-6 w-6 md:h-8 md:w-8" />
                        </div>
                        <h2 className="text-3xl font-black tracking-tighter text-[#1C1C1C] uppercase md:text-5xl">
                            Stay Informed
                        </h2>
                    </div>

                    <p className="mb-10 max-w-md text-lg font-medium text-[#1C1C1C]/80">
                        Receive our latest news, exclusive events, and open play
                        alerts directly to your inbox.
                    </p>

                    <form className="flex w-full max-w-lg flex-col gap-0 shadow-lg sm:flex-row">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-1 rounded-none bg-[#F4F4F0] px-6 py-5 font-medium text-[#1C1C1C] placeholder:text-gray-500 focus:ring-2 focus:ring-[#1C1C1C] focus:outline-none focus:ring-inset"
                            required
                        />
                        <Button className="h-auto rounded-none bg-[#1C1C1C] px-8 py-8 text-sm font-bold tracking-wide text-white uppercase hover:bg-black">
                            Subscribe
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}
