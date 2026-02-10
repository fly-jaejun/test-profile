'use client';

import { useEffect, useState } from 'react';
import styles from './Hero.module.scss';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>이재준</h1>
            <div className={styles.nameEn}>Lee Jaejun</div>
          </div>
          <div className={styles.title}>Frontend Developer</div>
          <div className={styles.experience}>7년차 경력</div>
        </div>
      </div>
    </section>
  );
}
