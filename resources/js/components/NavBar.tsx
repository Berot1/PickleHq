import { Link, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

export default function NavBar() {
    const { url } = usePage().props as any;
    const [hoveredTab, setHoveredTab] = useState<string | null>(null);

    const navLinks = [
        { id: 'home', label: 'Home', href: '/' },
        { id: 'community', label: 'Community', href: '/community' },
        { id: 'courts', label: 'Courts', href: '/courts' },
        { id: 'open-plays', label: 'Open Plays', href: '/open-plays' },
        { id: 'tournaments', label: 'Tournaments', href: '/tournaments' },
        { id: 'for-hosts', label: 'For Hosts', href: '/for-hosts' },
    ];

    return (
        <header className="fixed top-0 right-0 left-0 z-50 w-full border-b border-black/5 bg-[#F9F9F6]/80 backdrop-blur-md">
            <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between sm:h-20">
                    {/* Logo (Mobile & Desktop) */}
                    <div className="z-50 flex shrink-0 items-center">
                        <Link href="/">
                            <img
                                src="/PickleHqName.png"
                                alt="PickleHQ"
                                className="h-6 w-auto object-contain brightness-0 invert sm:h-7"
                            />
                        </Link>
                    </div>

                    {/* Desktop: Vercel-Style Fluid Navigation */}
                    <nav
                        className="absolute left-1/2 hidden -translate-x-1/2 items-center space-x-1 lg:flex"
                        onMouseLeave={() => setHoveredTab(null)}
                    >
                        {navLinks.map((tab) => {
                            const isActive = url === tab.href;

                            return (
                                <Link
                                    key={tab.id}
                                    href={tab.href}
                                    onMouseEnter={() => setHoveredTab(tab.id)}
                                    className={cn(
                                        'relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200',
                                        isActive || hoveredTab === tab.id
                                            ? 'text-[#111111]'
                                            : 'text-gray-500',
                                    )}
                                >
                                    {hoveredTab === tab.id && (
                                        <motion.span
                                            layoutId="nav-hover-pill"
                                            className="absolute inset-0 z-0 rounded-full bg-black/5"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{
                                                type: 'spring',
                                                stiffness: 400,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                    <span className="relative z-10">
                                        {tab.label}
                                    </span>
                                    {isActive && (
                                        <span className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#111111]" />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Desktop: Actions */}
                    <div className="hidden items-center gap-6 lg:flex">
                        <Link
                            href="/login"
                            className="text-sm font-bold tracking-wide text-[#111111] uppercase hover:text-gray-600"
                        >
                            Sign In
                        </Link>
                        <Button className="rounded-none bg-[#A5ED0F] px-6 py-5 text-xs font-bold tracking-wider text-[#111111] uppercase transition-transform hover:-translate-y-0.5 hover:bg-[#8CD10B]">
                            Find a Game
                        </Button>
                    </div>

                    {/* Mobile: Hamburger Menu (Sheet) */}
                    <div className="flex items-center lg:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-[#111111]"
                                >
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">
                                        Toggle navigation menu
                                    </span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="right"
                                className="flex w-full flex-col border-l-2 border-[#111111] bg-[#F9F9F6] p-6 sm:w-80"
                            >
                                <SheetTitle className="sr-only">
                                    Navigation Menu
                                </SheetTitle>
                                <nav className="mt-12 flex flex-col gap-6">
                                    {navLinks.map((tab) => (
                                        <Link
                                            key={tab.id}
                                            href={tab.href}
                                            className={cn(
                                                'text-3xl font-black tracking-tighter uppercase transition-colors',
                                                url === tab.href
                                                    ? 'text-[#A5ED0F] [-webkit-text-stroke:1px_#111111]'
                                                    : 'text-[#111111]',
                                            )}
                                        >
                                            {tab.label}
                                        </Link>
                                    ))}
                                </nav>
                                <div className="mt-auto flex flex-col gap-4">
                                    <Link href="/login" className="w-full">
                                        <Button className="w-full rounded-none border-2 border-[#111111] bg-transparent py-6 text-sm font-bold tracking-wider text-[#111111] uppercase hover:bg-[#111111] hover:text-white">
                                            Sign In
                                        </Button>
                                    </Link>
                                    <Button className="w-full rounded-none bg-[#A5ED0F] py-6 text-sm font-bold tracking-wider text-[#111111] uppercase hover:bg-[#8CD10B]">
                                        Find a Game
                                    </Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}
