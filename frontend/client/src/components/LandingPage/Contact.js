// ContactPage.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Contact = () => {
  return (
    <div>
      <Header />
      <ContactSection />
      <Footer />
    </div>
  );
};

const ContactSection = () => {
  return (
    <section style={sectionStyle}>
      <div style={leftColumnStyle}>
        <h1>Contact Us</h1>
        <p>Your contact information goes here.</p>
        <img
          src="path/to/your/image.jpg"
          alt="Description"
          style={imageStyle}
        />
      </div>
      <div style={rightColumnStyle}>
        <ContactForm />
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <form style={formStyle}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Contact:
        <input type="text" name="contact" />
      </label>
      <label>
        Location:
        <input type="text" name="location" />
      </label>
      <label>
        Inquiry:
        <input type="text" name="inquiry" />
      </label>
      <label>
        Message:
        <textarea name="message" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

// Styles
const sectionStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2rem',
  backgroundColor: '#f0f0f0',
};

const leftColumnStyle = {
  flex: '0 0 40%',
};

const rightColumnStyle = {
  flex: '0 0 60%',
};

const imageStyle = {
  maxWidth: '100%',
  height: 'auto',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '400px', // Adjust the width as needed
  margin: '0 auto',
};

export default Contact;
