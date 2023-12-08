import React from "react";
// import Header from './Header';
import Footer from "./Footer";
import blueBannerImage from "./blue-banner.png";
import girlBannerImg from './girl-banner.png';
import Navigationbar from "../Navigationbar/Navigationbar";

const AboutPage = () => {
  return (
    <div
      style={{
        background:
          'linear-gradient(to top, #A0C7FF 0%, #F9F9F9 30%, #F9F9F9 70%, #FFFFFF 100%)',
      }}
    >
      <Navigationbar />
      <ImageSection />

      <FeaturesSection />
      <TwoColumnSection />

      <Footer />
    </div>
  );
};

const ImageSection = () => {
  const imageSectionStyle = {
    textAlign: "center",
    padding: "2rem",
    backgroundColor: "#e0e0e0",
    backgroundImage: `url(${blueBannerImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    height: "15rem",
    justifyContent: "center",
  };

  return (
    <section style={imageSectionStyle}>
      <h3 className="text-white">“Discover, Apply and Ease your Budget”</h3>
    </section>
  );
};

const FeaturesSection = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#f0f0f0", padding: "2rem 0" }}>
      <div className="container">
        <h2 className="text-center mb-4">Platform Features</h2>
        <div className="row text-center">
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="feature-icon">Look</div>
            <p>Search and explore</p>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="feature-icon">Select</div>
            <p>Choose options</p>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="feature-icon">Apply</div>
            <p>Submit applications</p>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="feature-icon">Wait</div>
            <p>Review responses</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const TwoColumnSection = () => {
  const imageSectionStyle = {
    textAlign: 'left',
    padding: '2rem',
    backgroundColor: '#e0e0e0',
    backgroundImage: `url(${girlBannerImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    borderRadius:'2.25%',
    width:'40%',
    height:'300px'
  };

  return (
    <section className=" w-80 m-4 d-inline-block" style={imageSectionStyle}>
      <h3 className="text-white pt-3">“Discover, Apply, and</h3>
      <h3 className="text-white">Ease your Budget”</h3>
      <button className="btn btn-primary btn-md mt-3">
        Contact us
      </button>{' '}
    </section>
  );
};

const loremIpsum = 'abcd';

export default AboutPage;
