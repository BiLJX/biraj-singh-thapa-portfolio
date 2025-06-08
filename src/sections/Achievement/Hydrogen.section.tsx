import Button from "@/components/buttons/buttons";
import PreviewableImage from "@/components/Image/PreviewableImage";
import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useId, useRef } from "react"
import Image1 from "@/../public/achievements/hydrogen/car.jpg"
import Image2 from "@/../public/achievements/hydrogen/pump.jpg"

export default function HydrogenSection(){
    const containerRef = useRef<HTMLElement>(null);
    return(
        <>
            <section ref = {containerRef} className="flex bg-fixed relative justify-center items-center h-screen bg-cover bg-[20%_20%]" style = {{backgroundImage: `url('/achievements/hydrogen/hydrogen.jpg')`}}>
                <div className="text-white text-5xl z-20 flex flex-col items-center space-y-8 section-container">
                    <h1 className="inline-block text-center font-bold " >
                        Pioneering Hydrogen Production and Vehicle Refueling in Nepal
                    </h1>
                    <p className="text-xl paragraph text-center max-w-[900px] text-border">
                        The success, achieved with collaboration from the Nepal Oil Corporation and with equipment imported from South Korea, was a milestone achievement in introducing hydrogen as a viable fuel to Nepal's transport sector.
                    </p>
                    <a className="flex" href = "https://ghlab.ku.edu.np/" target="_blank">
                        <Button variant="white-outlined">Learn More</Button>
                    </a>
                </div>
                <div className="overlay bg-[#000000e0]" />
            </section>
            <div>
                <section className="bg-[#1b3d39]">
                    <div className="flex flex-wrap space-y-4 justify-center w-full items-center space-x-8 additional-pictures min-h-screen section-container">
                        <div  className = "picture flex-1 space-y-8">
                            <PreviewableImage className ="object-cover w-full h-full" src = {Image1} alt="image"/>
                        </div>
                        <div className = "picture flex-1">
                            <PreviewableImage className ="object-cover w-full h-full" src = {Image2} alt="image"/>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}