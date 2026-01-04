import Image from "next/image";
import Hero from "@/../public/about/hero.png"
import Button from "@/components/buttons/buttons";
import { MdOutlineEngineering } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
export default function HeroAboutSection(){
    return(
        <section className="bg-text-main min-h-screen h-auto lg:h-screen">
            <div className="section-container flex flex-col lg:flex-row h-full gap-8 lg:gap-0">
                <div className="flex-1 flex flex-col order-2 lg:order-1">
                    <div className="flex flex-col space-y-4 md:space-y-6 justify-center flex-1">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold">About Dr. Biraj Singh Thapa</h1>
                        <p className="text-sm sm:text-base md:text-lg text-white">Dr. Biraj Singh Thapa is Assistant Professor at the Department of Mechanical Engineering at Kathmandu University, Nepal. His area of specialization is hydropower and green hydrogen.</p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button className="text-sm md:text-base" variant="secondary-outlined">Send A Message</Button>
                            <Button className="text-sm md:text-base" variant="transparent">Join A Project</Button>
                        </div>
                    </div>
                    <div className="flex gap-6 md:gap-8 mt-6 lg:mt-0">
                        <div className="flex flex-col">
                            <h4 className="text-secondary font-bold text-xl md:text-2xl">110</h4>
                            <p className="text-white text-sm md:text-base">Publications</p>
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-secondary font-bold text-xl md:text-2xl">1000+</h4>
                            <p className="text-white text-sm md:text-base">Citations</p>
                        </div>
                    </div>
                </div>
                <div className="h-[40vh] sm:h-[50vh] lg:h-full flex items-center justify-center order-1 lg:order-2">
                    <Image src={Hero} alt = "Hero Image" className="h-full w-auto object-contain" />
                </div>
                <div className="flex-1 flex flex-col order-3">
                    <div className="flex flex-col space-y-4 md:space-y-6 justify-center flex-1">
                        <FeatureItem Icon={MdOutlineEngineering} title="Engineer" caption="Uses hydropower, hydrogen, and systems design to shape a sustainable future." />
                        <FeatureItem Icon={FaChalkboardTeacher} title="Professor" caption="	Associate Professor at KU, guiding future clean energy leaders" />
                        <FeatureItem Icon={GiArchiveResearch} title="Researcher" caption="Dedicated to solving real-world problems through science and innovation." />
                    </div>
                    
                    <div className="mt-6 lg:mt-0">
                        <Button className="w-full lg:w-auto text-sm md:text-base" variant="accent">birajsinghthapa@gmail.com</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

interface FeatureProps {
    Icon: any;
    title: string;
    caption: string;
}
function FeatureItem({Icon, title, caption}: FeatureProps){
    return(
        <div className="flex gap-4 md:gap-6">
            <div className="w-[60px] sm:w-[80px] md:w-[100px] flex justify-center items-center flex-shrink-0">
                <Icon size = {40} className="text-subtle-accent sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px]" />
            </div>
            <div className="flex flex-col">
                <h4 className="text-subtle-accent text-base md:text-lg font-bold">{title}</h4>
                <p className="text-white text-sm md:text-base">{caption}</p>
            </div>
        </div>
    )
}