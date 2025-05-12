"use client"
import Button from "@/components/buttons/buttons";
import { cn } from "@/utils/cn.utils";
import { useGSAP } from "@gsap/react";
import { forwardRef, useRef, useState } from "react";
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contents: TContents[] = [
    {
        title: "Green Hydrogen Potentials from Surplus Hydro Energy in Nepal",
        description: "Evaluates the feasibility of utilizing excess hydroelectric power for green hydrogen production in Nepal.",
        href: "https://www.sciencedirect.com/science/article/abs/pii/S0360319921014452",
        image_src: "/home/articles/1.jpg"
    },
    {
        title: "Economy of Scale for Green Hydrogen-Derived Fuel Production in Nepal",
        description: "Analyzes the cost-effectiveness of scaling up green hydrogen fuel production in Nepal.",
        href: "https://www.frontiersin.org/journals/chemistry/articles/10.3389/fchem.2024.1347255/full",
        image_src: "/home/carousel/Biraj.jpg"
    },
    {
        title: "Sediment Erosion in Hydro Turbines and Its Effect on the Flow Around Guide Vanes of Francis Turbine",
        description: "Investigates how sediment erosion impacts the performance of Francis turbines.",
        href: "https://www.sciencedirect.com/science/article/abs/pii/S1364032115004517",
        image_src: "/home/articles/3.jpg"
    },
    {
        title: "Empirical Modelling of Sediment Erosion in Francis Turbines",
        description: "Develops empirical models to predict sediment erosion in Francis turbines.",
        href: "https://www.sciencedirect.com/science/article/abs/pii/S0360544212001806",
        image_src: "/home/articles/4.jpg"
    },
]

export default function PublicationSection(){
    const cardsRef = useRef<HTMLDivElement[]>([])
    useGSAP(()=>{
        gsap.from(cardsRef.current, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            stagger: 0.2, // Stagger the animation for each card (sequential)
            ease: "power2.out",
            scrollTrigger: {
                trigger: cardsRef.current[0],
                start: "top 80%", // Start the animation when the cards are 80% in the viewport
                toggleActions: "play none none reverse", // Optional, to reverse the animation when leaving the viewport
            },
        });
    })
    return(
        <section className="bg-black">
            <div className = "section-container space-y-12">
                <h1 className="text-center font-bold text-2xl text-white">Publications That You Make Like</h1>
                <div className="flex space-x-6">
                    {
                        Contents.map((x, i)=><Card title={x.title} description={x.description} image_src={x.image_src} href={x.href} ref={el => {if(el) cardsRef.current[i] = el }} key = {i} />)
                    }
                </div>
            </div>
        </section>
    )
}
interface TContents {
    title: string;
    description: string;
    image_src: string;
    href: string;
}
const Card = forwardRef<HTMLDivElement, TContents>(({description, href, image_src, title}: TContents, ref) =>{
    const [isActive, setIsActive ] = useState(false);
    return(
        <div className = "flex-1 flex flex-col" ref={ref}>
            <div className="w-full h-[470px] relative flex flex-col p-4 cursor-pointer" onMouseEnter={()=>setIsActive(true)} onMouseLeave={()=>setIsActive(false)}>
                <img src = {image_src} className="w-full h-full object-cover overlay"  />
                <div className={cn("overlay bg-[#0000007e] transition-all duration-500", {"bg-[#0000005b]": isActive})} />
                <div className="mt-auto relative z-10 space-y-4">
                    <h1 className="text-white font-bold text-lg">{title}</h1>
                    <div className="space-y-4">
                        <p className={cn("max-h-0 transition-all duration-500 text-white opacity-0 text-sm", {"max-h-40 opacity-100": isActive})}>
                            {description}
                        </p>
                        <a target="_blank" href={href}>
                            <Button variant="white-outlined">See Publication</Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
})

Card.displayName = "Card";