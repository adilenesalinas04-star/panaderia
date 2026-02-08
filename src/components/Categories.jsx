import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const categories = [
    { name: 'Specials', image: '/assets/cat-croissant.png', color: 'bg-[#B5F1CC]' }, // Light Green
    { name: 'Doughnuts', image: '/assets/cat-donut.png', color: 'bg-[#FFC8DD]' }, // Pink
    { name: 'Cookies', image: '/assets/cat-cookie.png', color: 'bg-[#FFE5A3]' }, // Yellow
    { name: 'Cakes', image: '/assets/cat-cake.png', color: 'bg-[#CBE4F9]' }, // Light Blue
    { name: 'Breads', image: '/assets/cat-bread.png', color: 'bg-[#F2C6DE]' }, // Light Purple
    { name: 'Cupcakes', image: '/assets/prod-cupcake.png', color: 'bg-[#E2F0CB]' }, // Extra 1
];

const Categories = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 200;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="w-full max-w-7xl mx-auto px-8 py-16">
            <div className="flex justify-between items-end mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-main)]">Categories</h2>

                <div className="flex gap-2">
                    <button
                        onClick={() => scroll('left')}
                        className="w-10 h-10 rounded-full border border-[var(--color-text-main)] text-[var(--color-text-main)] flex items-center justify-center hover:bg-[var(--color-text-main)] hover:text-[var(--color-brand-brown)] transition-colors cursor-pointer"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="w-10 h-10 rounded-full bg-[var(--color-text-main)] text-[var(--color-brand-brown)] flex items-center justify-center hover:bg-[var(--color-brand-accent)] hover:text-white transition-colors cursor-pointer"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex items-center gap-8 overflow-x-auto pt-4 pb-8 px-4 scrollbar-hide snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {categories.map((cat, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center gap-4 min-w-[140px] cursor-pointer group snap-start"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className={`w-36 h-36 rounded-full ${cat.color} flex items-center justify-center shadow-md group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 relative`}>
                            <img
                                src={cat.image}
                                alt={cat.name}
                                className="w-28 h-28 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <span className="font-semibold text-[var(--color-text-main)] text-lg">{cat.name}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Categories;
