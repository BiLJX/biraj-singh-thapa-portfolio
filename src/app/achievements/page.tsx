"use client"
import HydrogenSection from "@/sections/Achievement/Hydrogen.section";
import InternationalSection from "@/sections/Achievement/Internation.section";
import AchivementIntro from "@/sections/Achievement/Intro.section";
import PMSection from "@/sections/Achievement/PM.section";
import StrategySection from "@/sections/Achievement/Strategy.section";
import VisionSection from "@/sections/Home/Vision.section";
import { useRouter } from "next/navigation";

import { MdClose } from "react-icons/md";

export default function AchivementsPage(){
    const router = useRouter();
    return(
        <>
            <nav className="w-full fixed top-0 left-0 z-90 p-8">
                <button className="cursor-pointer rounded-full p-2 hover:bg-[#ffffff63] transition-colors ease-in duration-300" onClick={()=>router.push("/")}>
                    <MdClose color="#fff" size={50} />
                </button>
            </nav>
            <AchivementIntro />
            <PMSection />
            <InternationalSection />
            <HydrogenSection />
            <StrategySection />
        </>
    )
}