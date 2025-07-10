import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Model from './components/Model'
import Features from './components/Features'
import HowitWorks from './components/HowitWorks'
import Footer from './components/Footer'
import Lenis from '@studio-freight/lenis';
import { useRef, useEffect } from 'react';
import * as Sentry from "@sentry/react";

  
const App = ()=> {

  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="bg-black">
        <Navbar/>
        <Hero/>
        <Highlights/>
        <Model />
        <Features/>
        <HowitWorks/>
        <Footer/>
    </main>

  )
}

export default Sentry.withProfiler(App);
