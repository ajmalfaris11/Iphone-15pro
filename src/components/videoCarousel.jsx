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

