import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-black/20 text-[var(--color-brand-light-brown)] py-12 px-8 mt-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-3xl font-bold tracking-tight">Cravory</div>

                <div className="flex gap-8 text-sm opacity-80">
                    <a href="#" className="hover:text-white transition-colors">Home</a>
                    <a href="#" className="hover:text-white transition-colors">Categories</a>
                    <a href="#" className="hover:text-white transition-colors">About Us</a>
                    <a href="#" className="hover:text-white transition-colors">Contact</a>
                </div>

                <div className="text-sm opacity-60">
                    © 2026 Cravory Bakery. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
