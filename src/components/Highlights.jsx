import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./videoCarousel";
const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      delay: 1.5,
      y: 0,
    })
    gsap.to('.link',{
        opacity:1,
        delay:1.5,
        y:0,
