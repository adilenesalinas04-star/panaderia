import React from 'react';
import { Search, User, ShoppingCart } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-8 py-6 w-full max-w-7xl mx-auto">
            {/* Logo */}
            <div className="text-3xl font-bold text-[var(--color-text-main)] tracking-tight">
                Cravory
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8 text-[var(--color-text-main)] font-medium">
                <a href="#" className="hover:text-[var(--color-brand-accent)] transition-colors">Home</a>
                <a href="#" className="hover:text-[var(--color-brand-accent)] transition-colors">Categories</a>
                <a href="#" className="hover:text-[var(--color-brand-accent)] transition-colors">About Us</a>
                <a href="#" className="hover:text-[var(--color-brand-accent)] transition-colors">Contact</a>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-6 text-[var(--color-text-main)]">
                <button className="hover:text-[var(--color-brand-accent)] transition-colors">
                    <Search size={20} />
                </button>
                <button className="hover:text-[var(--color-brand-accent)] transition-colors">
                    <User size={20} />
                </button>
                <button className="hover:text-[var(--color-brand-accent)] transition-colors relative">
                    <ShoppingCart size={20} />
                    <span className="absolute -top-1 -right-1 bg-[var(--color-brand-accent)] text-white text-[10px] w-3.5 h-3.5 flex items-center justify-center rounded-full">2</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
