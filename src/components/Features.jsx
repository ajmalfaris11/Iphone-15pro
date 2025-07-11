import { useGSAP } from '@gsap/react'
import React from 'react'
import { animateWithGsap } from '../utils/animation';
import { explore1Img, explore2Img, exploreVideo } from '../utils';
import { useRef } from 'react';
import gsap from 'gsap';
const Features = () => {

    const videoRef = useRef();

    useGSAP(() => {
        gsap.to("#exploreVideo",{
            scrollTrigger:{
               trigger:'#exploreVideo',
               toggleActions:'play pause reverse restart ',
               start:'-10% bottom',
              
            },
            onComplete:()=>{
                videoRef.current.play();
            }
          })

        animateWithGsap('#features_title', {opacity:1,y:0});
        animateWithGsap(
            '.g_grow', {
                scale: 1,
                opacity: 1,
                ease: 'power1'
            },{
                scrub:5.5
            })

        animateWithGsap(
            '.g_text', {
                y: 0,
                opacity: 1,
