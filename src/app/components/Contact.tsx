import React from 'react';
import Image from 'next/image';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <p id="para">
          Let&apos;s connect and create something amazing together—reach out to start the conversation!
        </p>

        <div className="row">
          <div className="box">
            <Image src="/contat 1.avif" alt="Address Icon" width={86} height={86} />
            <p className="para">ADDRESS</p>
            <p>Karachi, Sindh</p>
          </div>
          <div className="box">
            <Image src="/contat2.avif" alt="Contact Number Icon" width={86} height={86} />
            <p className="para">CONTACT NO</p>
            <p>+92 317,3829361</p>
          </div>
          <div className="box">
            <Image src="/contat3.avif" alt="Email Icon" width={86} height={86} />
            <p className="para">EMAIL ADDRESS</p>
            <p>muneebmalikdev@gmail.com</p>
          </div>
          <div className="box">
            <a href="https://www.linkedin.com/in/muneeb-ali-2062b62b6/" target="_blank" rel="noopener noreferrer">
              <Image src="/contact4.avif" alt="LinkedIn Icon" width={86} height={86} />
            </a>
            <p className="para">LINKEDIN</p>
            <p>Muneeb Ali</p>
          </div>
        </div>

        <div className="row-2">
          <Image src="/muneeb.jpg" id="img-contat" alt="Contact Image" width={380} height={480} />

          <div className="form">
            <div className="name-fields">
              <div className="input-field">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" placeholder="John" />
              </div>

              <div className="input-field">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" placeholder="Alfard" />
              </div>
            </div>

            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="example@mail.com" />
            </div>

            <div className="input-field">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Your message..."></textarea>
            </div>

            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
