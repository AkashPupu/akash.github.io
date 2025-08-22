import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.social}>
            <a href="https://github.com/akashchakraborty" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub</a>
            <a href="https://linkedin.com/in/akash-chakraborty" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
            <a href="https://facebook.com/akash.chakraborty" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Facebook</a>
            <a href="mailto:akash.chakraborty@email.com" className={styles.socialLink}>Email</a>
          </div>
          <p className={styles.copyright}>
            © {currentYear} Akash Chakraborty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 