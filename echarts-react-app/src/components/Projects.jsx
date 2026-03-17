import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">

        <h2>Projects</h2>

        <div className="project-grid">

          {/* Project 1 */}
          <div className="project-card">
            <h3>Job Portal Application</h3>

            <p>
              Full Stack Job Portal built with React, Spring Boot, and MySQL.
              Users can browse jobs, search jobs and apply for jobs.
              Admin can manage job postings.
            </p>

            <div className="project-buttons">
              <a
                href="https://github.com/AbisayaNepolian/job-portal-project"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://your-jobportal-live-link.com"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <h3>Portfolio Website</h3>

            <p>
              Personal developer portfolio built using React.
              Shows skills, projects, and contact information.
            </p>

            <div className="project-buttons">
              <a
                href="https://github.com/AbisayaNepolian"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://abisaya-portfolio.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <h3>Spring Boot REST API</h3>

            <p>
              REST API developed using Spring Boot for managing
              user data with CRUD operations and MySQL database.
            </p>

            <div className="project-buttons">
              <a
                href="https://github.com/AbisayaNepolian"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://portfolioabisaya.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;