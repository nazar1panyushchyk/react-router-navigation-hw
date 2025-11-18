import { useState, useEffect, useRef } from 'react';
import styles from './css/Clock.module.css';

export default function Clock() {
  const [time, setTime] = useState(() => new Date());
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      console.log('Це інтервал кожні 1000ms ' + Date.now());
      setTime(new Date());
    }, 1000);

    return () => {
      console.log('Це функція чистки перед наступним викликом useEffect');
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <div className={styles.container}>
      <p className={styles.clockface}>
        Поточний час: {time.toLocaleTimeString()}
      </p>
      <button type="button" onClick={stop}>
        Зупинити
      </button>
    </div>
  );
}