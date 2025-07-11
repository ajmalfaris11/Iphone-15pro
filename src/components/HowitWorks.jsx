import React from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { animateWithGsap } from '../utils/animation'
const HowitWorks = () => {
    const videoRef = useRef();

    useGSAP(() => {
        gsap.from('#chip', {
          scrollTrigger: {
            trigger: '#chip',
            start: '20% bottom',
          },
          opacity: 0,
          scale:2,
          duration: 2,
          ease: 'power2.inOut',
        })

        animateWithGsap('.g_fadeIn', {
          opacity: 1,
          y: 0,
          ease: 'power2.inOut',
          duration: 1
        })
    },[])
  return (
    <section className='common-padding'>
      <div className='screen-max-width'>
        <div id='chip' className='w-full flex-center my-20'>
          <img src={chipImg} alt="chip" width={180} height={180} />
