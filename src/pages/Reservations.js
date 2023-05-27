import React from 'react';
import hero2 from '../images/hero2.png';
import BookingForm from '../components/BookingForm';


function Reservations() {
  return (
    <>
      <div className='reserve-container'>
          <img src={hero2} alt="Hero 2"  className='reservation-hero'/>
      </div>
      <div className='components-containers'>
      <BookingForm />
      </div>
      

    </>
  );
}

export default Reservations;
