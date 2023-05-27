import React from 'react';
import { Link } from 'react-router-dom';
import flogo from '../images/flogo.PNG';
import '../styles/footer.css';


function Footer() {
  return (
    <div className='footer'>
        <section className='footer-logo'>
            <div>
                <Link to="/">
                <img src={flogo} alt="Little Lemon Restaurant footer Logo" />
                </Link>
            </div>
        </section>
        <section className='nav-section'>
                
            <div className='footer-nav'>
                <h2 className='nav-title'>Navigation</h2>
                <Link to = "/" >Home</Link>
                <Link to = "/About">About</Link>
                <Link to = "/Menu">Menu</Link>
                <Link to = "/Reservations">Reservations</Link>
                <Link to = "/Order">Order</Link>
                <Link to = "/Login">Login</Link>
            </div>
        </section>
        <section className='contact-section'>
            <h2 className='nav-title'>Contact</h2>
            <address>
                2385 Maldove way,
                Chicago, Illinos,
                (629)-243-6827
            </address>
            <p>info@littlelemon.com</p>
        </section>
        <section className='social-section'>
        <h2 className='nav-title'>Connect</h2>
        <div className='social'>
            <a href="https://www.facebook.com/example">Facebook</a>
            <a href="https://www.instagram.com/example">Instagram</a>
        </div>
        <h4>Join Us</h4>
        </section> 
    </div>
  );
}

export default Footer;