"use client";

import Lottie from 'lottie-react';
import dragonAnimation from "../../public/dragon.json";

export default function HeroImage() {



  return (
    <div>
      <Lottie animationData={dragonAnimation} />
    </div>
  )
}