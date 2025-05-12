"use client"
import SplashScreen from "@/components/SplashScreen/SplashScreen";
import CarouselSection from "@/sections/Home/Carousel.section";
import CounterSection from "@/sections/Home/Counter.section";
import FeaturedVideoSection from "@/sections/Home/FeaturedVideo.section";
import HomeHero from "@/sections/Home/Hero.section";
import ImpactSection from "@/sections/Home/Impact.section";
import PassionSection from "@/sections/Home/Passion.section";
import PublicationSection from "@/sections/Home/Publications.section";
import VisionSection from "@/sections/Home/Vision.section";
import { useEffect, useState } from "react";

export default function HomePage(){
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const timeout = setTimeout(()=> setLoading(false), 3000)
        return(()=>{
            clearTimeout(timeout);
        })
    }, [])
    if(loading) return <SplashScreen />
    
    return(
        <>
            <HomeHero />
            <CarouselSection />
            <FeaturedVideoSection />
            <PublicationSection />
            <CounterSection />
            <VisionSection />
            <PassionSection />
            <ImpactSection />
        </>
    )
}