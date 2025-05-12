import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

export default function SplashScreen(){
    const sectionRef = useRef<HTMLElement>(null)
    useGSAP(()=>{
        gsap.to(".splash-animation-text", {
            color: "#F2C94C",
            duration: 0.2,
            stagger: 1,
            repeat: -1,
            repeatDelay: 1,
            ease: "power1.in"
        })
    }, {scope: sectionRef})
    return(
        <section className="w-full h-screen bg-primary z-[99] fixed flex justify-center items-center" ref = {sectionRef}>
            <h1 className="text-4xl font-bold text-white">
                <span className="splash-animation-text">Biraj</span> <span className="splash-animation-text">Singh</span> <span className="splash-animation-text"> Thapa</span>
            </h1>
        </section>
    )
}