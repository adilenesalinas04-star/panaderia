import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingBag, Heart } from 'lucide-react';

const products = [
    { name: 'Choco cupcake', price: '10$ (500gm)', rating: 5, image: '/assets/prod-cupcake.png' },
    { name: 'Choco Doughnut', price: '4$ (1ps)', rating: 5, image: '/assets/prod-donut.png' },
    { name: 'White Bread', price: '6$ (300gm)', rating: 5, image: '/assets/prod-bread.png' },
    { name: 'Cheese Cake', price: '24$ (500gm)', rating: 4.5, image: '/assets/prod-cheesecake.png' },
    { name: 'Chip Cookies', price: '2$ (1ps)', rating: 4, image: '/assets/prod-cookies.png' },
];

const ProductList = () => {
    return (
        <section className="w-full max-w-7xl mx-auto px-8 py-16">
            <div className="flex justify-between items-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-main)]">Most Loved</h2>
                <a href="#" className="text-[var(--color-brand-accent)] font-semibold hover:underline">View all</a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                {products.map((product, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col gap-4 group cursor-pointer"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#F8F3EC] relative hover:shadow-2xl transition-all duration-300 isolate">
                            {/* Favorite Button */}
                            <button className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center text-[var(--color-brand-brown)] hover:bg-white hover:text-red-500 transition-colors">
                                <Heart size={16} />
                            </button>

                            <div className="w-full h-full flex items-center justify-center p-6 relative">
                                <div className="absolute inset-0 bg-white/40 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 ease-out origin-center opacity-0 group-hover:opacity-100 z-0"></div>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain drop-shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 z-10"
                                />
                            </div>

                            {/* Add to Cart Button */}
                            <button className="absolute bottom-4 right-4 z-20 bg-white p-3 rounded-full shadow-lg text-[var(--color-brand-brown)] hover:bg-[var(--color-brand-brown)] hover:text-white transition-all transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                <ShoppingBag size={20} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-1 px-2">
                            <h3 className="font-bold text-lg text-[var(--color-text-main)] leading-tight group-hover:text-[var(--color-brand-accent)] transition-colors">{product.name}</h3>
                            <div className="flex justify-between items-center">
                                <span className="text-[var(--color-text-main)] font-semibold">{product.price.split(' ')[0]}</span>
                                <div className="flex items-center gap-1 text-yellow-400 bg-white/10 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-sm text-xs font-bold">
                                    <Star size={12} fill="currentColor" />
                                    <span>{product.rating}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ProductList;
