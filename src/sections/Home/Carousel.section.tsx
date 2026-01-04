"use client"
import { cn } from "@/utils/cn.utils";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface TItem {
    image_src: string;
    title: any;
    description: string;
    external_link?: string,
    link?: string
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
        image_src: "/home/carousel/Achiv.jpg",
        link: "/achievements"
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
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile on mount
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleInteraction = (i: number) => {
        if (isMobile) {
            setIndexActive(indexActive === i ? 0 : i);
        } else {
            setIndexActive(i);
        }
    };

    return(
        <section className="bg-black">
            <div className="px-4 md:px-6 py-8 md:py-12 flex flex-col md:flex-row items-stretch gap-2 md:gap-0">
                {
                    Items.map((x, i)=>(
                        <div     
                            key = {i}   
                            onClick={() => handleInteraction(i)}
                            onMouseEnter={() => !isMobile && setIndexActive(i)} 
                            onMouseLeave={() => !isMobile && setIndexActive(0)}  
                            className={cn("md:px-1 flex-1 cursor-pointer h-[200px] md:h-[80vh] saturate-0 transition-all z-10 duration-300", {"flex-[2] md:flex-[1.5] saturate-100": indexActive === i})}
                        >
                            <div 
                            className={cn("h-full flex p-4 md:p-6 flex-col bg-cover bg-center relative rounded-lg md:rounded-none")} 
                            style={{backgroundImage: `url('${x.image_src}')`}}>
                                <div className="absolute top-0 left-0 h-full w-full bg-[#000000b0] rounded-lg md:rounded-none" />
                            {indexActive === i && (   <div className="mt-auto space-y-2 md:space-y-4 text-white z-10 relative">
                                    <h1 className="text-base md:text-xl">{x.title}</h1>
                                    <h1 className="text-xs md:text-sm">{x.description}</h1>
                                   {x.link?<Link className="text-xs hover:text-secondary" href = {x.link}>VIEW →</Link>:( <a className="text-xs hover:text-secondary" target="_blank" href = {x.external_link}>VIEW →</a>)}
                                </div>)}
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

