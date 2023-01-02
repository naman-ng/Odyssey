import Image from 'next/image'
import React from 'react'
import Reveal from '../../components/Reveal'
import Gallery from '../../components/Gallery'
import dynamic from "next/dynamic";
const Dhol = dynamic(() => import("../../components/Dhol"), { ssr: false });

function ValueProposition() {
  return (
    <div className='relative flex flex-col justify-start items-center w-full gradient text-center font-mulish color-[black] '>
     
      
      <p className='w-[70%] lg:w-[37%] text-[1.3vmax] text-black mt-[18vw] mb-[20vw]'>IIIT Delhi's Odyssey celebrates the essence and beauty of culture and of it's arts. It celebrates the Actor, the Dancer, the Musician, the Writer and the Designer, with over 45 events and a footfall of 25,000+. </p>
        <Gallery/>
      <p className='w-[70%] lg:w-[37%] text-[1.2vmax] text-black -mt-[17vw] mb-[-168vw]'>Feel the adrenaline rush, the pumping of you blood as we bring to you yet another spectacular edition of the 2 day event. Come participate, experience and feel the excitement as you watch the star with close proximity or see the different competitions. Come and make numerous and unforgettable memories and at Odyssey.</p>
      <Reveal/>
      <Dhol />
    </div>
  )
}

export default ValueProposition