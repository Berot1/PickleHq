import { Head } from '@inertiajs/react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/landing/HeroSection';
import HappeningSection from '@/components/landing/HappeningSection';
import MapFeaturesSection from '@/components/landing/MapFeaturesSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import HostSection from '@/components/landing/HostSection';
import CtaSection from '@/components/landing/CtaSection';
import Footer from '@/components/landing/Footer';

export default function Welcome() {
    return (
        <div className="min-h-screen overflow-x-hidden bg-[#F9F9F6] font-sans text-[#111111] selection:bg-[#A5ED0F] selection:text-[#111111]">
            <Head title="PickleHQ" />

            <NavBar />
            <div className="pt-24">
                <HeroSection />
                <HappeningSection />
                <MapFeaturesSection />
                <HowItWorksSection />
                <HostSection />
                <CtaSection />
            </div>
            <Footer />
        </div>
    );
}
