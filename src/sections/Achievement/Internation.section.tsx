import AwardedImage from "@/../public/achievements/pm/awarded.jpg";
import PreviewableImage from "@/components/Image/PreviewableImage";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";
export default function InternationalSection(){
    const containerRef = useRef<HTMLDivElement>(null);
    const mainContainerRef = useRef<HTMLDivElement>(null);
    const backgroundAnim = () => {
        const tl = gsap.timeline()
        tl.from(mainContainerRef.current, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                scrub: 2,
            },
            background: "#000",
            duration: 1,
        })
    }
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
        backgroundAnim();
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
        <div className="bg-[#2c285a] main-container" ref= {mainContainerRef}>
            <section className="flex h-screen achievement-pm section-container space-x-20" ref = {containerRef}>
                <div className="h-full">
                    <Image className="h-full object-cover object-top w-auto" src = "/achievements/international/pose.JPG" width={400} height={300} alt = "Awarded Image"/>
                </div>
                <div className="flex-1 text-white h-full flex flex-col justify-center space-y-4 content">
                    <h1 className="text-6xl font-bold pb-5">International Engagement and Advocacy</h1>
                    <p className="text-3xl text-subtle-accent font-medium info">Dr. Thapa proactively represents Nepal's energy industry in key global forums and organizations.</p>
                    <p className="text-lg info">He is the Co-lead of the HUC Working Group on Energy at ICIMOD and a member of the Standing Committee on Studies at the World Energy Council, promoting renewable energy and hydrogen technologies worldwide.</p>
                </div>
                
            </section>
            <div>
                <section className="flex flex-wrap space-y-4 justify-center w-full items-center py-section-y space-x-8 additional-pictures min-h-screen section-container">
                    <div  className = "picture flex-1 space-y-8">
                        <PreviewableImage loading="eager" className ="object-cover w-full h-auto" src = "/achievements/international/group.JPG" alt = "" width={400} height={300}/>
                    </div>
                    <div className = "picture flex-1">
                        <PreviewableImage loading="eager" className ="object-cover w-full h-auto" src = "/achievements/international/mic.JPG" alt = "" width={400} height={300}/>
                    </div>
                </section>
            </div>
           
        </div>
    )
}