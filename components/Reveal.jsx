import React,{useState,useEffect} from 'react'
import { motion, useScroll } from "framer-motion";
import rockBand from '../public/images/rockBand.png'
import Image from 'next/image'
function Reveal() {
  const { scrollYProgress } = useScroll()
    const [reveaFactor,setRevealFactor] = useState(0)
    useEffect(() => {
        return scrollYProgress.onChange(() => {
          setRevealFactor(Math.max(Math.min((scrollYProgress.current * 90) - 10, 74.6)-12, 0))
          console.log((scrollYProgress.current * 90) - 10)
        })
    }, [])
  return (
    <div className='relative flex flex-col top-[1vw] left-0 right-0 h-[400vw] items-center justify-center w-full'>
      <motion.div className='sticky z-10 top-[40vh] lg:top-[10vh] w-[70%] md:w-[85%] h-[40.8vw] bg-blue rounded-[1.5vmax]'
        style={{ background: `radial-gradient(circle at bottom, transparent ${reveaFactor/1.6}vmax, #1C1E56 5vw)` }}>
      </motion.div>
      <motion.div className='sticky w-[70%] md:w-[85%] rounded-[1.5vmax] h-[40.8vw] top-[40vh] lg:top-[10vh] z-0 bg-[url(../public/images/rockBand.png)] mt-[-40.8vw] bg-cover' alt='odyssey' width={0} height={0} style={{
        
      }} />
    </div>
  )
}

export default Reveal