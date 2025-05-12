"use client"
import Image from "next/image";
import Hero from "../../../public/home/TedxHero.png"
import Button from "@/components/buttons/buttons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export default function FeaturedVideoSection(){
    const sectionRef = useRef<HTMLElement>(null);
    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".content", {
            scrollTrigger: {
                trigger: "#featured-video",
                start: "10% center",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            duration: 0.6,
            ease: "power1.in",
            y: 50
        })
        
    }, {scope: sectionRef.current!})
    return(
        <section className="bg-black h-screen relative" id = "featured-video" ref = {sectionRef} >
            <video className="absolute w-full h-full object-cover object-[15%_75%] rounded-xl blur-3xl brightness-[20%]" autoPlay muted loop>
                
                <source src="/home/FeaturedVideo.mp4" type="video/mp4"/>
            </video>
            <div className="section-container h-full flex">
                <div className="w-[800px] h-full relative ">
                  
                    <video className="w-full h-full object-cover object-[15%_75%] rounded-xl" autoPlay muted loop>
                        <source src="/home/FeaturedVideo.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="flex flex-col h-full flex-1 justify-center space-y-4 pl-12 ml-12 content relative z-30">
                    <span className="text-border">FEATURED VIDEO</span>
                    <h1 className="text-5xl text-white font-bold">Nepal's green hydrogen future</h1>
                    <p className="text-white text-lg">Dr. Biraj Singh Thapa talks about the potential of energy transition with green hydrogen production and usage in the video. By highlighting its production and awareness in other parts of the world, he highlights the efforts of Kathmandu University and Nepal in producing and utilizing Green Hydrogen.</p>
                    <a className="w-full" target="_blank" href="https://www.youtube.com/watch?v=SQsYtEReAWQ&ab_channel=TEDxTalks">
                        <Button className="py-4 w-full" variant="white-outlined">Watch Full →</Button>
                    </a>
                </div>
            </div>
        </section>
    )
}