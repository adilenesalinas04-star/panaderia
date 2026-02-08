import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative w-full overflow-hidden bg-[var(--color-brand-beige)]">
            {/* Background Ovals - Decorative Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                {/* Top Left Organic Shape */}
                <svg className="absolute top-[-10%] left-[-5%] w-[60%] h-[70%] text-[var(--color-brand-accent)] opacity-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M45.7,-76.3C58.9,-69.3,69.1,-55.9,76.3,-41.8C83.5,-27.7,87.7,-12.9,85.6,1.2C83.5,15.3,75.1,28.7,65.8,40.6C56.5,52.5,46.3,62.9,34.1,69.6C21.9,76.3,7.7,79.3,-5.6,77.5C-18.9,75.7,-31.3,69.1,-42.6,60.8C-53.9,52.5,-64.1,42.5,-71.4,30.3C-78.7,18.1,-83.1,3.7,-80.7,-9.6C-78.3,-22.9,-69.1,-35.1,-58.5,-44.6C-47.9,-54.1,-35.9,-60.9,-23.4,-67.2C-10.9,-73.5,2.1,-79.3,16.2,-81.4C30.3,-83.5,45.5,-81.9,45.7,-76.3Z" transform="translate(100 100)" />
                </svg>

                {/* Bottom Right Organic Shape */}
                <svg className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[80%] text-[var(--color-brand-brown)] opacity-5" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M38.1,-63.9C49.9,-54.5,60.5,-45.3,68.9,-34.2C77.3,-23.1,83.5,-10.1,81.6,1.9C79.7,13.9,69.7,24.9,59.3,34.4C48.9,43.9,38.1,51.9,26.5,58.3C14.9,64.7,2.5,69.5,-9.7,70.5C-21.9,71.5,-33.9,68.7,-44.8,62.1C-55.7,55.5,-65.5,45.1,-71.6,33C-77.7,20.9,-80.1,7.1,-78.3,-6.5C-76.5,-20.1,-70.5,-33.5,-60.9,-44.2C-51.3,-54.9,-38.1,-62.9,-25.1,-67.4C-12.1,-71.9,0.7,-72.9,13.1,-71.5C25.5,-70.1,37.5,-66.3,38.1,-63.9Z" transform="translate(100 100)" />
                </svg>
            </div>

            <div className="relative w-full max-w-7xl mx-auto px-8 py-12 md:py-24 flex flex-col md:flex-row items-center z-10">
                {/* Text Content */}
                <div className="w-full md:w-1/2 flex flex-col items-start gap-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-semibold text-[var(--color-brand-brown)] shadow-sm mb-2"
                    >
                        👋 Welcome to our bakery
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-7xl font-bold text-[var(--color-brand-brown)] leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        Freshly Baked Delights, <br />
                        <span className="text-[var(--color-brand-accent)] relative inline-block">
                            Every Day
                            <svg className="absolute -bottom-2 left-0 w-full h-3 text-[var(--color-brand-accent)] opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                            </svg>
                        </span>
                    </motion.h1>

                    <motion.p
                        className="text-lg text-gray-600 max-w-lg leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Discover the magic of freshly baked goodness. Handcrafted with love and the finest ingredients. Delight in every bite, made just for you and your loved ones.
                    </motion.p>

                    <motion.div
                        className="flex items-center gap-4 mt-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <button className="px-8 py-4 bg-[var(--color-brand-brown)] text-white rounded-full font-medium hover:bg-[var(--color-brand-accent)] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer">
                            Shop Now
                        </button>
                        <button className="px-6 py-4 text-[var(--color-brand-brown)] font-medium hover:underline underline-offset-4 cursor-pointer flex items-center gap-2 group">
                            Explore nearest store
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="flex items-center gap-4 mt-8"
                    >
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="customer" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col text-xs font-semibold text-[var(--color-brand-brown)]">
                            <span className="flex items-center gap-1">4.9/5 <span className="text-yellow-500">★★★★★</span></span>
                            <span className="text-gray-500 font-normal">from 200+ reviews</span>
                        </div>
                    </motion.div>
                </div>

                {/* Hero Image */}
                <div className="w-full md:w-1/2 relative mt-16 md:mt-0 flex justify-center items-center">
                    {/* Background decorative blob behind image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-br from-[#FDF0E0] to-white rounded-full opacity-80 blur-2xl -z-10"></div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            delay: 0.2
                        }}
                        className="relative z-10"
                    >
                        <img
                            src="/assets/hero.png"
                            alt="Basket of Fresh Breads"
                            className="w-full max-w-xl object-contain drop-shadow-2xl"
                        />
                        {/* Floating badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20 max-w-[160px]"
                        >
                            <div className="text-2xl">🥐</div>
                            <div className="flex flex-col">
                                <span className="font-bold text-sm text-[var(--color-brand-brown)]">Freshly Baked</span>
                                <span className="text-xs text-green-500 font-medium">100% Organic</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
