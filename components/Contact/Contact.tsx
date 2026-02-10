'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Contact.module.scss';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
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

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('flyjaejuns@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className={styles.contact}>
      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>Contact</h2>
          <div className={styles.contactCard}>
            <p className={styles.description}>
              프로젝트 문의나 협업 제안이 있으시다면 언제든 연락주세요.
            </p>
            <div className={styles.emailWrapper}>
              <a href="mailto:flyjaejuns@gmail.com" className={styles.email}>
                flyjaejuns@gmail.com
              </a>
              <button
                onClick={handleCopyEmail}
                className={styles.copyButton}
                aria-label="Copy email address"
              >
                {copied ? (
                  <svg
                    className={styles.icon}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className={styles.icon}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                )}
              </button>
            </div>
            {copied && <span className={styles.copiedMessage}>복사되었습니다!</span>}
          </div>
          <footer className={styles.footer}>
            <p className={styles.footerText}>
              © 2024 이재준. Built with Next.js and wabi-sabi philosophy.
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
}
