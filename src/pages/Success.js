import React from 'react'
import '../styles/reserve.css';
import greek from '../images/greek.png';


function Success() {
  return (
    <>
        <div className='success-image'>
            < img src= {greek} alt ='Greek salad from little lemon' className='greek-image'/>
            </div>
        <div className='success-container'>
            <h1 className='h-success'>Reservation Confirmed!</h1>
            <div className='box'>
                <p className='p-succes'>Thank you for choosing Little Lemon Restaurant! Your reservation has been successfully confirmed. 
                    We can't wait to host you and make your dining experience memorable. We look forward to serving 
                    you. See you soon!
                </p>
            </div>

        </div>
    </>
  )
}

export default Success