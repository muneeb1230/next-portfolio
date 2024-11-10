import React from 'react'

import Image from 'next/image';

function MyServices() {
  return (
    <section id='services' className='my-service'>
      <div className='container'>
        <h2>My services</h2>
        <p id='para'>
          Crafting interactive and responsive websites using the latest technologies like HTML, CSS, JavaScript, and
          <br />
          frameworks like Next.js and React.js
        </p>
        <div className='row'>
          <div className='box'>
            <Image src='/serv 1.avif' alt='Web Design Service' width={128} height={128} />
            <h3>WEB DESIGN</h3>
            <hr id='line' />
          </div>

          <div className='box'>
            <Image src='/serv 2.avif' alt='Web Content Service' width={128} height={128} />
            <h3>WEB CONTENT</h3>
            <hr id='line' />
          </div>

          <div className='box'>
            <Image src='/serv 3.avif' alt='Web Development Service' width={128} height={128} />
            <h3>WEB DEVELOPMENT</h3>
            <hr id='line' />
          </div>

          <div className='box'>
            <Image src='/serv 4.avif' alt='Code Problem Service' width={128} height={128} />
            <h3>CODE PROBLEM</h3>
            <hr id='line' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyServices;
