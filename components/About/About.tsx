'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './About.module.scss';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className={styles.about}>
      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>About</h2>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.cardNumber}>01</div>
              <h3 className={styles.cardTitle}>소개</h3>
              <p className={styles.cardText}>
                올리브영에서 근무하는 7년차 프론트엔드 개발자입니다.
                사용자 경험을 최우선으로 생각하며, 깔끔하고 효율적인 코드를 작성하기 위해 노력합니다.
              </p>
            </div>
            <div className={`${styles.card} ${styles.cardOffset}`}>
              <div className={styles.cardNumber}>02</div>
              <h3 className={styles.cardTitle}>철학</h3>
              <p className={styles.cardText}>
                불완전함 속에서 아름다움을 찾는 와비사비 철학처럼,
                끊임없이 개선하고 발전하는 개발자가 되고자 합니다.
                완벽함보다는 지속적인 성장을 추구합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
