import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
export const animateWithGsap = (target,animationProps,scrollProps) => {
      gsap.to(target,{
        opacity:1,
        ...animationProps,
        scrollTrigger:{
           trigger:target,
           toggleActions:'restart reverse restart reverse',
           start:'top 85%',
           ...scrollProps,
        }
      })
