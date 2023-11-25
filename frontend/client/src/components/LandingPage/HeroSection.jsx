// Hero.js
import React from 'react';
import './HeroSection.css'
import HeroSectionImg from './Hero-image.png'
import { useNavigate } from 'react-router-dom';
import Login from '../UserAuthentication/Login';
import Header from './Header';
import Footer from './Footer';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login")
    navigate("/Login")    
};

  return (
    <div className='d-flex flex-column'>
      <Header/>
      <section className="hero">
        <div className="left-column">
          <h1 className="text-primary">
            Get help to ease your studies, Just Discover, Apply and Ease your
            budget!
          </h1>
          <p>
            Don’t Know how? Don’t Worry, we got you! begin your Journey today and
            don’t miss any opportunity to get a loan or scholarship again!
          </p>
          <button type='submit' onClick={handleSubmit} className='btn btn-warning'>Begin Today!</button>
        </div>
        <div className="right-column">
          <img
            src={HeroSectionImg}
            alt="Description"
            className="hero-image"
          />
        </div>
      </section>
      <Footer/>
      </div>
        );
      };
      const heroStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        backgroundColor: '#e0e0e0',
      };
      
      const leftColumnStyle = {
        flex: 1,
        marginRight: '2rem',
        textAlign: 'center',
      };
      
      const rightColumnStyle = {
        flex: 1,
        textAlign: 'center',
      };
      
      const imageStyle = {
        maxWidth: '100%',
        height: 'auto',
      };

export default HeroSection;