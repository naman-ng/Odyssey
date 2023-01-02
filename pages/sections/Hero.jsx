import Image from 'next/image'
import React, { useEffect } from 'react'
import {useTransform,
        useMotionValue, 
        motion} from 'framer-motion' 
import skyline from '../../public/images/skyline.png'

function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xposition1 = useTransform(x,[0,2000],[-10,10]);
  const xposition2 = useTransform(x,[0,2000],[-20,20]);
  const xposition3 = useTransform(x,[0,2000],[-30,30]);
  const xposition4 = useTransform(x, [0, 2000], [-60, 60]);
  const xposition5 = useTransform(x, [0, 2000], [-40, 40]);

  const yposition1 = useTransform(y,[0,2000],[-10,10]);
  const yposition2 = useTransform(y,[0,2000],[-20,20]);
  const yposition3 = useTransform(y, [0, 2000], [-30, 30]);
  const yposition4 = useTransform(y, [0, 2000], [-60, 60]);
  const yposition5 = useTransform(y, [0, 2000], [-40, 40]);
  useEffect(() => {
    console.log("xposition1 : ", xposition1, "yposition1 : ", yposition1)
    console.log("xposition2 : ", xposition2, "yposition2 : ", yposition2)
    console.log("xposition3 : ", xposition3, "yposition3 : ", yposition3)
    
  }, [])

  // console.log("xposition2 : ",xposition2, "yposition2 : ",yposition2)
  const handleMouse=(e)=>{
    x.set(e.pageX);
    y.set(e.pageY);
    console.log(x,y, "x,y")
  }

  return (
    <div className='relative w-full h-auto z-10'
         onMouseMove={(e)=>handleMouse(e)}>

      <motion.div className='absolute z-10 w-full h-[64vmax] bg-clouds bg-no-repeat bg-contain -top-[2.5vw]'
                  style={{
                    translateX:xposition1,
                    translateY:yposition1
                  }}/>
      <motion.div className='absolute z-0 w-full h-[64vmax] bg-building bg-no-repeat bg-contain top-[15vw] -left-[1vw]'
                  style={{
                    translateX:xposition2,
                    translateY: yposition2,
                    width:"103vw",
                  }}/>
      <motion.div className='absolute z-10 w-[106.5vw] xl:w-[104.5vw] h-[65vmax] bg-ground bg-no-repeat bg-contain top-[10vw] -left-[2vw]'
                  style={{
                    translateX:xposition3,
                    translateY: yposition3,
                  }}/>
      <motion.div className='absolute z-10 w-[100%] h-[20vmax] bg-road bg-no-repeat bg-contain top-[61vw] left-[-2vw] '
        style={{
          translateX: xposition3,
          translateY: yposition3,
          width:"104vw",
        }}/>
      <motion.div className='absolute z-10 w-[100%] h-[20vw] bg-truck bg-no-repeat bg-contain top-[53vw] left-[67vw] pb-10'
        style={{
          translateX: xposition4,
          translateY: yposition4
        }}/>
      <motion.div className='absolute z-10 w-[46%] h-screen bg-stalls bg-no-repeat bg-contain top-[48vw] left-[0vmax] pb-10'
        style={{
          translateX: xposition5,
          translateY: yposition5
        }}/>
        <motion.div className='absolute -z-[1] w-[36%] h-[10vmax] bg-skyline bg-no-repeat bg-contain top-[40vw] left-[27vw]'
          style={{
            translateX: xposition1,
            translateY: yposition1
          }}/>
          
      <div className='relative flex flex-col justify-start items-center w-full z-[5] pb-[32vw]'>
        <Image  src='/Logo.svg'    
                className=' mt-[12vw]'   
                alt='odyssey' 
                width={0} 
          height={0}
          style={{
            width:"55vw"
          }}
        />
        <Image  src='/Symbol.svg'
                className='mt-[2vmax]'       
                alt='odyssey' 
                width={0} 
          height={0}
          style={{
            width:"13vw"
          }}
        />
      </div>
    </div>
  )
}

export default Hero