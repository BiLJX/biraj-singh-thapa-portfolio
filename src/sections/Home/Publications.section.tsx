"use client"
import Button from "@/components/buttons/buttons";
import { cn } from "@/utils/cn.utils";
import { useState } from "react";

interface TContents {
    title: string;
    description: string;
    image_src: string;
    href: string;
}
const Contents: TContents[] = [
    {
        title: "Green Hydrogen Potentials from Surplus Hydro Energy in Nepal",
        description: "Evaluates the feasibility of utilizing excess hydroelectric power for green hydrogen production in Nepal.",
        href: "jkjkasd",
        image_src: "/home/carousel/Biraj.jpg"
    },
    {
        title: "Economy of Scale for Green Hydrogen-Derived Fuel Production in Nepal",
        description: "Analyzes the cost-effectiveness of scaling up green hydrogen fuel production in Nepal.",
        href: "jkjkasd",
        image_src: "/home/carousel/Biraj.jpg"
    },
    {
        title: "Sediment Erosion in Hydro Turbines and Its Effect on the Flow Around Guide Vanes of Francis Turbine",
        description: "Investigates how sediment erosion impacts the performance of Francis turbines.",
        href: "jkjkasd",
        image_src: "/home/carousel/Biraj.jpg"
    },
    {
        title: "Empirical Modelling of Sediment Erosion in Francis Turbines",
        description: "Develops empirical models to predict sediment erosion in Francis turbines.",
        href: "jkjkasd",
        image_src: "/home/carousel/Biraj.jpg"
    },
]

export default function PublicationSection(){
    return(
        <section className="bg-black">
            <div className = "section-container space-y-12">
                <h1 className="text-center font-bold text-2xl text-white">Recent Publications That You Make Like</h1>
                <div className="flex space-x-6">
                    {
                        Contents.map((x, i)=><Card title={x.title} description={x.description} image_src={x.image_src} href={x.href} key = {i} />)
                    }
                </div>
            </div>
        </section>
    )
}

function Card({description, href, image_src, title}: TContents){
    const [isActive, setIsActive ] = useState(false);
    return(
        <div className = "flex-1 flex flex-col">
            <div className="w-full h-[470px] relative flex flex-col p-4 cursor-pointer" onMouseEnter={()=>setIsActive(true)} onMouseLeave={()=>setIsActive(false)}>
                <img src = {image_src} className="w-full h-full object-cover overlay"  />
                <div className={cn("overlay bg-[#0000007e]", {"bg-[#0000005b]": isActive})} />
                <div className="mt-auto relative z-10 transition-all duration-300 space-y-4">
                    <h1 className="text-white font-bold text-lg">{title}</h1>
                    <div className="space-y-4">
                        <p className={cn("max-h-0 transition-all duration-300 text-white opacity-0 text-sm", {"max-h-40 opacity-100": isActive})}>
                            {description}
                        </p>
                        <Button variant="white-outlined">See Publication</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}