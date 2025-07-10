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

