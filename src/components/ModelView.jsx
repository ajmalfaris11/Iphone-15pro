import { Html, OrbitControls, PerspectiveCamera, View } from '@react-three/drei'
import React, { Suspense } from 'react'
import Lights from './Lights'
import { div } from 'three/examples/jsm/nodes/Nodes.js'
import Iphone from './Iphone'
import Loader from './Loader'

import * as THREE from 'three'

const ModelView = ({index , groupRef , gsapType , controlRef , setRotationState , size , item }) => {
  return (
    <View
    index={index}
    id={gsapType}
    className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''  } `}
    >
