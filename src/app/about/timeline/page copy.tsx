'use client';

import { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { MdClose } from "react-icons/md";
import { useRouter } from 'next/navigation';
gsap.registerPlugin(ScrollTrigger);

interface TimelineItem {
    id: string;
    year: string;
    title: string;
    content: string;
    bg: string;
}

const timelineData: TimelineItem[] = [
    {
        id: 'item1',
        year: '1996',
        title: 'Early Education',
        content: 'Dr. Biraj Singh Thapa completed his Intermediate of Science at Kathmandu University (1996–1998), building a strong foundation in physics, mathematics, and engineering principles.',
        bg: '/about/edu/ku1.jpg',
    },
    {
        id: 'item2',
        year: '1998',
        title: 'Bachelor’s degree',
        content: "Bachelor of Engineering (B.E.) in Mechanical Engineering at Kathmandu University. He developed an interest in energy systems and mechanics.",
        bg: '/about/edu/ku2.jpg',
    },
    {
        id: 'item3',
        year: '2003',
        title: 'Master’s degree',
        content: 'M.Sc. in renewable energy engineering (2003–2005) at Tribhuvan University. He focused on sustainable energy solutions for Nepal.',
        bg: '/about/edu/tu.webp',
    },
    {
        id: 'item4',
        year: '2010',
        title: 'MS by research',
        content: 'Dr. Birah Singh Thapa pursued an MS by Research in Hydraulic Machinery from 2010 to 2012, specializing in sediment erosion in turbines.',
        bg: '/about/edu/ku3.jpeg',
    },
    {
        id: 'item5',
        year: '2013',
        title: 'PhD journey',
        content: 'Dr. Birah Singh Thapa pursued advanced studies in fluid engineering abroad, earning a PhD from NTNU, Norway, from 2013 to 2016, with focused research on sediment erosion in Francis turbines, becoming an expert in hydropower turbine efficiency.',
        bg: '/about/edu/ntnu.jpg',
    },
];

export default function TimelineSection() {
    const router = useRouter()
    const containerRef = useRef<HTMLDivElement>(null);
    const bgRefs = useRef<(HTMLDivElement | null)[]>([]);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {

        bgRefs.current.forEach((bg, i) => {
            if (!bg) return;

            gsap.set(bg, { autoAlpha: i === 0 ? 1 : 0 });

            ScrollTrigger.create({
                trigger: sectionRefs.current[i],
                start: 'top center',
                end: 'bottom center',
                onEnter: () => {
                    gsap.to(bg, { autoAlpha: 1, duration: 1 });
                    
                },
                onLeave: () => {
                    gsap.to(bg, { autoAlpha: 0, duration: 1 });
                },
                onEnterBack: () => {
                    gsap.to(bg, { autoAlpha: 1, duration: 1 });
                },
                onLeaveBack: () => {
                    gsap.to(bg, { autoAlpha: 0, duration: 1 });
                },
            });
        });
        ScrollTrigger.create({
    trigger: containerRef.current,
    start: "top top",
    end: "bottom bottom",
    snap: {
      snapTo: 1 / (timelineData.length - 1), // evenly snap to each section
      duration: 0.7,                         // snap animation duration
      delay: 0.0,                            // small delay before snap
      ease: "expo.inOut"                   // easing
    }
  });
    }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[500vh] overflow-hidden ">
        <nav className="w-full fixed top-0 left-0 z-90 p-8">
            <button className="cursor-pointer rounded-full p-2 hover:bg-[#ffffff63] transition-colors ease-in duration-300" onClick={()=>router.push("/about")}>
                <MdClose color="#fff" size={50} />
            </button>
        </nav>
        {/* Backgrounds */}
        {timelineData.map((item, i) => (
            <div
            key={item.id}
            ref={(el) => {(bgRefs.current[i] = el)}}
            className="fixed top-0 left-0 w-full h-screen bg-cover bg-center opacity-0"
            style={{ backgroundImage: `url(${item.bg})` }}
            >
                <div className="w-full h-full" style={{backgroundColor: "#000", opacity: "67%"}} />
            </div>
        ))}

        {/* Scrollable Content */}
        <div className="relative z-10">
            {timelineData.map((item, i) => (
                <div
                key={item.id}
                ref={(el) => {(sectionRefs.current[i] = el)}}
                className="h-screen flex flex-col items-center justify-center text-white text-center px-4 space-y-4"
                >
                    <h2 className="text-6xl font-bold mb-4">{item.year}</h2>
                    <h3 className="text-4xl font-semibold mb-2">{item.title}</h3>
                    <p className="max-w-xl text-lg">{item.content}</p>
                </div>
        ))}
    </div>
    </div>
  );
}

