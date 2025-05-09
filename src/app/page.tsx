import CarouselSection from "@/sections/Home/Carousel.section";
import FeaturedVideoSection from "@/sections/Home/FeaturedVideo.section";
import HomeHero from "@/sections/Home/Hero.section";

export default function HomePage(){
    return(
        <>
            <HomeHero />
            <CarouselSection />
            <FeaturedVideoSection />
        </>
    )
}