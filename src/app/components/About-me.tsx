
import React from 'react';

function AboutMe() {
  return (
    <section id='about' className='about-me'>
      <div className='container'>
        <div className='row'>
          <div className='img'>
            <img src='/about 1.jpg' alt='img' />
          </div>
          <div className='about'>
            <h2>About me</h2>
            <p>
              Hi, I am Muneeb Ali, a dedicated and passionate web developer with a keen eye for detail and a love for creating dynamic, responsive websites. &lsquo;With expertise in HTML, CSS, JavaScript, and React.js, I transform ideas into functional and visually appealing web experiences.&rsquo;
            </p>
            <p>
              Over the years, I have honed my skills in front-end development, focusing on clean, efficient code and user-centric design. My approach is always to understand the clients needs thoroughly and then exceed their expectations with high-quality work.
            </p>

            <h2 id='h2'>Experienced</h2>
            <p>&lsquo;I have 1 year of experience at Chiniot General Hospital&lsquo;</p>
            <p>&lsquo;I have successfully completed several projects ranging from small business websites to complex web applications.&rsquo;</p>
            <p>Lets connect and collaborate to bring your ideas to life</p>
            
            <a href='/' download='/Muneeb-Malik.pdf'>
              <button>Download CV</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
