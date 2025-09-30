import React from 'react';
import '../index.css';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p>Ready to start a project? I'm available for custom art commissions, photo manipulation work, and professional retouching services.</p>
      
      <div className="contact-info">
        <a href="mailto:rishabaramachandran518@gmail.com" target="_blank" rel="noopener noreferrer">Email Me</a>
        <a href="https://instagram.com/yourhandlehttps://www.instagram.com/ram_creations_15_29?igsh=MWpna2Eya211M210Ng==" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://behance.net/yourhandle" target="_blank" rel="noopener noreferrer">Behance</a>
      </div>
      
      <p style={{marginTop: '40px', fontSize: '0.9rem'}}>Please include a detailed brief of your project for a faster response!</p>
    </section>
  );
};

export default Contact;