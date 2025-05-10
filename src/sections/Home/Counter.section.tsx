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
        const tl = gsap.timeline({
             scrollTrigger: {
                trigger: "#counter-section",
                start: "top top",
                pin: "#counter-section",
                scrub: 1,
                end: "+=1000",
              
            },
        });
        tl.from(".main-text", {
            opacity: 0,
            duration: 1,
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
            duration: 3,
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
            ease: "power1.in",
        })
        tl.to({}, { duration: 5 }); // <- add 1 second of "nothing"

    }, {scope: sectionRef.current!})

    return(
        <section id = "counter-section" className="bg-primary h-screen" ref = {sectionRef}>
            <div className="section-container flex space-x-12 py-[150px]">
                <div className="flex-1 pr-12 flex flex-col justify-center space-y-4 ">
                    <div className="text-border fade-in">ACADEMIC VISIBILITY</div>
                    <h1 className="text-5xl text-white font-bold main-text"><span className="text-secondary counter-text">87</span> Total Publications and <span className="text-secondary"><span className="counter-text">1100</span>+</span> Citations</h1>
                    <p className="text-white text-lg fade-in">
                    Dr. Thapa's research has advanced hydrogen energy, hydropower innovation, and sustainable systems, with global recognition across 20+ international conferences.
                    </p>
                    <div className="fade-in">
                        <Button variant="accent" className="w-[150px]">Learn More</Button>
                    </div>
                </div>
                <div className="counter">
                    <h1 className="text-5xl text-white text-center mb-12">Total <span className="text-secondary">Counter</span></h1>
                    <div className="flex flex-col">
                        {
                            Data.map((x, i)=>(
                                <div className="flex text-3xl max-w-[500px] min-w-[450px] px-2 py-6 border-b-[1px] border-b-background" key = {i}>
                                    <div className="w-[200px] text-secondary font-bold ">
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