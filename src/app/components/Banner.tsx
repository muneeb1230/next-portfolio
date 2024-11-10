import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <section  className='who_am'>
    <div className='container'>
     <div className='row'>
        <div className='about'>
         <p>Hi,  This is me </p>
         <h1>Muneeb Ali </h1>
         <p> I'm a passionate web developer specializing in creating dynamic and responsive websites. With a strong foundation in HTML, CSS, and JavaScript, I bring innovative ideas to life through clean and efficient code. I'm dedicated to delivering high-quality work that meets client needs and exceeds expectations.

         </p>
         <button >
             Contact me
         </button>
        </div>
        <div className='img'>
         <Image width={300} height={300} src='/muneeb.jpg' alt='muneeb.jgp' />
        </div>

     </div>
    </div> 
  </section>
  )
}

export default Banner