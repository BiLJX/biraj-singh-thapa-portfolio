"use client"
import Button from "@/components/buttons/buttons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

interface TData {
    label: string;
    value: number;
}

const Data: TData[] = [
    {
        label: "Publications",
        value: 87
    },
    {
        label: "Citations",
        value: 1661
    },
    {
        label: "h-index",
        value: 19
    },
    {
        label: "i10-index",
        value: 39
    }
]



export default function CounterSection(){
    const sectionRef = useRef<HTMLElement>(null)
    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline(
            {scrollTrigger: {
                trigger: "#counter-section",
                start: "top top",
                pin: "#counter-section",
                scrub: 3,
            }}
        );
        tl.from(".main-text", {
            opacity: 0,
            duration: 2,
            ease: "power1.in",
        })
        tl.from(".main-text", {
            scale: 1.5,
            duration: 3,
            x: "50%",
            y: "50%",
            ease: "power1.in",
        })
        gsap.from(".counter-text", {
             scrollTrigger: {
                trigger: "#counter-section",
                start: "top top",
                end: "+=1000",
            },
            innerText: 0,
            duration: 1,
            snap : {
                innerText: 1
            }
        })

        tl.from(".fade-in",{
            opacity: 0,
            duration: 1,
            ease: "power1.in",
        })
        tl.from(".counter", {
            opacity: 0,
            duration: 1,
            x: 30,
            ease: "power1.in",
        })
        tl.to({}, { duration: 5 }); // <- add 1 second of "nothing"

    }, {scope: sectionRef.current!})

    return(
        <section id = "counter-section" className="bg-primary min-h-screen h-auto lg:h-screen overflow-hidden" ref = {sectionRef}>
            <div className="section-container flex flex-col lg:flex-row gap-8 lg:gap-12 py-12 md:py-24 lg:py-[150px] min-h-screen lg:h-full">
                <div className="flex-1 flex flex-col justify-center space-y-3 md:space-y-4 ">
                    <div className="text-border fade-in text-xs md:text-sm">ACADEMIC VISIBILITY</div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold main-text max-w-[800px]"><span className="text-secondary counter-text">87</span> Total Publications and <span className="text-secondary"><span className="counter-text">1100</span>+</span> Citations</h1>
                    <p className="text-white text-sm md:text-base lg:text-lg fade-in">
                    Dr. Thapa's research has advanced hydrogen energy, hydropower innovation, and sustainable systems, with global recognition across 20+ international conferences.
                    </p>
                    <div className="fade-in">
                        <Button variant="accent" className="w-[150px]">Learn More</Button>
                    </div>
                </div>
                <div className="counter flex flex-col justify-center w-full">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white text-center mb-6 md:mb-12">Total <span className="text-secondary">Counter</span></h1>
                    <div className="flex flex-col w-full">
                        {
                            Data.map((x, i)=>(
                                <div className="flex text-lg sm:text-xl md:text-2xl lg:text-3xl w-full max-w-[500px] mx-auto px-2 py-4 md:py-6 border-b-[1px] border-b-background" key = {i}>
                                    <div className="w-[100px] sm:w-[150px] md:w-[200px] text-secondary font-bold ">
                                        {x.value}
                                    </div>
                                    <div className="flex-1 text-white">
                                        {x.label}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}