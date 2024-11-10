import React from 'react'

import Image from 'next/image';

function Skills() {
  return (
    <section id="skill" className="skills-section">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-row">
          <div className="skill-box">
            <Image src="/html55.png" alt="HTML Icon" width={60} height={60} />
            <h3>HTML5</h3>
          </div>
          <div className="skill-box">
            <Image src="/css3.png" alt="CSS Icon" width={60} height={60} />
            <h3>CSS3</h3>
          </div>
          <div className="skill-box">
            <Image src="/java3.webp" alt="JavaScript Icon" width={60} height={60} />
            <h3>JavaScript</h3>
          </div>
          <div className="skill-box">
            <Image src="/react3.jpeg" alt="React Icon" width={60} height={60} />
            <h3>React.js</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
