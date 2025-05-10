import CarouselSection from "@/sections/Home/Carousel.section";
import CounterSection from "@/sections/Home/Counter.section";
import FeaturedVideoSection from "@/sections/Home/FeaturedVideo.section";
import HomeHero from "@/sections/Home/Hero.section";
import PublicationSection from "@/sections/Home/Publications.section";

export default function HomePage(){
    return(
        <>
            <HomeHero />
            <CarouselSection />
            <FeaturedVideoSection />
            <PublicationSection />
            <CounterSection />
            <PublicationSection />
        </>
    )
}