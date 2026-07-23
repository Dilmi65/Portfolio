"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const socialWork = [
    {
        id: 1,
        title: "A Program for world Mental Health Day",
        description: "To mark World Mental Health Day, a program was conducted on October 21, 2025, to raise awareness about mental health among the staff of the Warakapola Divisional Secretariat. Through engaging activities that fostered happiness and enjoyment, the participants were practically educated on mental health.",
        images: ["/ago4.jpg", "ago1.jpg", "ago3.jpg", "ago2.jpg", "ago5.jpg", "ago6.jpg"]
    },

    {
        id: 2,
        title: "A program to raise awareness among the youth community about effectively dealing with problems.",
        description: "Today, the youth of the society mostly hears news that they are unable to face the various problems that come in their lives properly and are unable to act correctly and make intelligent decisions in such situations, which leads to various bitter experiences and problems in life. Based on this fact, programs were conducted at Kegalle Technical College on 2025/9/23 under the leadership of the Social Services Division of the Warakapala Divisional Secretariat. Here, what is stress, Depression, Anxiety and informed about the services available from a counselor in such situations, how to act wisely, and how to make the right decisions for their future lives. The program was conducted for them, blending various activities with fun and enjoyment.",
        images: ["/kt1.jpg", "/kt2.jpg", "/kt3.jpg"]
    },
    {
        id: 3,
        title: "An overview of the value of psychological counseling",
        description: " Awareness regarding psychological counseling—specifically what it entails, its importance, and how to access the service—remains at a very low level in today's society specially among the youth. Consequently, an awareness program was conducted for the youth at the Warakapola Technical College on September 9, 2025, at the institute's premises. as well as this day they informed about what is stress, Depression, Anxiety and how to act wisely, and how to make the right decisions for their future lives. ",
        images: ["/wt1.jpg", "/wt2.jpg"]
    },
    {
        id: 4,
        title: "A program aimed at the mental well-being of school children.",
        description: " A program featuring various activities was held for the students of Paspolakanda School on the school premises on November 7, 2025. The session provided insights into the value of psychological counseling, how to plan for the future to succeed in life, and how to respond intelligently to challenging situations.",
        images: ["/ps1.jpg", "/ps2.jpg", "/ps4.jpg", "/ps3.jpg", "/ps5.jpg", "/ps6.jpg", "/ps7.jpg"]
    },


];

function SocialWorkCard({
    title,
    description,
    images,
}: {
    title: string;
    description: string;
    images: string[];
}) {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % images.length);
    const prev = () =>
        setCurrent((prev) => (prev - 1 + images.length) % images.length);

    // Auto-slide logic
    useEffect(() => {
        if (images.length <= 1) return; // image එකයි නම් slide කරන්න ඕන නෑ

        const timer = setInterval(() => {
            next();
        }, 3000); // 3 seconds කට වතාවක් next image එකට යනවා

        return () => clearInterval(timer); // component unmount වෙනකොට timer එක clear කරනවා
    }, [current, images.length]);

    return (
        <div className="rounded-xl overflow-hidden border border-line bg-paper shadow-sm hover:shadow-md transition">
            <div className="relative w-full h-56 group">
                <Image
                    src={images[current]}
                    alt={`${title} - image ${current + 1}`}
                    fill
                    className="object-cover transition-opacity duration-500"
                />

                {images.length > 1 && (
                    <>
                        <button
                            onClick={prev}
                            aria-label="Previous image"
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            onClick={next}
                            aria-label="Next image"
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
                        >
                            <ChevronRight size={18} />
                        </button>

                        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                            {images.map((_, i) => (
                                <span
                                    key={i}
                                    className={`w-1.5 h-1.5 rounded-full ${i === current ? "bg-white" : "bg-white/50"
                                        }`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            <div className="p-4">
                <h3 className="font-semibold text-ink">{title}</h3>
                <p className="text-sm text-ink/70 mt-1">{description}</p>
            </div>
        </div>
    );
}

export default function Socialwork() {
    return (
        <section id="socialwork" className="border-t border-line bg-paperDim">
            <div className="mx-auto max-w-content px-6 py-20 md:px-10">
                <p className="eyebrow text-teal">Social Work</p>
                <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
                    Beyond Code
                </h2>

                <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                    {socialWork.map((item) => (
                        <SocialWorkCard
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            images={item.images}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
