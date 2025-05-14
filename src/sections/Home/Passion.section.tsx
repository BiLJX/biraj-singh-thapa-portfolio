"use client"
import Button from "@/components/buttons/buttons";
import Image from "next/image";
import PassionImage from "@/../public/home/passion.png";
import { IoMdBatteryCharging } from "react-icons/io";
import { IoWaterOutline } from "react-icons/io5";
import { IoMdGitMerge } from "react-icons/io";
import { HiOutlineUsers } from "react-icons/hi";
import { FaGlobeAmericas } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

export default function PassionSection(){
    const sectionRef = useRef<HTMLElement>(null)
    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".passion-image", {
             scrollTrigger: {
                trigger: "",
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power1.in",
        })
        gsap.from(".passion-fade-in", {
            scrollTrigger: {
                trigger: sectionRef.current,
                pin: true,
                scrub: 2,
                start: "10% top",
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power1.in",
            stagger: 0.3
        })
    }, {scope: sectionRef})
    return(
        <section className="bg-white" id = "passion-section" ref = {sectionRef}>
            <div className="section-container flex flex-col space-y-[5rem] ">
                <div className="flex flex-col items-center space-y-2">
                    <p className="text-xs text-text-light">PASSION</p>
                    <h1 className="text-4xl font-semibold">Driving Nepal's <span className="text-accent">Hydrogen</span> Revolution</h1>
                </div>
                <div className="flex space-x-20 items-center">
                    <div className="flex flex-col flex-1 space-y-4">
                        <p className="italic text-lg passion-fade-in">Dr. Biraj Singh Thapa is transforming Nepal's hydropower surplus into a clean hydrogen economy – powering industries, homes, and the nation's energy independence.</p>
                        <div className="flex flex-col">
                            <PassionItem
                            title="Green Hydrogen Promotion"
                            description="Established Nepal's first research hub at KU, advising national policy"
                            Icon={IoMdBatteryCharging}
                            />
                            <PassionItem
                            title="Hydropower Innovation"
                            description="Reimagining Nepal's rivers as engines for clean energy."
                            Icon={IoWaterOutline}
                            />
                            <PassionItem
                            title="Interdisciplinary Systems"
                            description="Breaking barriers between engineering fields."
                            Icon={IoMdGitMerge}
                            />
                            <PassionItem
                            title="Talent Development and Education"
                            description="Cultivating Nepal's next generation of energy leaders."
                            Icon={HiOutlineUsers}
                            />
                            <PassionItem
                            title="Public Policy and Community Impact"
                            description="Driving real-world change through scholarship."
                            Icon={FaGlobeAmericas}
                            />
                        </div>
                        <div className="pt-2 passion-fade-in">
                            <Button variant="accent">Explore His Research →</Button>
                        </div>
                    </div>
                    <div>
                        <Image src={PassionImage} alt = "Passion Image" className="passion-image h-[70vh] object-cover" />
                    </div>
                </div>
            </div>
        </section>
    )
}

interface Props {
    Icon: any;
    title: string;
    description: string;
}

function PassionItem({Icon, description, title}: Props){
    return(
        <div className="flex w-full space-x-4 py-2 passion-fade-in">
            <div className="flex items-center">
           
                <Icon size = {30} className = "!text-accent"  />
            </div>
            <div className="flex flex-col">
                <h6 className="text-text-main font-semibold text-lg">{title}</h6>
                <p className="text-text-light">{description}</p>
            </div>
        </div>
    )
}