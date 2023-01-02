import React, { useRef, useState, useLayoutEffect, useCallback } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import singer1 from "../public/images/singer-1.png";
import singer2 from "../public/images/singer-2.png";
import singer3 from "../public/images/singer-3.png";
import ResizeObserver from "resize-observer-polyfill"
function Gallery() {
  const scrollRef = useRef(null)
  const ghostRef = useRef(null)
  const [scrollRange, setScrollRange] = useState(0)
  const [viewportW, setViewportW] = useState(0)

  useLayoutEffect(() => {
    scrollRef && setScrollRange(scrollRef.current.scrollWidth)
  }, [scrollRef])

  const onResize = useCallback(entries => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width)
    }
  }, [])

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(entries => onResize(entries))
    resizeObserver.observe(ghostRef.current)
    return () => resizeObserver.disconnect()
  }, [onResize])

  const { scrollYProgress } = useScroll()
  const transform = useTransform(
    scrollYProgress,
    [0, 0.6],
    [0, -scrollRange + viewportW]
  )
  const physics = { damping: 15, mass: 0.27, stiffness: 55 }
  const spring = useSpring(transform, physics)
  return (
    
    <div className="left-0 right-0 will-change-transform w-full relative">
        {/* <div className="h-[450vh] w-full relative flex justify-center">
            <div className="sticky top-[6.5rem] w-[90%] h-[80vh]">
          <motion.div className="z-10 absolute rounded-[3rem] w-full h-full bg-[url('../public/images/singer-1.png')]"
            style={{ backgroundPositionX: (textScaleX.current + 500).toString() + 'px' }}
          />
          <motion.div className=" z-0 absolute rounded-[3rem] w-full h-full bg-[url('../public/images/singer-2.png')] "
            style={{ backgroundPositionX: (scaleX.current + 500).toString() + 'px' }} />
          <motion.div className=" z-0 absolute rounded-[3rem] w-full h-full bg-[url('../public/images/singer-3.png')] "
            style={{ backgroundPositionX: (scaleX.current + 500).toString() + 'px' }} />~
          
            </div>
      </div>
       <Image src={singer1} alt="singer-1" width={700} height={500} />
       <Image src={singer2} alt="singer-2" width={700} height={500} />
       <Image src={singer3} alt="singer-3" width={700} height={500} /> */}
        <motion.div
          ref={scrollRef}
          style={{ x: spring }}
          className="sticky top-[40vh] h-[50vw] w-[max-content] flex items-center px-0 mb-[0vw]"
        >
          <div className="flex items-center">
          <div className="h-[65vw] w-[40vw]" ><Image src={singer1} alt="singer-1" style={{
              width: '80%',
            }} width={0} height={0} /></div>
            <div className="h-[65vw] w-[40vw]" ><Image src={singer2} alt="singer-2" style={{
              width: '80%',
            }}  width={0} height={0} /></div>
            <div className="h-[65vw] w-[40vw]" ><Image src={singer3} alt="singer-3" style={{
              width: '80%',
            }}  width={0} height={0} /></div>
            <div className="h-[65vw] w-[40vw]" ><Image src={singer1} alt="singer-1" style={{
              width: '80%',
            }}  width={0} height={0} /></div>
            <div className="h-[65vw] w-[40vw]" ><Image src={singer2} alt="singer-2" style={{
              width: '80%',
            }}  width={0} height={0} /></div>
            <div className="h-[65vw] w-[40vw]" ><Image src={singer3} alt="singer-3" style={{
              width: '80%',
            }}  width={0} height={0} /></div>
            {/* <div className="h-[50vh] w-[800px]" ><Image src={singer1} alt="singer-1" width={700} height={500} /></div>
            <div className="h-[50vh] w-[800px]" ><Image src={singer2} alt="singer-2" width={700} height={500} /></div>
            <div className="h-[50vh] w-[800px]" ><Image src={singer3} alt="singer-3" width={700} height={500} /></div> */}
          </div>
      </motion.div>
      <div ref={ghostRef} style={{ height: scrollRange }} className="w-[100vmax]" />
      
      </div>
      
  );
}

export default Gallery;
