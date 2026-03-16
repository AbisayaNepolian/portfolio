import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container hero-container">

                {/* LEFT SIDE */}
                <div className="hero-text">

                    <h1 className="hero-title">
                        Hi, I'm Abisaya 🚀
                    </h1>

                    <p className="hero-sub">
                        <Typewriter
                            words={[
                                "Full Stack Developer",
                                "React Developer",
                                "Spring Boot Developer",
                                "Freelancer Available"
                            ]}
                            loop
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </p>

                    <div className="hero-icons">
                        <a
                            href="https://www.linkedin.com/in/abisaya-n147/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin size={26} />
                        </a>

                        <a
                            href="https://github.com/AbisayaNepolian"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub size={26} />
                        </a>
                    </div>
                    <div className="hero-buttons">

                        <a href="#projects" className="btn">
                            View Projects
                        </a>
                        <a href="/Abisaya_FullStackDeveloper_Resume.pdf" download className="btn">
                            Download Resume
                        </a>
                    </div>

                </div>

                {/* RIGHT SIDE IMAGE */}
                <div className="hero-image">
                    <img
                        src="/profile.jpg"
                        alt="Abisaya"
                        className="profile-img"
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;