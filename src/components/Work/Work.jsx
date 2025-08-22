import React from 'react';
import styles from './Work.module.css'

const Work = () => {
  const workExperience = [
    {
      id: 1,
      company: "Cognizant Technology Solutions (CTS)",
      duration: "2022 - Present (2.5+ years)",
      roles: [
        {
          id: "cts-3",
          position: "Senior Software Developer - AI & Advanced Python",
          duration: "2024 - Present",
          description: "Working with advanced Python packages and Agentic AI technologies. Focusing on cutting-edge AI solutions and modern Python frameworks.",
          technologies: ["Python", "NiceGUI", "FastAPI", "FastHTML", "Agentic AI", "GenAI"]
        },
        {
          id: "cts-2", 
          position: "Software Developer - React Internal Project",
          duration: "2023 - 2024 (1 year)",
          description: "Moved to CTS internal project focusing on React development. Gained experience in internal tool development and React-based solutions.",
          technologies: ["React", "JavaScript", "TypeScript", "CSS3"]
        },
        {
          id: "cts-1",
          position: "Software Developer - Full Stack",
          duration: "2022 - 2023 (1.5 years)",
          description: "Started at CTS working on full-stack development using Node.js, Angular, and SQL. Developed web applications and database solutions.",
          technologies: ["Node.js", "Angular", "SQL", "JavaScript", "TypeScript"]
        }
      ]
    },
    {
      id: 2,
      company: "Tata Consultancy Services (TCS)",
      duration: "2019 - 2022 (2 years 10 months)",
      roles: [
        {
          id: "tcs-3",
          position: "Frontend Developer - Angular Projects",
          duration: "2021 - 2022 (7 months)",
          description: "Transitioned to Angular development projects. Worked on frontend applications and improved user interface experiences.",
          technologies: ["Angular", "JavaScript", "TypeScript", "HTML5", "CSS3"]
        },
        {
          id: "tcs-2",
          position: "Data Developer - PySpark",
          duration: "2021 (3 months)",
          description: "Brief stint working with PySpark for data processing and analytics. Gained experience in big data technologies.",
          technologies: ["PySpark", "Python", "Apache Spark", "SQL"]
        },
        {
          id: "tcs-1",
          position: "Frontend Developer - Vue.js",
          duration: "2019 - 2021 (2 years)",
          description: "Started my IT journey at TCS. Worked as Frontend Developer with Vue.js, Node.js, and SQL for web application development.",
          technologies: ["Vue.js", "Node.js", "SQL", "JavaScript", "HTML5", "CSS3"]
        }
      ]
    }
  ]

  return (
    <section id="work" className={`${styles.work} section`}>
      {/* Animated geometric shapes */}
      <div className={styles.workShape1}></div>
      <div className={styles.workShape2}></div>
      <div className={styles.workShape3}></div>
      <div className={styles.workShape4}></div>
      <div className={styles.workShape5}></div>
      <div className={styles.workShape6}></div>
      
      <div className="container">
        <div className={styles.content}>
          <h2>Work Experience</h2>
          <p>My IT journey from 2019 to present - evolving from frontend development to AI technologies</p>
          
          <div className={styles.timeline}>
            {workExperience.map((company, companyIndex) => (
              <div key={company.id} className={styles.companySection}>
                <div className={styles.companyHeader}>
                  <div className={styles.companyMarker}></div>
                  <div className={styles.companyInfo}>
                    <h3 className={styles.companyName}>{company.company}</h3>
                    <span className={styles.companyDuration}>{company.duration}</span>
                  </div>
                </div>
                
                <div className={styles.rolesContainer}>
                  {company.roles.map((role, roleIndex) => (
                    <div key={role.id} className={styles.roleItem}>
                      <div className={styles.roleMarker}></div>
                      <div className={styles.roleContent}>
                        <div className={styles.roleHeader}>
                          <h4 className={styles.position}>{role.position}</h4>
                          <span className={styles.duration}>{role.duration}</span>
                        </div>
                        <p className={styles.description}>{role.description}</p>
                        <div className={styles.technologies}>
                          {role.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className={styles.tech}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work 