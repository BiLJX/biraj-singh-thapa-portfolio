import AwardedImage from "@/../public/achivements/pm/awarded.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";
import SoloPic from "@/../public/achivements/pm/solo.JPG"
export default function PMSection(){
    const containerRef = useRef<HTMLDivElement>(null)
    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger);
        const fadeInOutTl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                start: "top top",
                scrub: 2
            },
        })
        fadeInOutTl.from(".content", {
            opacity: 0,
            y: "100%",
            duration: 1
        })
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                scrub: true,
            }
        })
        tl.to(containerRef.current, {
            background: "#000",
            duration: 0.2
        })
        gsap.from(".picture", {
            scrollTrigger: {
                trigger: ".additional-asdasd",
                start: "top top",
                markers: true
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power1.in"
        })
    }, {scope: containerRef});
    return(
        <div className="bg-primary flex flex-col" id = "achivement-pm" ref = {containerRef}>
            <section className="flex h-screen "  >
                <div className="flex-1 text-white px-section-x h-full flex flex-col justify-center space-y-4 content">
                    <h1 className="text-6xl font-bold pb-5">Prime Minister National Talent Award 2025</h1>
                    <p className="text-3xl text-subtle-accent font-medium info">Dr. Thapa was awarded nationally for science and technology work</p>
                    <p className="text-lg info">He received the Prime Minister National Talent Award in Science & Technology from the Government of Nepal in 2025 for his contributions towards the development of Nepal.</p>
                </div>
                <div className="h-full">
                    <Image className="h-full object-cover object-top picture" src = {AwardedImage} alt = "Awarded Image"/>
                </div>
            </section>
            <section className="flex justify-center w-full items-center py-section-y space-x-8 additional-pictures realtive">
                <Image className ="object-cover w-[430px] h-[430px] picture" src = "/achivements/pm/solo.JPG" alt = "" width={400} height={300}/>
                <Image className="object-cover w-[430px] h-[668px] picture" src= {AwardedImage} alt = "" />
            </section>
        </div>
    )
}