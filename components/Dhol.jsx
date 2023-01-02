import Image from "next/image";
import { useRef } from "react";
import useIsInViewport from "../hooks/useInViewPort";

const Dhol = () => {
  const ref = useRef(null);

  const isInViewport = useIsInViewport(ref);

  return (
    <div className="w-full h-[28vmax] sm:h-[31vmax] md:h-[30vmax] lg:h-[36vmax] relative  pt-[5vmax] z-0 mb-[18.5vw] ">
      <h5 className="w-[55%] md:w-5/12 ml-[35%] lg:mx-auto text-left lg:text-center text-[#000] mt-[10vw] text-[1.2vmax] leading-[1.8vh] lg:leading-[3.3vh] mb-[-10vmax] ">
        Feel the adrenaline rush, the pumping of you blood as we bring to you
        yet another spectacular edition of the 2 day event. Come participate,
        experience and feel the excitement as you watch the star with close
        proximity or see the different competitions. Come and make numerous and
        unforgettable memories and at Odyssey.
      </h5>
      <Image
        src="/paaji.svg"
        alt="waves"
        width={0}
        height={0}
        className={`${
          (isInViewport && window.innerWidth > 768)
            ? "translate-x-[6vw] duration-[1000ms]"
            : "translate-x-[3vw] duration-[0ms]"
          } transform transition-all mb-[-1vw] w-[20vh] lg:w-[25vw]` }

        ref={ref}
      />
      <div className="absolute w-full h-[25vw] mt-[-7vmax]">
        <Image src="/waves.svg" alt="waves" fill className="object-contain w-full"
        />
      </div>
    </div>
  );
};
export default Dhol;
