import React, { useEffect, useRef, useState } from 'react'
import { hightlightsSlides } from '../constants'
import { pauseImg, playImg, replayImg } from '../utils';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
import gsap from 'gsap';
const videoCarousel = () => {
    const videoRef = useRef([]);
    const videoSpanRef = useRef([]);
    const videoDivRef = useRef([]);

    const [video, setvideo] = useState({
          isEnd:false,
          startPlay:false,
          videoId:0,
          isLastVideo:false,
          isPlaying:false
    });    

    const [loadedData, setloadedData] = useState([]);

    const { isEnd ,isLastVideo ,startPlay,videoId ,isPlaying } = video;

    useGSAP(() => {
      gsap.to('#slider', {
         transform: `translateX(${-100 * videoId}%)`,
         duration:2,
         ease:'power2.inOut'
      })

      gsap.to('#video', {

        scrollTrigger: {
          trigger: '#video',
          toggleActions: 'restart none none none',
        },
        onComplete:()=>{
          setvideo((pre)=>({
            ...pre,
            startPlay:true,
            isPlaying:true
          }))
        }
      })

    },[isEnd,videoId]);

    useEffect(() => {
        if(loadedData.length > 3){
            if(!isPlaying){
                videoRef.current[videoId].pause();
            }else{
                startPlay && videoRef.current[videoId].play();
            }
        }
    },[startPlay,videoId,isPlaying,loadedData]);

    const handleLoadedMetadata = (i ,e) => setloadedData((pre)=>[...pre,e]);

    useEffect(() => {
     let currntProgress = 0;
     let span = videoSpanRef.current;

     if(span[videoId]){
         let anim = gsap.to(span[videoId],{
            onUpdate:() => {
                const progress = Math.ceil(anim.progress() *
              100);

              if(progress !== currntProgress){
                  currntProgress = progress;

                  gsap.to(videoDivRef.current[videoId],{
                    width:window.innerWidth < 760 
                    ? '10vw' 
                    : window.innerWidth < 1200 ?
                    '10vw'
                    : '4vw'
                  })

                  gsap.to(span[videoId],{
                    width:`${currntProgress}%`,
                    backgroundColor:'white'
                  })
              }
            },
            onComplete:() =>{
              if(isPlaying){
                gsap.to(videoDivRef.current[videoId],{
                  width:'12px'
                });
                gsap.to(span[videoId],{
                  backgroundColor:'#afafaf'
                })
              }
            }
         })

         if(videoId === 0){
            anim.restart();
         }
       const animUpdate = () =>{
      anim.progress(videoRef.current[videoId].currentTime / hightlightsSlides[videoId].videoDuration);
     }

     if(isPlaying){
      gsap.ticker.add(animUpdate)
     }else{
      gsap.ticker.remove(animUpdate)
     }
   }
 },[videoId , startPlay]);

    const handleProcess = (type , i) => {
        switch(type) {
          case "video-end":
            setvideo((pre)=>({
              ...pre,isEnd:true,videoId:i+1
            }))
            break;

            case 'video-last':
              setvideo((pre)=>({
                ...pre,isLastVideo:true
              }))
              break;

              case 'video-reset':
                setvideo((pre)=>({
                  ...pre, isLastVideo:false,
                  videoId:0
                }))
                break;

                case 'play':
                  setvideo((pre)=>({
                    ...pre,isPlaying:!pre.isPlaying
                  }))
                  break;
