"use client"
import Button from "@/components/buttons/buttons";
import Image from "next/image";
import ImpactImage from "@/../public/home/impact.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

export default function ImpactSection(){
    const sectionRef = useRef<HTMLElement>(null)
    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".impact-image", {
             scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power1.in",
        })
        gsap.from(".impact-fade-in", {
            scrollTrigger: {
                trigger: sectionRef.current,
                pin: true,
                scrub: 2
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power1.in",
            stagger: 0.3
        })
    }, {scope: sectionRef})
    return(
        <section id = "impact-section" ref = {sectionRef}>
            <div className="section-container flex flex-col space-y-[5rem] ">
                <div className="flex flex-col items-center space-y-2">
                    <p className="text-xs text-text-light">IMPACT</p>
                    <h1 className="text-4xl font-semibold text-primary">Shaping Nepal's Energy <span className="text-accent">Energy</span> Legacy</h1>
                </div>
                <div className="flex space-x-20 items-center">
                    <div>
                        <Image src={ImpactImage} alt = "impact Image" className="impact-image" />
                    </div>
                    <div className="flex flex-col flex-1 space-y-4 text-text-main pl-12">
                        <p className="font-bold impact-fade-in text-3xl" >Through 15+ years of pioneering work, Dr. Thapa has:</p>
                        <ul className="list-disc space-y-2 text-lg">
                            <li className="impact-fade-in"><b>Transformed policy |</b> Secured Nepal's first hydrogen R&D budget (2024)</li>
                            <li className="impact-fade-in"><b>Built foundations |</b> Established KU's Green Hydrogen Lab - now a national hub</li>
                            <li className="impact-fade-in"><b>Solved real problems |</b>  90+ publications improving Himalayan hydropower</li>
                            <li className="impact-fade-in"><b>Connected globally |</b>  Advising regional initiatives like the Himalayan Low-Carbon Corridor"</li>
                        </ul>
                        <div className="pt-2 impact-fade-in">
                            <Button variant="accent">Explore his research legacy →</Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}


