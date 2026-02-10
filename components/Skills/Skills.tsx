'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Skills.module.scss';

const skills = [
  {
    name: 'Next.js',
    description: '서버 사이드 렌더링과 정적 사이트 생성을 활용한 최적화된 웹 애플리케이션 개발',
  },
  {
    name: 'React.js',
    description: '컴포넌트 기반 아키텍처로 재사용 가능하고 유지보수가 용이한 UI 개발',
  },
  {
    name: 'TypeScript',
    description: '타입 안정성을 통한 안정적이고 확장 가능한 코드베이스 구축',
  },
  {
    name: 'JavaScript',
    description: '모던 JavaScript를 활용한 효율적이고 성능 최적화된 코드 작성',
  },
];

export default function Skills() {
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
    <section id="skills" ref={sectionRef} className={styles.skills}>
      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>Skills</h2>
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={styles.skillCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.skillHeader}>
                  <h3 className={styles.skillName}>{skill.name}</h3>
                  <div className={styles.skillDot}></div>
                </div>
                <p className={styles.skillDescription}>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
