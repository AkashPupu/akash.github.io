import React from 'react';
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <h2>Akash</h2>
          </div>
          <ul className={styles.navList}>
            <li><a href="#home" className={styles.navLink}>Home</a></li>
            <li><a href="#about" className={styles.navLink}>About</a></li>
            <li><a href="#work" className={styles.navLink}>Work</a></li>
            <li><a href="#projects" className={styles.navLink}>Projects</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header 