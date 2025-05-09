import Button from "@/components/buttons/buttons";

interface TData {
    label: string;
    value: number;
}

const Data: TData[] = [
    {
        label: "Publications",
        value: 87
    },
    {
        label: "Citations",
        value: 1661
    },
    {
        label: "h-index",
        value: 19
    },
    {
        label: "i10-index",
        value: 39
    }
]

export default function CounterSection(){
    return(
        <section className="bg-primary">
            <div className="section-container flex space-x-12 py-[150px]">
                <div className="flex-1 pr-12 flex flex-col justify-center space-y-4">
                    <div className="text-border">ACADEMIC VISIBILITY</div>
                    <h1 className="text-5xl text-white font-bold"><span className="text-secondary">87</span> Total Publications and <span className="text-secondary">1,100+</span> Citations</h1>
                    <p className="text-white text-lg">
                    Dr. Thapa's research has advanced hydrogen energy, hydropower innovation, and sustainable systems, with global recognition across 20+ international conferences.
                    </p>
                    <Button variant="accent" className="w-[150px]">Learn More</Button>
                </div>
                <div>
                    <h1 className="text-5xl text-white text-center mb-12">Total <span className="text-secondary">Counter</span></h1>
                    <div className="flex flex-col">
                        {
                            Data.map((x, i)=>(
                                <div className="flex text-3xl max-w-[500px] min-w-[450px] px-2 py-6 border-b-[1px] border-b-background">
                                    <div className="w-[200px] text-secondary font-bold">
                                        {x.value}
                                    </div>
                                    <div className="flex-1 text-white">
                                        {x.label}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}