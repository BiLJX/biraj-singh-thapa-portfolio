import AwardedImage from "@/../public/achievements/pm/awarded.jpg";
import PreviewableImage from "@/components/Image/PreviewableImage";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";
export default function PMSection(){
    const containerRef = useRef<HTMLDivElement>(null);
    const mainContainerRef = useRef<HTMLDivElement>(null)
    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger);
        const fadeInOutTl = gsap.timeline({
            scrollTrigger: {
                trigger:  ".achievement-pm",
                pin: true,
                start: "top top",
                scrub: 2,
            },
        })
        fadeInOutTl.from(".content", {
            opacity: 0,
            y: "50%",
            duration: 1
        })
        gsap.to(mainContainerRef.current, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "center top",
                scrub: 2,
            },
            background: "#000",
            duration: 1,
           
        })
        gsap.from(".picture", {
            scrollTrigger: {
                trigger: ".additional-pictures",
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power1.in",
            stagger: 0.2
        })
    }, {scope: mainContainerRef});
    return(
        <div className="bg-primary main-container" ref= {mainContainerRef}>
            <section className="flex h-screen achievement-pm section-container" ref = {containerRef}>
                <div className="flex-1 text-white h-full flex flex-col justify-center space-y-4 content  space-x-20">
                    <h1 className="text-6xl font-bold pb-5">Prime Minister National Talent Award 2025</h1>
                    <p className="text-3xl text-subtle-accent font-medium info">Dr. Thapa was awarded nationally for science and technology work</p>
                    <p className="text-lg info">He received the Prime Minister National Talent Award in Science & Technology from the Government of Nepal in 2025 for his contributions towards the development of Nepal.</p>
                </div>
                <div className="h-full">
                    <Image className="h-full object-cover object-top" src = {AwardedImage} alt = "Awarded Image"/>
                </div>
            </section>
            <section className="flex flex-wrap space-y-4 justify-center w-full items-center py-section-y space-x-8 additional-pictures min-h-screen">
                <div  className = "picture">
                    <PreviewableImage className ="object-cover w-[430px] h-[430px]" src = "/achievements/pm/solo.JPG" alt = "" width={400} height={300}/>
                </div>
                <div className = "picture">
                    <PreviewableImage className="object-cover w-[430px] h-[668px]" src= {AwardedImage} alt = "" />
                </div>
                <div className = "picture">
                    <PreviewableImage className ="object-cover w-[430px] h-[430px]" src = "/achievements/pm/pm.JPG" alt = "" width={400} height={300}/>
                </div>
            </section>
        </div>
    )
}