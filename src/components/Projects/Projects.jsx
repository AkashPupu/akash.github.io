import React from 'react';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      technologies: ["React", "Firebase", "CSS3"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts",
      technologies: ["JavaScript", "API Integration", "CSS3"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ]

  return (
    <section id="projects" className={`${styles.projects} section`}>
      {/* Animated geometric shapes */}
      <div className={styles.projectShape1}></div>
      <div className={styles.projectShape2}></div>
      <div className={styles.projectShape3}></div>
      <div className={styles.projectShape4}></div>
      <div className={styles.projectShape5}></div>
      
      <div className="container">
        <div className={styles.content}>
          <h2>My Projects</h2>
          <p>Here are some of the projects I've worked on that showcase my skills and experience.</p>
          
          <div className={styles.projectsGrid}>
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 