import React from 'react'
import {useTransform,
    useMotionValue, 
    motion} from 'framer-motion' 
import Form from './Form';

function ContactMain() {
    const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xposition1 = useTransform(x,[0,2000],[-10,10]);
  const xposition3 = useTransform(x,[0,2000],[-30,30]);

  const yposition1 = useTransform(y,[0,2000],[-10,10]);
  const yposition3 = useTransform(y, [0, 2000], [-30, 30]);
    const handleMouse=(e)=>{
        x.set(e.pageX);
        y.set(e.pageY);
        console.log(x,y, "x,y")
      }
  return (
    <div style={{
      background: "linear-gradient(178.63deg, #1C1E56 3.09%, #8E3A3A 98.83%)",
    }} className='flex w-full h-full flex-row justify-center align-middle' onMouseMove={(e)=>handleMouse(e)}>
    <motion.div className='absolute z-10 w-full h-1/3 bg-clouds bg-no-repeat bg-cover -top-[2vmax]'
                  style={{
                    translateX:xposition1,
                    translateY:yposition1
                  }}/>
      
      <motion.div className='absolute z-10 w-full h-full mb-12 bg-ground bg-no-repeat bg-cover -bottom-[3vmax] '
                  style={{
                    translateX:xposition3,
                    translateY: yposition3,
                    width:"104.5vmax",
                  }}/>
      <Form />
      
        
    
    </div>
  )

  }

  export default ContactMain