import React from 'react';
import styles from './ProjectCard.module.css'

const ProjectCard = ({ project }) => {
  const { title, description, technologies, image, github, demo } = project

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.technologies}>
          {technologies.map((tech, index) => (
            <span key={index} className={styles.tech}>
              {tech}
            </span>
          ))}
        </div>
        <div className={styles.links}>
          <a href={github} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard 