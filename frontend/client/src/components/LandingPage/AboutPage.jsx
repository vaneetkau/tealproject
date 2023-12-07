import React from "react";
// import Header from './Header';
import Footer from "./Footer";
import blueBannerImage from "./blue-banner.png";
import girlBannerImg from "./girl-banner.png";
import Navigationbar from "../Navigationbar/Navigationbar";

const AboutPage = () => {
  return (
    <div>
      {/* <Header /> */}
      <Navigationbar />
      <ImageSection />

      <IconSection />

      <TextSection heading="How to do it?" content={loremIpsum} />
      <TextSection heading="Who are we?" content={loremIpsum} />
      <TextSection heading="What We Do?" content={loremIpsum} />
      <TextSection heading="Our Core Values?" content={loremIpsum} />
      <TwoColumnSection />

      <FeaturesSection />
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

export default AboutPage;
