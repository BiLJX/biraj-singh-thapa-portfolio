import Button from "@/components/buttons/buttons"

export default function VisibilitySection(){
    const data: Props[] = [
        {
            title: "Nepal achieves milestone in hydrogen production and vehicle refueling",
            sub_title: "My Republica",
            description: "Successful hydrogen production and vehicle refueling has been achieved in Nepal",
            href: "https://myrepublica.nagariknetwork.com/news/nepal-achieves-milestone-in-hydrogen-production-and-vehicle-refueling",
            img_src: "https://republicaimg.nagariknewscdn.com/shared/web/uploads/media/hydrojan-car_20240331164348.jpg"
        },
        {
            title: "Green Hydrogen Summit concludes, Nepal likely to export hydrogen after 10 years",
            sub_title: "My Republica",
            description: "The two-day Nepal Green Hydrogen Summit has been concluded by brainstorming on issues such as the state of hydrogen production technology, investment potential and policy management.",
            href: "https://myrepublica.nagariknetwork.com/news/green-hydrogen-summit-concludes-nepal-likely-to-export-hydrogen-after-10-years",
            img_src: "https://republicaimg.nagariknewscdn.com/shared/web/uploads/media/GreenHydrogenSummitClosing5_20221012134012.JPG"
        },
        {
            title: "Batteries as an alternative to petrol, hydrogen as an alternative to diesel: Dr. Thapa's views",
            sub_title: "Mero Auto",
            description: "Hydrogen could be useful as a long-distance management option for diesel vehicles, but its implementation is currently very challenging",
            href: "https://www.meroauto.com/news/an-alternative-to-diesel-could-be-hydrogen/",
            img_src: "https://www.meroauto.com/wp-content/uploads/2025/04/dr-biraj-singh-thapa.jpg"
        },
        {
            title: "MoU signed to produce chemical fertilizers through green hydrogen",
            sub_title: "Urja Sanchar",
            description: "Kathmandu. A memorandum of understanding has been signed to conduct a detailed feasibility study for the establishment of a chemical fertilizer factory project worth Rs 26 billion prepared by Kathmandu University (KU). ",
            href: "https://urjasanchar.com/4284/",
            img_src: "https://urjasanchar.com/wp-content/uploads/2025/05/hydrogen-agreement-696x392.jpg"
        },
    ]
    return(
        <section className="bg-white">
            <div className="section-container flex flex-col space-y-[5rem] ">
                <div className="flex flex-col items-center space-y-2">
                    <p className="text-xs text-text-light">VISIBILITY</p>
                    <h1 className="text-4xl font-semibold">Featured <span className="text-accent">News</span> and Articles</h1>
                </div>
                <div className="grid grid-cols-2 gap-16">
                    {data.map((x, i)=><Card href={x.href} img_src={x.img_src} key = {i} title={x.title}  description={x.description} sub_title={x.sub_title}/>)}
                </div>
            </div>
        </section>
    )
}

interface Props{
    title: string,
    sub_title: string,
    description: string,
    href: string,
    img_src: string
}
function Card({description, sub_title, title, img_src, href}: Props){
    return(
        <div className="flex flex-col rounded-3xl border-[1px] border-border overflow-hidden">
            <div className="h-[300px]">
                <img src = {img_src} className="w-full h-full object-cover" />
            </div>
            <div className="px-6 py-12 space-y-2">
                <h4 className="text-text-main text-2xl font-medium">{title}</h4>
                <p className="italic text-text-light text-sm">{sub_title}</p>
                <p className="text-text-main">{description}</p>
                <a href = {href} target="_blank">
                    <Button variant="accent-outlined" className="mt-2">Read More</Button>
                </a>
            </div>
        </div>
    )
}