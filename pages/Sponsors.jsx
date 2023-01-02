import React, { useState, useEffect, Children } from 'react';
import Spons from '../components/Spons';
import styles from '../styles/styles.module.css';


function Sponsors() {
  const [spons, setSpons] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/sponsors')
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        setSpons(parsed.data);
      });
  }, []);


  return (
    <div className="z-0 font-mulish flex flex-col pt-[8vmax] overflow-clip  text-[#F9F9F9] justify-center content-center ">
      <div className="ml-[5%] ">
        <p className="text-4xl md:text-6xl">Sponsors</p>
      </div>
  
      <div className={`block pt-[5vmax] md:flex flex-wrap align-center justify-evenly md:h-[1700px] xl:h-[1800px]  md:overflow-hidden`}>
        {spons.map((item, i) => {
          return <Spons name={item.name} front_img={item.front_img} back_img={item.back_img} link={item.link} number={i} key={i} />;
        })}
      </div>

    </div>
  );
}

export default Sponsors;
