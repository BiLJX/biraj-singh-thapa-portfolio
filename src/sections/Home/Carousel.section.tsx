"use client"
import { cn } from "@/utils/cn.utils";
import Image from "next/image";
import { useState } from "react";

interface TItem {
    image_src: string;
    title: any;
    description: string;
}

const Items: TItem[] = [
    {
        title: <><span className="font-bold">ABOUT</span> DR. SINGH THAPA</>,
        description: "Learn more about Dr. Biraj Sing Thapa and his personal life.",
        image_src: "/home/carousel/Biraj.jpg"
    },
    {
        title: <><span className="font-bold">ACHIVEMENTS</span> OF DR. SINGH THAPA</>,
        description: "View all the goals Dr. Biraj Singh Thapa has achieved.",
        image_src: "/home/carousel/Biraj.jpg"
    },
    {
        title: <><span className="font-bold">ABOUT</span> DR. SINGH THAPA</>,
        description: "Learn more about Dr. Biraj Sing Thapa and his personal life",
        image_src: "/home/carousel/Biraj.jpg"
    },
    {
        title: <><span className="font-bold">ABOUT</span> DR. SINGH THAPA</>,
        description: "Learn more about Dr. Biraj Sing Thapa and his personal life",
        image_src: "/home/carousel/Biraj.jpg"
    },
]

export default function CarouselSection(){
    const [indexActive, setIndexActive] = useState(0);
    return(
        <section className="bg-black">
            <div className="section-container flex space-x-2">
                {
                    Items.map((x, i)=>(
                        <div 
                        onMouseEnter={()=>setIndexActive(i)} onMouseLeave={()=>setIndexActive(0)} 
                        className={cn("cursor-pointer flex p-6 flex-1 flex-col min-h-[650px] bg-cover bg-center relative saturate-0 transition-all duration-300", {"flex-[1.5] z-10 saturate-100": indexActive === i})} 
                        key = {i} 
                        style={{backgroundImage: `url('${x.image_src}')`}}>
                            <div className="absolute top-0 left-0 h-full w-full bg-[#000000b0]" />
                         {indexActive === i && (   <div className="mt-auto space-y-4 text-white z-10 relative">
                                <h1 className="text-xl">{x.title}</h1>
                                <h1 className="text-sm">{x.description}</h1>
                                <span className="text-xs hover:text-secondary">LEARN →</span>
                            </div>)}
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

