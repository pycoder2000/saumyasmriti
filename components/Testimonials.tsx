"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Spotlight } from "./ui/Spotlight";

const testimonials = [
    {
        id: 1,
        name: "Karen D'Mello",
        role: "Head of Community - India, AnitaB.org",
        content: "Saumya worked as a Digital Marketing Intern with us at Tactopus contributing to building key strategies for our social media channels. We have thoroughly enjoyed her time working with us as she has proven to be a truly valuable asset to the core team. She was honest, dependable, and incredibly hard-working. Beyond that, she has impressive communication skills laced with empathy which were her core strengths when designing marketing campaigns for our customers who are parents of children with disabilities.",
        image: "/testimonials/person1.jpg"
    },
    {
        id: 2,
        name: "Aishwarya Chaudhary",
        role: "Secondary English Teacher, Writer, Content Writer",
        content: "Saumya is a diligent researcher with a great eye for detail. She is dedicated, cooperative and dynamic. Working with Saumya was a breeze. I wish her well for her future endeavours.",
        image: "/testimonials/person2.jpg"
    },
    {
        id: 3,
        name: "Devansh Rana",
        role: "Founder at Soul Naturals | Ex-Deloitte",
        content: "Saumya has shown remarkable leadership skills with her team and has tackled critical situations with professionalism. She was highly creative and collaborative with her approach when it came to Digital Marketing. I wish you success in your future ventures!",
        image: "/testimonials/person3.jpg"
    },
    {
        id: 4,
        name: "Shayne Rana",
        role: "Team Leader | Content Specialist | AI Marketing Professional",
        content: "Saumya is a dedicated writer who applies herself to what she is working on. She's a team player and takes critique and feedback extremely well, applying everything she learns to her assignments. I wish her well and am quite sure she will prove to be an asset in her next choice of organisation or industry.",
        image: "/testimonials/person4.jpg"
    }
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div id="testimonials" className="py-20 relative scroll-mt-20">
            <Spotlight
                className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                fill="purple"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Client Testimonials
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Hear what my clients have to say about their experience working with me
                    </p>
                </div>

                <div className="relative h-[400px] overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0"
                        >
                            <div className="bg-black-200/50 backdrop-blur-sm rounded-2xl p-8 h-full">
                                <div className="flex flex-col items-center text-center">
                                    <FaQuoteLeft className="text-purple text-4xl mb-6" />
                                    <p className="text-lg md:text-xl text-gray-300 mb-8">
                                        {testimonials[current].content}
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-purple/20 flex items-center justify-center">
                                            <span className="text-purple text-xl font-bold">
                                                {testimonials[current].name[0]}
                                            </span>
                                        </div>
                                        <div className="text-left">
                                            <h4 className="text-white font-semibold">
                                                {testimonials[current].name}
                                            </h4>
                                            <p className="text-gray-400 text-sm">
                                                {testimonials[current].role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-2 h-2 rounded-full transition-all ${current === index ? "bg-purple w-4" : "bg-gray-600"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;