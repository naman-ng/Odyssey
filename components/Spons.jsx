import React, { useState, useEffect } from 'react';
import styles from '../styles/styles.module.css';

function Spons({ name, front_img, back_img, link, number }) {
  const [bottom, setBottom] = useState(0);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  let bh = 0;
  useEffect(() => {
    bh = Math.floor(number / 9) * 200;
    if (number % 9 > 4) {
      bh += 100;
    }
    setBottom(bh);
  }, []);

  let lh = 10;
  useEffect(() => {
    if ((number - 5) % 9 == 0) {
      setLeft(lh);
    }
    if ((number + 1) % 9 == 0) {
      setRight(lh);
    }
  }, []);

  const frontStyle = {
    height: '100%',
    width: '100%',
    position: 'absolute',
    backfaceVisibility: 'hidden',
  };

  const backStyle = {
    height: '100%',
    width: '100%',
    position: 'absolute',
    transform: 'rotateY(180deg)',
    backfaceVisibility: 'hidden',
  };

  const cardStyle = {
    width: '18%',
    height: '301px',
    transformStyle: 'preserve-3d',
    position: 'relative',
    // marginRight: '20px',
    transition: 'transform 1s',
    bottom: `${bottom}px`,
    marginLeft: `${left}%`,
    marginRight: `${right}%`,
    // top: `-${bottom}px`
  };

  if (name.length > 1) {
    return (
      <div className={styles.card} style={cardStyle}>
        {console.log(left)}
        {/* {console.log(number)} */}
        <div className="" style={frontStyle}>
          <img src={`${front_img}`} alt="" className="w-full" />
        </div>
        <div className="" style={backStyle}>
          <a href={`${link}`}>
            <img src={`${back_img}`} alt="" className="w-full" />
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.card + ` bottom-[${bh}] ml-[${left}%]`} style={cardStyle}>
        <div className="" style={frontStyle}>
          <img src="/emptySpons.png" alt="" className="w-full" />
        </div>
        <div className="" style={backStyle}>
          <img src="/emptySpons.png" href="" alt="" className="w-full" />
        </div>
      </div>
    );
  }
}

export default Spons;
