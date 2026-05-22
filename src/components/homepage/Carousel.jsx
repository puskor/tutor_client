"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
    {
        image:
            "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2070&auto=format&fit=crop",
        title: "Learn From Expert Tutors",
        desc: "Improve your skills through personalized learning.",
    },
    {
        image:
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
        title: "Interactive Online Classes",
        desc: "Join engaging live classes and enjoy an interactive learning experience.",
    },
    {
        image:
            "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop",
        title: "Achieve Academic Success",
        desc: "Build confidence, develop skills, and reach your educational goals.",
    },
];

const Carousel = () => {
    const [current, setCurrent] = useState(0);

    // Auto Play
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">

            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    {/* Background Image */}
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        priority
                        className="object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0B2E52]/90 via-[#0B2E52]/60 to-black/20" />

                    {/* Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="max-w-7xl mx-auto px-6 w-full">
                            <div className="max-w-2xl">

                                <span className="bg-white/10 text-white border-cyan-100 border-white/20 px-4 py-2 rounded-full text-sm backdrop-blur-md">
                                    Trusted Learning Platform
                                </span>

                                <h1 className="mt-5 text-4xl md:text-6xl font-bold text-white leading-tight">
                                    {slide.title}
                                </h1>

                                <p className="mt-5 text-lg text-gray-200 leading-relaxed">
                                    {slide.desc}
                                </p>

                                <div className="mt-8 flex gap-4">
                                    <Link href={"/tutors"}>
                                        <button className="border border-white/30 text-white px-6 py-3 rounded-xl hover:bg-white/10 transition">
                                            Find a Tutor
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`transition-all duration-300 rounded-full ${index === current
                            ? "w-8 h-3 bg-white"
                            : "w-3 h-3 bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;