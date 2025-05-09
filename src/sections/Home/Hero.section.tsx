import Button from "@/components/buttons/buttons";

export default function HomeHero(){
    return(
        <section className="h-screen bg-no-repeat bg-cover relative " style={{backgroundImage: `url('/home/Hero.png')`}}>
            <div className="bg-hero-overlay" />
            <div className="section-container z-20 relative flex h-full" >
                <div className="w-[35%] flex flex-col justify-center h-full  space-y-4">
                    <h1 className="text-white text-5xl font-bold">
                        Dr. Biraj <br />
                        Singh Thapa, 
                    </h1>
                    <p className="text-white text-lg">
                        Associate Professor at the Department of Mechanical Engineering & Team Leader of Green Hydrogen Lab at Kathmandu University
                    </p>
                    <p className="text-border italic">
                        “Driving Nepal's transition to clean energy through innovation and research.”
                    </p>
                    <div className="flex space-x-4">
                        <Button variant="accent">Resume</Button>
                        <Button variant="white-outlined">Learn More</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}