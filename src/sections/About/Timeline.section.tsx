'use client';

import { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { MdClose } from "react-icons/md";
import { useRouter } from 'next/navigation';
import Button from '@/components/buttons/buttons';

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
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    }, []);
    return (
        <div className="relative w-full text-white  h-screen bg-cover flex justify-center items-center" style={{ backgroundImage: `url('/about/edu/ntnu.jpg')` }}>
            <div className='overlay bg-black/50' />
            <div className='flex flex-col  space-y-6 z-10'>
                <h1 className='text-5xl'>Dr. Biraj Singh Thapa’s Education</h1>
                <p className='text-lg text-center'>View Dr. Biraj Singh Thapa’s All Education in a Timeline</p>
                <Button variant='white-outlined' onClick={()=>router.push("/about/timeline")}>View</Button>
            </div>
        </div>
    );
}

