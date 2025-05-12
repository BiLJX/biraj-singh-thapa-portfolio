"use client";
import Button from "@/components/buttons/buttons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { forwardRef, useRef } from "react";


export default function VisionSection(){
    const cardsRef = useRef<HTMLDivElement[]>([]);
    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(cardsRef.current, {
            scrollTrigger: {
                trigger: "#vision-section",
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power1.in",
            stagger: 0.2
        })
    })
    return(
        <section id="vision-section">
            <div className="section-container flex items-center">
                <div className="flex w-[730px] flex-wrap space-x-4 justify-center space-y-4">
                    <VisionCard ref = {el=>{if(el) cardsRef.current[0] = el}} title="Energy Independence" description="Producing green hydrogen from Nepal's Hydropower resources." Icon="🔋" />
                    <VisionCard ref = {el=>{if(el) cardsRef.current[1] = el}} title="Empowering Through Innovation" description="Investing in young scientists, building local capabilities, and fostering interdisciplinary research." Icon="💡" />
                    <VisionCard ref = {el=>{if(el) cardsRef.current[2] = el}} title="Green Hydrogen for Every Sector" description="Integrating green hydrogen across various sectors, revolutionizing daily life and industrial processes" Icon="🌱" />
                </div>
                <div className="flex-1">
                    <div className="space-y-5 pl-20 flex flex-col">
                        <h1 className="text-primary text-5xl font-bold">
                        Vision for a Hydrogen Powered Nepal
                        </h1>
                        <p className="text-text-main text-lg">
                            The vision is to redefine Nepal's energy future—through green hydrogen, sustainable practices, and global collaboration.
                        </p>
                        <p className="text-text-light italic">
                            “A Vision Rooted in Innovation, Powered by Purpose”
                        </p>
                        <Button variant="accent-outlined" className="w-fit">View In Detail</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

interface Props {
    title: string,
    Icon: string,
    description: string;
}
const VisionCard = forwardRef<HTMLDivElement, Props>(({title, Icon, description}: Props, ref)=>{
    return(
        <div className="flex p-4 flex-col gap-y-4 bg-white w-[300px] min-h-[290px]  rounded-xl" ref = {ref}>
            <div className="text-center text-7xl">{Icon}</div>
            <div className="text-text-main text-lg font-semibold">{title}</div>
            <div className="text-text-light">{description}</div>
        </div>
    )
})