// AboutPage.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import blueBannerImage from './blue-banner.png';
import girlBannerImg from './girl-banner.png'


const FaqPage = () => {
  return (
    <div className='d-flex flex-column'>
      <Header />
      <ImageSection />
      <TextSection />

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
 <div className="container-fluid text-left" style={{ backgroundColor: '#F4F4F4' }}>
      <div className="row">
        <div className="col">
          <h1 className="text-left mb-4">Applying</h1>
          <ul className="list-unstyled">
            <li>
              <a href="#" className="text-left d-block mb-2">How to apply to schoraships?</a>
            </li>
            <li>
              <a href="#" className="text-left d-block mb-2">How to apply to Loans?</a>
            </li>
            <li>
              <a href="#" className="text-left d-block mb-2">How to apply to Loans?</a>
            </li>
          </ul>
          <hr className="bg-orange" />
          <p className="text-left">
            <a href="#" className="text-decoration-none">Read More</a>
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};

const TwoColumnSection = () => {
  const imageSectionStyle = {
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#e0e0e0',
    backgroundImage: `url(${girlBannerImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '500px', // Set your preferred height for the section
    position: 'relative', // Ensure relative positioning for text overlay
  };

  return (
    <section className=" w-100 d-inline-block" style={imageSectionStyle}>
      <h3 className="text-white">“Discover, Apply and Ease your Budget”</h3>
    </section>
  );
};




const textSectionStyle = {
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