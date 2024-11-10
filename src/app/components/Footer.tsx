import React from 'react';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="about-footer">
          <h2>About Me</h2>
          <p>I&apos;m a passionate web developer specializing in creating dynamic and responsive websites.</p>
        </div>
        
        <div className="social-links">
          <h2>Follow Me</h2>
          <div className="icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Image src="/fb_1-removebg-preview.png" alt="Facebook Icon" width={100} height={76} id="fb-1" />
            </a>
            <a href="https://www.linkedin.com/in/muneeb-ali-2062b62b6/" target="_blank" rel="noopener noreferrer">
              <Image src="/linkdin-removebg-preview.png" alt="LinkedIn Icon" width={100} height={94} id="link" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Image src="/twitter-removebg-preview.png" alt="Twitter Icon" width={74} height={69} id="wat" />
            </a>
          </div>
        </div>
        
        <div className="contact-footer">
          <h2>Contact</h2>
          <p>Email: muneebmalik@gmail.com</p>
          <p>Phone: +92 317 3829361</p>
        </div>
      </div>
      <p className="footer-bottom">&copy; 2024 Muneeb Ali | All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
