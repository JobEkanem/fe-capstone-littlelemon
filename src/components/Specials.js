
import React from 'react';
import "../styles/main.css"
import greek from '../images/greek.png';
import Brushetta from '../images/Brushetta.png';
import lemon from '../images/lemon.png';
import { useNavigate } from 'react-router-dom';

export function Specials() {
  const navigate = useNavigate();
    return (
      <section className="specials">
        <div className='specials-title-button'>
        <h1 className="specials__title">This weeks specials !</h1>
        <button className="specials__button"
        onClick={() =>{navigate("/menu");}}
        >Online Menu</button>
        </div>
        <div className="specials__columns">
          <div className="specials__column">
            <img
              src={greek}
              alt="Little lemon Greek Salad"
              className="specials__image"
            />
            <div className='meals-price'>
            <h3 className="specials__name">Greek Salad</h3>
            <h5 className="specials__price">$12.99</h5>
            </div>
            <p className="specials__description">
            The famous greek salad of crispy lettuce, pepers, olives and Chicago 
            style feta cheese garnished with crunchy garlic and rosemary crutons
            </p>
            <h4 className="specials__info">Order a Delivery    #1</h4>
          </div>
          <div className="specials__column">
            <img
              src={Brushetta}
              alt="Brushetta"
              className="specials__image"
            />
            <div className='meals-price'>
            <h3 className="specials__name">Brushetta</h3>
            <h5 className="specials__price">$5.99</h5>
            </div>
            <p className="specials__description">
             Our Bruchetta is made from grilled bread that has been smeared with garlic and
              seasoned with salt and olive oil
            </p>
            <h4 className="specials__info">Order a Delivery    #1</h4>
          </div>
          <div className="specials__column">
            <img
              src={lemon}
              alt="Lemon Salad"
              className="specials__image"
            />
            <div className='meals-price'>
            <h3 className="specials__name">Lemon Salad</h3>
            <h5 className="specials__price">$5.00</h5>
            </div>
            <p className="specials__description">
            The famous greek salad of crispy lettuce, pepers, olives and Chicago style 
            feta cheese garnished with crunchy garlic and rosemary crutons
            </p>
            <h4 className="specials__info">Order a Delivery    #1</h4>
          </div>
        </div>
      </section>
    );
  }
  
  export default Specials;