import React from 'react';
import "../styles/main.css"
import john from "../images/john.PNG";
import jessica from "../images/jessica.PNG";
import titan from "../images/titan.PNG";
import diane from "../images/diane.PNG";

export function Testimonials (){
    return (
      <section className="testimonials">
        <h2 className="testimonials__title">Testimonials</h2>
        <div className="testimonials__profiles">
          <div className="testimonials__profile">
            <h3 className="testimonials__name">John Stevens</h3>
            <img className="testimonials__image" src={john} alt="John Stevens" />
            <p className="testimonials__testimony">"I came to little Lemon after a 5 hours flight from the East Coast.The food here tasted so delicious after the trip here."</p>
          </div>
          <div className="testimonials__profile">
            <h3 className="testimonials__name">Diane Smith</h3>
            <img className="testimonials__image" src={diane} alt="Diane Smith" />
            <p className="testimonials__testimony">"This restaurant served as a perfect dinner for me after a long night of studying. I would definitely order from here again."</p>
          </div>
          <div className="testimonials__profile">
            <h3 className="testimonials__name">Titan Johnson</h3>
            <img className="testimonials__image" src={titan} alt="Titan Johnson" />
            <p className="testimonials__testimony">"I've had some great Mediterranean food before, but none of them beats Little Lemon in flavor and texture."</p>
          </div>
          <div className="testimonials__profile">
            <h3 className="testimonials__name">Jessica Brown</h3>
            <img className="testimonials__image" src={jessica} alt="Jessica Brown" />
            <p className="testimonials__testimony">"The food here was fire!! Everyone should try this place out at least once if they live  in Chicago."</p>
          </div>
        </div>
      </section>
    );
  }
  
  export default Testimonials;