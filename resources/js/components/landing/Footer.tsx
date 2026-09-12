import { Link } from '@inertiajs/react';
import {
    MapPin,
    Phone,
    Share2,
    Instagram,
    Facebook,
    Twitter,
} from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-neutral-300 bg-[#F4F4F0] px-4 pt-20 pb-12 text-[#1C1C1C] sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    {/* Column 1: Brand */}
                    <div className="space-y-4 pr-8">
                        <span className="block text-2xl font-black tracking-tighter uppercase">
                            Pickle<span className="text-[#649e00]">HQ</span>
                        </span>
                        <h4 className="text-xl leading-tight font-bold tracking-tight uppercase">
                            Your Club,
                            <br />
                            Your Community,
                            <br />
                            Your Passion.
                        </h4>
                    </div>

                    {/* Column 2: Club */}
                    <div className="space-y-4">
                        <div className="mb-6 flex items-center gap-2 text-gray-500">
                            <MapPin className="h-6 w-6 stroke-[1.5]" />
                        </div>
                        <h4 className="text-sm font-bold tracking-wide uppercase">
                            The Platform
                        </h4>
                        <ul className="space-y-2 text-sm font-medium text-gray-600">
                            <li>Find Indoor & Outdoor Courts</li>
                            <li>Join Skill-based Open Plays</li>
                            <li>Track Tournament Events</li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="space-y-4">
                        <div className="mb-6 flex items-center gap-2 text-gray-500">
                            <Phone className="h-6 w-6 stroke-[1.5]" />
                        </div>
                        <h4 className="text-sm font-bold tracking-wide uppercase">
                            Contact Us
                        </h4>
                        <ul className="space-y-2 text-sm font-medium text-gray-600">
                            <li>01 23 45 67 89</li>
                            <li>
                                <a
                                    href="mailto:hello@picklehq.com"
                                    className="hover:underline"
                                >
                                    hello@picklehq.com
                                </a>
                            </li>
                            <li>Metro Manila, Philippines</li>
                        </ul>
                    </div>

                    {/* Column 4: Social */}
                    <div className="space-y-4">
                        <div className="mb-6 flex items-center gap-2 text-gray-500">
                            <Share2 className="h-6 w-6 stroke-[1.5]" />
                        </div>
                        <h4 className="text-sm font-bold tracking-wide uppercase">
                            Follow Us
                        </h4>
                        <p className="mb-4 text-sm font-medium text-gray-600">
                            Stay connected and join us on our networks.
                        </p>
                        <div className="flex items-center gap-4 text-gray-600">
                            <a
                                href="#"
                                className="transition-colors hover:text-black"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="transition-colors hover:text-black"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="transition-colors hover:text-black"
                            >
                                <Twitter className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between border-t border-neutral-300 pt-8 text-xs font-medium text-gray-500 md:flex-row">
                    <p>&copy; {currentYear} PickleHQ. All rights reserved.</p>
                    <div className="mt-4 flex gap-4 md:mt-0">
                        <Link href="#" className="hover:text-black">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:text-black">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
