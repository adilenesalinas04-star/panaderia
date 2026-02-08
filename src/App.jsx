import React from 'react';
import { ClickToComponent } from 'click-to-react-component';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <ClickToComponent editor="antigravity" />
      <div className="min-h-screen bg-[var(--color-brand-beige)] text-[var(--color-brand-brown)] font-sans overflow-x-hidden selection:bg-[var(--color-brand-accent)] selection:text-white">
        <Navbar />
        <main className="flex flex-col gap-8">
          <Hero />
          <Categories />
          <ProductList />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
