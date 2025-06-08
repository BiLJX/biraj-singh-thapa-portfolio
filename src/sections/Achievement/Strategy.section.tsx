import I from "@/../public/achievements/strategy/flower.png";
import PreviewableImage from "@/components/Image/PreviewableImage";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef } from "react";
export default function StrategySection(){
    const containerRef = useRef<HTMLDivElement>(null);
    const mainContainerRef = useRef<HTMLDivElement>(null)
    gsap.registerPlugin(ScrollTrigger);
    const refresh  = () => {
        ScrollTrigger.refresh()
    }
    useGSAP(()=>{
        console.log(mainContainerRef.current)
        // setTimeout(refresh, 600)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger:  mainContainerRef.current,
                pin: true,
                start: "top top",
                scrub: 2,
            },
        })
        tl.from(".content", {
            opacity: 0,
            y: "50%",
            duration: 1,
            
        })
        tl.from(mainContainerRef.current, {
            backgroundColor: "#1b3c3d",
             duration: 1,
        })

    }, {scope: mainContainerRef});
    return(
        <div className="bg-[#252746]" ref= {mainContainerRef}>
            <section className="flex h-screen achievement-strategy section-container" ref = {containerRef}>
                <div className="flex-1 text-white h-full flex flex-col justify-center space-y-4 content  space-x-20">
                    <h1 className="text-6xl font-bold pb-5" onClick={refresh}>Strategic Collaborations and Policy Development</h1>
                    <p className="text-3xl text-subtle-accent font-medium info">Dr. Thapa initiated key partnerships and mechanisms for the uptake of green hydrogen in Nepal</p>
                    <p className="text-lg info">He facilitated a Memorandum of Understanding (MoU) between Kathmandu University and Nepal Electricity Authority (NEA) in May 2022 for the development of green hydrogen, including preparing a detailed project report of a five-megawatt green ammonia project. He also facilitated the Nepal Hydrogen Initiative (NHI) 2021-2030 for creating a policy-friendly environment for hydrogen investments.</p>
                </div>
                <div className="h-full">
                    <Image className="h-full object-cover object-top" src = {I} alt = "Awarded Image"  onLoadingComplete={() => ScrollTrigger.refresh()}/>
                </div>
            </section>
        </div>
    )
}