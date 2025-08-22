import React from 'react';
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section id="home" className={`${styles.hero} section`}>
      {/* Animated geometric shapes */}
      <div className={styles.shape1}></div>
      <div className={styles.shape2}></div>
      <div className={styles.shape3}></div>
      <div className={styles.shape4}></div>
      <div className={styles.shape5}></div>
      <div className={styles.shape6}></div>
      <div className={styles.shape7}></div>
      <div className={styles.shape8}></div>
      <div className={styles.shape9}></div>
      <div className={styles.shape10}></div>
      <div className={styles.wave}></div>
      
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Hi, I'm <span className={styles.highlight}>Akash</span>
          </h1>
          <p className={styles.subtitle}>
            Akash Chakraborty - A passionate full-stack developer creating amazing web experiences
          </p>
          <div className={styles.cta}>
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#footer" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 