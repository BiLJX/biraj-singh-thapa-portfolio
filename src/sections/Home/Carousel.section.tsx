"use client"
import { cn } from "@/utils/cn.utils";
import Image from "next/image";
import { useState } from "react";

interface TItem {
    image_src: string;
    title: any;
    description: string;
    external_link?: string,
}

const Items: TItem[] = [
    {
        title: <><span className="font-bold">ABOUT</span> DR. SINGH THAPA</>,
        description: "Learn more about Dr. Biraj Sing Thapa and his personal life.",
        image_src: "/home/carousel/About.jpg",
        
        
    },
    {
        title: <><span className="font-bold">ACHIVEMENTS</span> OF DR. SINGH THAPA</>,
        description: "View all the goals Dr. Biraj Singh Thapa has achieved.",
        image_src: "/home/carousel/Achiv.jpg"
    },
    {
        title: <><span className="font-bold">LAB</span> OF DR. SINGH THAPA</>,
        description: "Learn about green hydrogen lab",
        image_src: "/home/carousel/Lab.jpg",
        external_link: "https://ghlab.ku.edu.np/"
    },
    {
        title: <><span className="font-bold">UPDATES</span> ABOUT WORKS DONE BY DR. SINGH THAPA</>,
        description: "Learn more about Dr. Biraj Sing Thapa and his personal life",
        image_src: "/home/carousel/Updates.jpg"
    },
]

export default function CarouselSection(){
    const [indexActive, setIndexActive] = useState(0);
    return(
        <section className="bg-black">
            <div className="px-6 py-12 flex items-center">
                {
                    Items.map((x, i)=>(
                        <div     key = {i}   onMouseEnter={()=>setIndexActive(i)} onMouseLeave={()=>setIndexActive(0)}  className={cn("px-1 flex-1  cursor-pointer h-[80vh] saturate-0 transition-all z-10  duration-300", {"flex-[1.5] saturate-100": indexActive === i})}>
                            <div 
                            className={cn("h-full flex p-6 flex-col  bg-cover bg-center relative ")} 
                            style={{backgroundImage: `url('${x.image_src}')`}}>
                                <div className="absolute top-0 left-0 h-full w-full bg-[#000000b0]" />
                            {indexActive === i && (   <div className="mt-auto space-y-4 text-white z-10 relative">
                                    <h1 className="text-xl">{x.title}</h1>
                                    <h1 className="text-sm">{x.description}</h1>
                                    <a className="text-xs hover:text-secondary" target="_blank" href = {x.external_link}>LEARN →</a>
                                </div>)}
                            </div>
                        </div>
                       
                    ))
                }
            </div>
        </section>
    )
}

