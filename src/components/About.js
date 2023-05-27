import React from 'react';
import "../styles/main.css"
import Mario from '../images/Mario.PNG';
import Adrian from '../images/Adrian.PNG';

function  About(){
  return (
    <section className="about">
      <div className="about__left">
        <h1 className="about__name">Little Lemon</h1>
        <h3 className="about__location">Chicago</h3>
        <p className="about__history">Little Lemon opened in 1995 by two Italian brothes, Adrian and Mario. Despite the city's diversity. The two brothers recognized the lack of Mediteranean cuisine in Chicago and were 
        inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers continue to 
        oversee the Little Lemon restaurant
        </p>
      </div>
      <div className="about__right">
        <img src={Mario} alt="Adrian Owner 2" className="about-owner-top" />
        <img src={Adrian} alt="Mario Owner 1" className="about-owner-bottom" />
      </div>
    </section>
  );
};

export default About;