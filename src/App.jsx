import React from 'react';
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Work from './components/Work/Work'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <About />
        <Work />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App 