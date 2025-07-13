import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ModelView from "./ModelView";
import { yellowImg } from "../utils";

import * as THREE from "three";
import { View } from "@react-three/drei";
import { models, sizes } from "../constants";
import { Canvas } from "@react-three/fiber";
import { animateWithGsapTimeLine } from "../utils/animation";
const Model = () => {
  const [size, setsize] = useState("small");
  const [model, setModel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  });

  // Camera control for the model view
  const cameraControllSmall = useRef();
  const cameraControllLarge = useRef();

  // Model
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  // Rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const tl = gsap.timeline({});

  useEffect(() => {
    if(size === "large"){
     animateWithGsapTimeLine(tl, small, smallRotation,
      '#view1', '#view2',{
         transform:'translateX(-100%)',
         duration: 2 
      }
     )
    }

    if(size === "small"){
      animateWithGsapTimeLine(tl, large, largeRotation,
        '#view2', '#view1',{
           transform:'translateX(0)',
           duration: 2 
