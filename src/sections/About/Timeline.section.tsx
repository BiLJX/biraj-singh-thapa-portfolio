'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface TimelineItem {
    year: string;
    title: string;
    content: string;
    bg: string;
}

const timelineData: TimelineItem[] = [
    {
        year: '1996',
        title: 'Early Education',
        content:
            'Dr. Biraj Singh Thapa completed his Intermediate of Science at Kathmandu University (1996-1998), building a strong foundation in physics, mathematics, and engineering principles.',
        bg: '/home/Hero.jpg',
    },
    {
        year: '1999',
        title: 'Undergraduate Studies',
        content: 'He pursued his Bachelor\'s degree in Mechanical Engineering...',
        bg: '/home/Hero.png',
    },
    {
        year: '1929',
        title: 'Unasdasasddergraduate Studies',
        content: 'He pursueasdasdasd his Bachelor\'s degree in Mechanical Engineering...',
        bg: '/home/Hero2.png',
    },
    {
        year: '1929',
        title: 'Unasdasasddergraduate Studies',
        content: 'He pursueasdasdasd his Bachelor\'s degree in Mechanical Engineering...',
        bg: '/home/Hero2.png',
    },
];

export default function TimelineSection() {
    const sectionsRef = useRef<HTMLDivElement[]>([]);
    const bgRef = useRef<HTMLDivElement>(null);
    const bgRefs = useRef<HTMLDivElement[]>([]);
    let activeBg = 0;
    const mainSectionRef = useRef<HTMLDivElement>(null);

    // useGSAP(() => {
    //     timelineData.forEach((item, index) => {
    //         ScrollTrigger.create({
    //             trigger: sectionsRef.current[index],
    //             start: 'top center',
    //             end: 'bottom center',
    //             onEnter: () => {
    //                 gsap.to(bgRef.current, {
    //                     backgroundImage: `url('${item.bg}')`,
    //                     duration: 0.5,
    //                     ease: 'power2.out',
    //                 });
    //             },
    //             onEnterBack: () => {
    //                 gsap.to(bgRef.current, {
    //                     backgroundImage: `url('${item.bg}')`,
    //                     duration: 0.5,
    //                     ease: 'power2.out',
    //                 });
    //             },
    //         });
    //     });
    // }, []);

    useGSAP(() => {
        const numberOfSections = sectionsRef.current.length
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: mainSectionRef.current,
                start: "top top",
                pin: true,
                scrub: 2,
                
            }
        })
        tl.to(".content", {
            y: `${-100*numberOfSections}vh`,
            duration: numberOfSections,
            stagger: 1
        })
        tl.to(bgRef.current, {
            backgroundImage: `url('/home/Hero.jpg')`
        })
        sectionsRef.current.forEach((el, i)=>{
            ScrollTrigger.create({
                trigger: el,
                start: "top center",

                // markers: true,
                onEnter: () => {
                    const item = timelineData[i];
                    gsap.to(bgRef.current, {
                        backgroundImage: `url('${item.bg}')`,
                        duration: 0.5,
                        ease: 'power2.out',
                    });
                },
                onEnterBack: ()=>{
                    const item = timelineData[i];
                    gsap.to(bgRef.current, {
                        backgroundImage: `url('${item.bg}')`,
                        duration: 0.5,
                        ease: 'power2.out',
                    });
                }
            },)
        })
       

    }, [])

    return (
        <div className="relative w-full h-[400vh]" ref={mainSectionRef}>
            {/* Backgrounds */}

            <div
                ref={bgRef}
                className="bg absolute inset-0  bg-cover bg-center"
                style={{ backgroundImage: `url('${timelineData[0].bg}')` }}
            />
            {/* Timeline Content */}

            <div className="w-2 bg-white h-full relative mx-10">
                {timelineData.map((item, index) => (
                    <div
                        key={index}
                        ref={(el) => { el && (sectionsRef.current[index] = el) }}
                        className="content timeline-section top-0 w-screen h-screen flex items-center justify-between px-20"
                    >
                        {/* <div className="dot w-4 h-4 bg-white rounded-full absolute left-[-1rem] top-1/2 transform -translate-y-1/2" /> */}
                        <div className="max-w-xl">
                            <h1 className="text-4xl font-bold">{item.year}</h1>
                            <h2 className="text-xl mt-2">{item.title}</h2>
                            <p className="mt-4">{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
