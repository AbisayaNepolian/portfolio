import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="section reveal">
      <div className="container">
        <h2>Professional Experience</h2>

        <div className="card" style={{ borderLeft: "4px solid #38bdf8" }}>
          <h3>Sresht – Child Audio Evaluation Platform</h3>
          <p style={{ opacity: 0.7, marginBottom: "15px" }}>
            Full Stack Developer
          </p>

          <ul style={{ lineHeight: "1.9" }}>
            <li>Developed dynamic UI using React & TypeScript</li>
            <li>Built Spring Boot REST APIs</li>
            <li>Implemented Base64 file upload system</li>
            <li>Designed optimized MySQL schema</li>
            <li>Integrated role-based access control (RBAC)</li>
          </ul>
        </div>

        <div className="card" style={{ borderLeft: "4px solid #38bdf8" }}>
          <h3>PhysioSens – Physiological Monitoring System</h3>
          <p style={{ opacity: 0.7, marginBottom: "15px" }}>
            Full Stack Developer
          </p>

          <ul style={{ lineHeight: "1.9" }}>
            <li>Developed REST APIs for ECG/PPG data ingestion</li>
            <li>Designed time-series MySQL database schema</li>
            <li>Built real-time dashboards using React</li>
            <li>Optimized SQL indexing for performance</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Experience;