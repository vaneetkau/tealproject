// AboutPage.js
import React from 'react';
import Header from './Header';
import Footer from './Footer'
import blueBannerImage from './blue-banner.png';
import girlBannerImg from './girl-banner.png'

const AboutPage = () => {
  return (
    <div>
      <Header />
      <ImageSection />
      <TextSection />
      <IconSection />
      <TextSection1 />
      <TextSection2 />
      <TextSection3 />
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
      <div className=" w-100 h-100 d-inline-block">
        <h2>How to do it?</h2>
      </div>
    </section>
  );
};
const TextSection1 = () => {
  return (
    <section style={textSectionStyle}>
      <div className=" w-100 h-100 d-inline-block">
        <h2>Who are we?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus,
          nunc ac faucibus porttitor, sem felis maximus est, eget aliquam augue
          nisl id ex. Etiam sollicitudin quis purus eu iaculis. Vestibulum
          turpis dolor, commodo ut finibus in, vestibulum nec velit. Aenean
          varius vel arcu ut malesuada. Praesent vulputate in nisi vel
          elementum. Pellentesque nec nisl elementum, porta tellus ac, porttitor
          libero. Nam augue orci, rhoncus a fringilla sit amet, dictum non odio.
          Aliquam sollicitudin odio tellus. Quisque imperdiet elit vel libero
          pharetra, non vulputate est interdum.
        </p>
      </div>
    </section>
  );
};
const TextSection2 = () => {
  return (
    <section style={textSectionStyle}>
      <div className=" w-100 h-100 d-inline-block">
        <h2>What We Do?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus,
          nunc ac faucibus porttitor, sem felis maximus est, eget aliquam augue
          nisl id ex. Etiam sollicitudin quis purus eu iaculis. Vestibulum
          turpis dolor, commodo ut finibus in, vestibulum nec velit. Aenean
          varius vel arcu ut malesuada. Praesent vulputate in nisi vel
          elementum. Pellentesque nec nisl elementum, porta tellus ac, porttitor
          libero. Nam augue orci, rhoncus a fringilla sit amet, dictum non odio.
          Aliquam sollicitudin odio tellus. Quisque imperdiet elit vel libero
          pharetra, non vulputate est interdum.
        </p>
      </div>
    </section>
  );
};
const TextSection3 = () => {
  return (
    <section style={textSectionStyle}>
      <div className=" w-100 h-100 d-inline-block">
        <h2>Our Core Values?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus,
          nunc ac faucibus porttitor, sem felis maximus est, eget aliquam augue
          nisl id ex. Etiam sollicitudin quis purus eu iaculis. Vestibulum
          turpis dolor, commodo ut finibus in, vestibulum nec velit. Aenean
          varius vel arcu ut malesuada. Praesent vulputate in nisi vel
          elementum. Pellentesque nec nisl elementum, porta tellus ac, porttitor
          libero. Nam augue orci, rhoncus a fringilla sit amet, dictum non odio.
          Aliquam sollicitudin odio tellus. Quisque imperdiet elit vel libero
          pharetra, non vulputate est interdum.
        </p>
      </div>
    </section>
  );
};

const IconSection = () => {
  return (
    <section style={iconSectionStyle}>
      <div className=" w-100 mh-100 d-inline-block">
        <div class="container">
          <div class="row">
            <div class="col-sm" style={iconStyle}>
              One of three columns
              <p>Look for the loan or scholarship that best suits you</p>
            </div>
            <div class="col-sm" style={iconStyle}>
              One of three columns
              <p>Select and get all the information</p>
            </div>
            <div class="col-sm" style={iconStyle}>
              One of three columns
              <p>Fill the application letter </p>
            </div>
            <div class="col-sm" style={iconStyle}>
              One of three columns
              <p>Wait for the reply!</p>
            </div>
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
  textAlign: 'center',
  padding: '2rem',
  backgroundColor: '#f0f0f0',
};

const iconSectionStyle = {
  display: 'flex',
  justifyContent: 'center',
  padding: '2rem',
  backgroundColor: '#e0e0e0',
};

const iconStyle = {
  margin: '0 1rem',
  textAlign: 'center',
  width: '50px',
  height: '50px',
  lineHeight: '50px',
  backgroundColor: '#333',
  color: '#fff',
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
  iconSectionStyle: {
    flexDirection: 'column',
  },
  iconStyle: {
    margin: '1rem 0',
  },
};

// Apply responsive styles using media queries
Object.keys(responsiveStyles).forEach(key => {
  const style = responsiveStyles[key];
  const mediaQuery = `@media (max-width: 768px) { ${key} { ${Object.entries(style).map(([property, value]) => `${property}: ${value};`).join(' ')} } }`;
  const styleTag = document.createElement('style');
  styleTag.type = 'text/css';
  styleTag.appendChild(document.createTextNode(mediaQuery));
  document.head.appendChild(styleTag);
});


export default AboutPage;
