"use client"
import HomeHero from "@/sections/Home/Hero.section";
import VisionSection from "@/sections/Home/Vision.section";
import ImpactSection from "@/sections/Home/Impact.section";
import PassionSection from "@/sections/Home/Passion.section";
import CounterSection from "@/sections/Home/Counter.section";
import PublicationSection from "@/sections/Home/Publications.section";
import FeaturedVideoSection from "@/sections/Home/FeaturedVideo.section";
import VisibilitySection from "@/sections/Home/Visibility.section";
import CarouselSection from "@/sections/Home/Carousel.section";

export default function HomePage() {
    return (
        <>
            <HomeHero />
            <CarouselSection />
            <VisionSection />
            <ImpactSection />
            <PassionSection />
            <CounterSection />
            <PublicationSection />
            <FeaturedVideoSection />
            <VisibilitySection />
        </>
    )
}