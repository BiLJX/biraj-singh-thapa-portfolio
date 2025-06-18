import Image from "next/image";
import Hero from "@/../public/about/hero.png"
import Button from "@/components/buttons/buttons";
import { MdOutlineEngineering } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
export default function HeroAboutSection(){
    return(
        <section className="bg-text-main h-screen">
            <div className="section-container flex h-full">
                <div className="flex-1 flex flex-col ">
                    <div className="flex flex-col space-y-6 justify-center flex-1">
                        <h1 className="text-5xl text-white font-bold">About Dr. Biraj Singh Thapa</h1>
                        <p className="text-lg text-white">Dr. Biraj Singh Thapa is Assistant Professor at the Department of Mechanical Engineering at Kathmandu University, Nepal. His area of specialization is hydropower and green hydrogen.</p>
                        <div className="flex">
                            <Button variant="secondary-outlined">Send A Message</Button>
                            <Button variant="transparent">Join A Project</Button>
                        </div>
                    </div>
                    <div className="flex space-x-6">
                        <div className="flex flex-col">
                            <h4 className="text-secondary font-bold text-2xl">110</h4>
                            <p className="text-white">Publications</p>
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-secondary font-bold text-2xl">1000+</h4>
                            <p className="text-white">Citations</p>
                        </div>
                    </div>
                </div>
                <div className="h-full">
                    <Image src={Hero} alt = "Hero Image" />
                </div>
                <div className="flex-1 flex flex-col">
                    <div className="flex flex-col space-y-6 justify-center flex-1">
                        <FeatureItem Icon={MdOutlineEngineering} title="Engineer" caption="Uses hydropower, hydrogen, and systems design to shape a sustainable future." />
                        <FeatureItem Icon={FaChalkboardTeacher} title="Professor" caption="	Associate Professor at KU, guiding future clean energy leaders" />
                        <FeatureItem Icon={GiArchiveResearch} title="Researcher" caption="Dedicated to solving real-world problems through science and innovation." />
                    </div>
                    
                    <div className="">
                        <Button variant="accent">birajsinghthapa@gmail.com</Button>
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
        <div className="flex space-x-6">
            <div className="w-[100px] flex justify-center items-center">
                <Icon size = {50} className="text-subtle-accent" />
            </div>
            <div className="flex flex-col">
                <h4 className="text-subtle-accent text-lg font-bold">{title}</h4>
                <p className="text-white">{caption}</p>
            </div>
        </div>
    )
}