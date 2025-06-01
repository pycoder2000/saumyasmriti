"use client";


const services = [
    {
        id: 1,
        title: "AI Consulting",
        description: "Strategic AI solutions and implementation guidance for businesses looking to leverage artificial intelligence effectively.",
        image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Digital Marketing",
        description: "Comprehensive digital marketing strategies with a focus on social media, content creation, and campaign management.",
        image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Content Strategy",
        description: "Expert content creation and strategy development to engage your audience and drive meaningful connections.",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Business Development",
        description: "Strategic business growth solutions with a focus on market analysis, partnerships, and sustainable development.",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
    }
];

const Services = () => {
    return (
        <section id="services" className="min-h-screen text-center py-8 px-8 xl:px-0 flex flex-col justify-center scroll-mt-20">
            <span className="text-gray-400 text-lg max-w-lg mx-auto mb-2 capitalize flex items-center justify-center">
                what we're offering
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-indigo-600 ml-3 w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            </span>

            <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-semibold max-w-3xl mx-auto mb-16 leading-snug">
                Services Built Specifically for your Business
            </h1>

            <div className="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
                {services.map((service, index) => (
                    <div key={service.id} className="card bg-gray-800/50 backdrop-blur-sm p-10 relative rounded-2xl">
                        <div className="circle" style={{ backgroundImage: `url(${service.image})` }} />
                        <div className={`relative ${index % 2 === 0 ? 'lg:pr-52' : 'lg:pl-48'}`}>
                            <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl font-playfair">
                                {service.title}
                            </h2>
                            <p className="text-gray-400">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx global>{`
                @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,400&display=swap");

                .font-playfair {
                    font-family: "Playfair Display", serif;
                    font-optical-sizing: auto;
                    font-weight: 400;
                    font-style: normal;
                }

                .card {
                    position: relative;
                    overflow: hidden;
                }

                .card::before {
                    position: absolute;
                    content: "";
                    width: 100%;
                    height: 100%;
                    transition: 0.6s;
                    z-index: 0;
                    background-color: #4338ca;
                }

                .card:hover {
                    box-shadow: 0.063rem 0.063rem 1.25rem 0.375rem rgba(203, 172, 249, 0.2);
                }

                .card:nth-child(1)::before {
                    bottom: 0;
                    right: 0;
                    clip-path: circle(calc(6.25rem + 7.5vw) at 100% 100%);
                }

                .card:nth-child(2)::before {
                    bottom: 0;
                    left: 0;
                    clip-path: circle(calc(6.25rem + 7.5vw) at 0% 100%);
                }

                .card:nth-child(3)::before {
                    top: 0;
                    right: 0;
                    clip-path: circle(calc(6.25rem + 7.5vw) at 100% 0%);
                }

                .card:nth-child(4)::before {
                    top: 0;
                    left: 0;
                    clip-path: circle(calc(6.25rem + 7.5vw) at 0% 0%);
                }

                .card:hover::before {
                    clip-path: circle(110vw at 100% 100%);
                }

                .card:hover p {
                    color: #fff;
                }

                .circle {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    z-index: 0;
                    background-repeat: no-repeat;
                    background-position: 50% 50%;
                    background-size: cover;
                }

                .card:nth-child(1) .circle {
                    bottom: 0;
                    right: 0;
                    clip-path: circle(calc(6.25rem + 7.5vw) at 100% 100%);
                }

                .card:nth-child(2) .circle {
                    bottom: 0;
                    left: 0;
                    clip-path: circle(calc(6.25rem + 7.5vw) at 0% 100%);
                }

                .card:nth-child(3) .circle {
                    top: 0;
                    right: 0;
                    clip-path: circle(calc(6.25rem + 7.5vw) at 100% 0%);
                }

                .card:nth-child(4) .circle {
                    top: 0;
                    left: 0;
                    clip-path: circle(calc(6.25rem + 7.5vw) at 0% 0%);
                }

                @media screen and (min-width: 62.5rem) {
                    .circle {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        z-index: 0;
                    }
                }
            `}</style>
        </section>
    );
};

export default Services;