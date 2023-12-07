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

const TextSection = ({ heading, content }) => {
  return (
    <section className="py-5" style={{ backgroundColor: "#f0f0f0" }}>
      <div className="container">
        <h2 className="text-center mb-4">{heading}</h2>
        <p>{content}</p>
      </div>
    </section>
  );
};

const IconSection = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#e0e0e0" }}>
      <div className="container">
        <div className="row text-center">
          <div className="col-sm iconStyle">Look</div>
          <div className="col-sm iconStyle">Select</div>
          <div className="col-sm iconStyle">Apply</div>
          <div className="col-sm iconStyle">Wait</div>
        </div>
      </div>
    </section>
  );
};

const TwoColumnSection = () => {
  const imageSectionStyle = {
    textAlign: "center",
    padding: "2rem",
    backgroundImage: `url(${girlBannerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    position: "relative",
    borderRadius: "1%",
    width: "50%",
    margin: "3rem auto",
  };

  return (
    <section className="py-5" style={imageSectionStyle}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-sm-12">
            {" "}
            {/* Adjust width for different screen sizes */}
            <h3 className="text-white">“Don’t wait any longer to follow your desired career”</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

const loremIpsum =
  "Welcome to YourFinancialEase.com, your personalized guide to unlocking financial opportunities for education. At YourFinancialEase, we understand that navigating the world of loans and scholarships can be overwhelming. Thats why we have created a user-friendly platform to empower you with the knowledge and options tailored to your unique financial situation.";

export default AboutPage;
