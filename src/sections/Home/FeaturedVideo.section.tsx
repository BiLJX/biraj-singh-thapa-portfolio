import Image from "next/image";
import Hero from "../../../public/home/TedxHero.png"
import Button from "@/components/buttons/buttons";
export default function FeaturedVideoSection(){
    return(
        <section className="bg-black h-screen">
            <div className="section-container h-full flex">
                <div className="w-[800px] h-full relative ">
                    <div className="overlay image-featured-overlay" />
                    <Image src = {Hero} className="w-full h-full object-cover object-[15%_75%]" alt = "TedX Speech Picture" />
                </div>
                <div className="flex flex-col h-full flex-1 justify-center space-y-4 pl-12 ml-12">
                    <span className="text-border">FEATURED VIDEO</span>
                    <h1 className="text-5xl text-white font-bold">Nepal's green hydrogen future</h1>
                    <p className="text-white text-lg">Dr. Biraj Singh Thapa talks about the potential of energy transition with green hydrogen production and usage in the video. By highlighting its production and awareness in other parts of the world, he highlights the efforts of Kathmandu University and Nepal in producing and utilizing Green Hydrogen.</p>
                    <Button className="py-4" variant="white-outlined">Watch Full →</Button>
                </div>
            </div>
        </section>
    )
}