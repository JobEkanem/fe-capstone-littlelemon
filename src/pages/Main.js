import React from "react";
import { Hero } from '../components/Hero';
import "../styles/main.css"
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";
import About from "../components/About";






export function Main() {
    return (
      <section className="main">
        <Hero />
        <Specials />
        <Testimonials />
        <About />
        
        
      </section>
    );
  }
export default Main;