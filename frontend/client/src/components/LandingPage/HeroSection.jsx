import React from 'react';
import './HeroSection.css';
import HeroSectionImg from './Hero-image.png';
import { useNavigate } from 'react-router-dom';
import Login from '../UserAuthentication/Login';
import Header from './Header';
import Footer from './Footer';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login");
    navigate("/Login");
  };

  return (
    <div>
      <Header />
      <section className="hero container-fluid">
        <div className="row align-items-center mt-lg-0 mt-1"> 
          <div className="col-lg-6">
            <h1 className="text-primary">
              Get help to ease your studies, Just Discover, Apply and Ease your
              budget!
            </h1>
            <p>
              Don’t Know how? Don’t Worry, we got you! begin your Journey today and
              don’t miss any opportunity to get a loan or scholarship again!
            </p>
            <button type='submit' onClick={handleSubmit} className='btn btn-lg btn-warning'>Begin Today!</button>
          </div>
          <div className="col-lg-6">
            <img
              src={HeroSectionImg}
              alt="Description"
              className="hero-image img-fluid"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HeroSection;
