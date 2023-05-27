import React from "react";
import restauranfood from "../images/restauranfood.jpg";
import { useNavigate } from 'react-router-dom';
import "../styles/main.css"



export function Hero() {
  const navigate = useNavigate();
    return (
      <section className="hero">
        <div className="left-section">
            <h1 className="title">Little Lemon</h1>
            <h2 className="location">Chicago</h2>
            <p className="description">
            We are a family owned Mediterranean Restaurant focused on traditional recipes served with a modern twist
            </p>
            
            <button 
            className="cta-button"
            onClick={() =>{navigate("/reservations");}}
            >Reserve a Table</button>
        </div>
        <section className="right-section">
        <div>
          <img
            className="hero-image"
            src={restauranfood}
            alt="Delicious food on a plate"
          />
        </div>
        </section>
      </section>
    );
  }
  
  export default Hero;