import React from 'react';
import styles from './About.module.css'

const About = () => {
  const skills = ['React', 'JavaScript', 'Node.js', 'CSS', 'Python', 'Git']

  return (
    <section id="about" className={`${styles.about} section`}>
      {/* Animated geometric shapes */}
      <div className={styles.aboutShape1}></div>
      <div className={styles.aboutShape2}></div>
      <div className={styles.aboutShape3}></div>
      <div className={styles.aboutShape4}></div>
      
      <div className="container">
        <div className={styles.content}>
          <h2>About Akash</h2>
          <p>
            I'm Akash, a passionate developer with experience in modern web technologies. 
            I love creating beautiful, functional websites that provide great user experiences.
          </p>
          <div className={styles.skills}>
            <h3>Skills</h3>
            <div className={styles.skillGrid}>
              {skills.map((skill, index) => (
                <span key={index} className={styles.skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 