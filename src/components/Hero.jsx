import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo , smallHeroVideo} from '../utils'
const Hero = () => {
    const [videoSrc , setVideoSrc] = useState(
        window.innerWidth < 768 ? smallHeroVideo : heroVideo
    )
    const handleVideoSrcSet = () => {
       if(window.innerWidth < 760){
           setVideoSrc(smallHeroVideo)
       }else{
           setVideoSrc(heroVideo)
       }
    }
    useEffect(() => {
        window.addEventListener('resize' , handleVideoSrcSet)
        return () => {
            window.removeEventListener('resize' , handleVideoSrcSet)
        }
    }, [])
    useGSAP(() => { 
        gsap.to('#hero', {
            opacity: 1,
            delay: 2.5,
        })
        gsap.to('#cta',{
            opacity:1,
            delay:2.5,
            y:-50
        })
    },[])
  return (
   <section className='w-full nav-height bg-black relative'>
