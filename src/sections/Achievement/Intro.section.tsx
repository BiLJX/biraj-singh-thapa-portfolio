"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react"

export default function AchievementIntro(){
    const containerRef = useRef<HTMLElement>(null);
    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 2,
                start: "top top"
            }
        })
        const firstTl = gsap.timeline();
        firstTl.from(".charecter-fade", {
            opacity: 0,
            duration: 0.6,
            stagger: 0.03,
            ease: "power1.in"
        })
        firstTl.from(".scroll-down", {
            opacity: 0,
            y: -50,
            duration: 0.6,
            ease: "power1.in"
        })
       
        tl.from(".paragraph", {
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            y: "50%"
        })
        tl.to(".overlay", {
            backgroundColor: "#000000e0",
            duration: 1,
            ease: "power2.out",
        })

    }, {scope: containerRef})
    return(
        <section ref = {containerRef} className="flex bg-fixed relative justify-center items-center h-screen bg-cover bg-[20%_20%]" style = {{backgroundImage: `url('/home/carousel/achiv.jpg')`}}>
            <div className="text-white text-5xl z-20 flex flex-col items-center space-y-8">
                <div className="flex flex-col items-center space-y-4">
                    <span className="scroll-down text-base">( Scroll )</span>
                    <h1 className="inline-block text-center font-bold " >
                        {"Achievements Of Dr. Biraj Singh Thapa".split("").map((x, i)=><span className="charecter-fade" key = {i}>{x}</span>)}
                    </h1>
                </div>
                <p className="text-xl paragraph text-center max-w-[700px] text-border">
                    Dr. Thapa's vision has played a crucial role in steering Nepal toward renewable energy, focusing on hydrogen innovations, international collaboration, and interdisciplinary approaches toward the creation of clean energy.
                </p>
            </div>
            <div className="overlay bg-[#000000]" />
            
        </section>
    )
}