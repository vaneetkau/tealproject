// AboutPage.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const FaqPage = () => {
  return (
    <div>
      <Header />
      <ImageSection />
      <TextSection />
      <TextSection />
      <TextSection />

      <TwoColumnSection />
      <Footer />
    </div>
  );
};

const ImageSection = () => {
  return (
    <section style={imageSectionStyle}>
      <img src="path/to/small/image.jpg" alt="Description" style={imageStyle} />
      <h3>“Discover, Apply and Ease your Budget”</h3>
    </section>
  );
};

const TextSection = () => {
  return (
    <section style={textSectionStyle}>
      <h2>Applying</h2>
      <p>
        {' '}
        <a> Place your paragraph text here.</a>{' '}
      </p>
      <p>
        {' '}
        <a> Place your paragraph text here.</a>{' '}
      </p>{' '}
      <p>
        {' '}
        <a> Place your paragraph text here.</a>{' '}
      </p>
      <p>
        {' '}
        <a> Place your paragraph text here.</a>{' '}
      </p><br />
    </section>
  );
};


const TwoColumnSection = () => {
  return (
    <section style={sectionStyle}>
      <div style={leftColumnStyle}>
        <h3>Left Column</h3>
        <p>Your left column content goes here.</p>
      </div>
      <div style={rightColumnStyle}>
        <img
          src="path/to/your/image.jpg"
          alt="Description"
          style={columnImageStyle}
        />
      </div>
    </section>
  );
};

// Styles
const imageSectionStyle = {
  textAlign: 'center',
  padding: '2rem',
  backgroundColor: '#e0e0e0',
};

const imageStyle = {
  maxWidth: '100%',
  height: 'auto',
};

const textSectionStyle = {
  textAlign: 'center',
  padding: '2rem',
  backgroundColor: '#f0f0f0',
};

const sectionStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2rem',
  backgroundColor: '#f0f0f0',
};

const leftColumnStyle = {
  flex: '0 0 70%',
};

const rightColumnStyle = {
  flex: '0 0 30%',
};

const columnImageStyle = {
  maxWidth: '100%',
  height: 'auto',
};
// Add responsive styles
const responsiveStyles = {
  headerStyle: {
    fontSize: '1.5rem',
  },
  imageSectionStyle: {
    padding: '1rem',
  },
  textSectionStyle: {
    padding: '1rem',
  },
};

// Apply responsive styles using media queries
Object.keys(responsiveStyles).forEach((key) => {
  const style = responsiveStyles[key];
  const mediaQuery = `@media (max-width: 768px) { ${key} { ${Object.entries(
    style
  )
    .map(([property, value]) => `${property}: ${value};`)
    .join(' ')} } }`;
  const styleTag = document.createElement('style');
  styleTag.type = 'text/css';
  styleTag.appendChild(document.createTextNode(mediaQuery));
  document.head.appendChild(styleTag);
});

export default FaqPage;
