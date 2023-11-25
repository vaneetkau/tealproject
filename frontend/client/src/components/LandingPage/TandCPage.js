// AboutPage.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import blueBannerImage from './blue-banner.png';


const TandCPage = () => {
  return (
    <div>
      <Header />
      <ImageSection />
      <TextSection />
      <TextSection2 />

      <TwoColumnSection />
      <Footer />
    </div>
  );
};

const ImageSection = () => {
  const imageSectionStyle = {
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#e0e0e0',
    backgroundImage: `url(${blueBannerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px', // Set your preferred height for the section
    position: 'relative', // Ensure relative positioning for text overlay
  };
  return (
    <section className=" w-100 h-25 d-inline-block" style={imageSectionStyle}>
      <h3 className="text-white">“Discover, Apply and Ease your Budget”</h3>
    </section>
  );
};


const TextSection = () => {
  return (
    <section style={textSectionStyle}>
      <h2>Our Terms and Conditions</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus,
        nunc ac faucibus porttitor, sem felis maximus est, eget aliquam augue
        nisl id ex. Etiam sollicitudin quis purus eu iaculis. Vestibulum turpis
        dolor, commodo ut finibus in, vestibulum nec velit. Aenean varius vel
        arcu ut malesuada. Praesent vulputate in nisi vel elementum.
        Pellentesque nec nisl elementum, porta tellus ac, porttitor libero. Nam
        augue orci, rhoncus a fringilla sit amet, dictum non odio. Aliquam
        sollicitudin odio tellus. Quisque imperdiet elit vel libero pharetra,
        non vulputate est interdum.
      </p>
    </section>
  );
};

const TextSection2 = () => {
  return (
    <section style={textSectionStyle}>
      <h2>Our Policies</h2>
      <p>
        {' '}
        <a> Registration</a>{' '}
      </p>
      <p>
        {' '}
        <a> Termination of Registarion</a>{' '}
      </p>{' '}
      <p>
        {' '}
        <a> Disclaimer of Liability</a>{' '}
      </p>
      <p>
        {' '}
        <a> Third Party Advertisement</a>{' '}
      </p>
      <p>
        {' '}
        <a> User Information and Content</a>{' '}
      </p>
      <br />
    </section>
  );
};

const TwoColumnSection = () => {
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2>Heading</h2>
        <div>
          <button type="button" className="btn btn-orange">
            Button
          </button>
        </div>
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

const containerStyle = {
  maxWidth: '400px', // Adjust the maximum width of the container
  margin: '0 auto', // Center the container horizontally
  border: '1px solid #ccc',
  padding: '20px',
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

export default TandCPage;
