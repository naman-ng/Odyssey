import React, { useState, useEffect, Children } from 'react';
import Spons from '../components/Spons';
import styles from '../styles/styles.module.css';

function Sponsors() {
  const [spons, setSpons] = useState([]);
  const [len, setLen] = useState(0);

  useEffect(() => {
    // console.log('fetch running');
    fetch('http://localhost:3000/api/sponsors')
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        setSpons(parsed.data);
      });
    
    setLen((spons.length)*301/4.5);
  }, []);

  useEffect(() => {
    // console.log(spons.length);
    setLen((spons.length)*301/4.5 - 700);
  })
  

  return (
    <div className="z-0 font-mulish flex flex-col pt-[8vmax] overflow-clip  text-[#F9F9F9] justify-center content-center ">
      <div className="ml-[5%] ">
        <p className="text-6xl">Sponsors</p>
      </div>
      {/* {  setLen((spons.length)*301/4.5 - 700)} */}
      {console.log(len)}

      <div className={styles.container + ` pt-[5vmax] flex flex-wrap bg-[#1C1E56] justify-center content-center items-center w-[100%] mr-0 container h-[1708px] overflow-hidden`}>
        {spons.map((item, i) => {
          return <Spons name={item.name} front_img={item.front_img} back_img={item.back_img} link={item.link} number={i} key={i} />;
        })}
      </div>
    </div>
  );
}

export default Sponsors;
