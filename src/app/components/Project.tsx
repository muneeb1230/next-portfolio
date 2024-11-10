import React from 'react'

import Image from 'next/image';

function Portfolio() {
  return (
    <section id='portfolio' className='project'>
      <div className='container'>
        <h2>Project</h2>
        <p id='para'>
          Here are some of the projects I've worked on, showcasing my skills in web development and my ability to turn
          ideas into fully functional, visually appealing websites.
        </p>
        <div className='row'>
          <div className='box'>
            <Image src='/proj 1.avif' alt='The Music Website' width={492} height={211} />
            <p>The Music Website</p>
          </div>
          <div className='box'>
            <Image src='/proj 2.avif' alt='The John Deno Website' width={492} height={213} />
            <p>The John Deno Website</p>
          </div>
          <div className='box'>
            <Image src='/proj 3.avif' alt='Darna Constructor Website' width={492} height={204} />
            <p id='par3'>Darna Constructor Website</p>
          </div>
          <div className='box'>
            <Image src='/pro 4.png' alt='The Client Portfolio' width={492} height={245} />
            <p>The Client Portfolio</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
