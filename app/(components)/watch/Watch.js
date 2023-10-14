"use client"

import { useEffect, useState } from 'react';
// import styles from './Watch.module.css';

function Watch() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  const secondDegree = (seconds / 60) * 360;
  const minuteDegree = (minutes / 60) * 360 + (secondDegree / 60);
  const hourDegree = (hours / 12) * 360 + (minuteDegree / 12);

  return (
    <div className="Watch">
      <div className="hour" style={{ transform: `rotate(${hourDegree}deg)` }}></div>
      <div className="minute" style={{ transform: `rotate(${minuteDegree}deg)` }}></div>
      <div className="second" style={{ transform: `rotate(${secondDegree}deg)` }}></div>
    </div>
  );
}

export default Watch;
