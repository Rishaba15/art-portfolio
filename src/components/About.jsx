import React from 'react';
import '../index.css';

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <p>I am a visual artist and dedicated Photoshop maker based in Perambalur. My journey into  art began since 9 years.</p>
        <p>My goal is to use technical mastery to achieve creative excellence, turning ideas into striking visual realities for clients and personal projects.</p>

        <h3>My Skills & Tools</h3>
        <ul className="skill-list">
            <li>Adobe Photoshop (Expert)</li>
            <li>Digital Painting</li>
            <li>Photo Retouching</li>
            <li>Composition & Lighting</li>
            <li>Adobe Illustrator</li>
            <li>Procreate / Krita</li>
            <li>Web Design (HTML/CSS/React)</li>
        </ul>
      </div>
    </section>
  );
};

export default About;