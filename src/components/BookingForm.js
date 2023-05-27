import React, { useState }from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/reserve.css';

function BookingForm() {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    occasion: '',
    date: '',
    time: '',
    guests: '',
    message: '',
  });

  const MAX_GUESTS = 10;
  const [dateError, setDateError] = useState('');
  const [timeError, setTimeError] = useState('');
  const [guestsError, setGuestsError] = useState('');
  const [occasionError, setOccasionError] = useState('');

  const validate = () => {
    let isValid = true;

    if (!formValues.date) {
      setDateError(<span style={{ color: '#F4CE14' }}>Please select a date</span>);
      isValid = false;
    }
    

    if (!formValues.time) {
      setTimeError(<span style={{ color: '#F4CE14' }}>Please select a time</span>);
      isValid = false;
    }

    if (!formValues.guests) {
      setGuestsError(<span style={{ color: '#F4CE14' }}>Please enter number of guests</span>);
      isValid = false;
    }
    if (!formValues.occasion) {
      setOccasionError(<span style={{ color: '#F4CE14' }}>Please select the occasion</span>);
      isValid = false;
    }

    

    return isValid;
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    if (validate()) {
      navigate('/confirm');
    }
  };

  const handleReset = () => {
    if (!validate()) {
      window.location.reload();
    }
  };
  

  return (
    <section className='booking-form'>
      <div className='container'>
        
          <form className='booking-reservation' onSubmit={handleSubmit}>
            <div className='input-wrapper'>
              <label className='form-label'>Choose Date</label>
              <input
                className='form-input'
                id='date-input'
                type='date'
                required
                value={formValues.date}
                onChange={(e) => {
                  setFormValues({...formValues, date: e.target.value});
                  setDateError('');
                }}
              />
              {dateError && <div className='error'>{dateError}</div>}
            </div>

            <div className='input-wrapper'>
              <label className='form-label'>Choose Time</label>
              <input
                className='form-input'
                id='time-input'
                type='time'
                required
                value={formValues.time}
                onChange={(e) => {
                  setFormValues({...formValues, time: e.target.value});
                  setTimeError('');
                }}
              />
              {timeError && <div className='error'>{timeError}</div>}
            </div>

            <div className='input-wrapper'>
            <label className='form-label' htmlFor='guests'>No. of Guests</label>
            <input
                className='form-input'
                id='guests'
                type='number'
                min='1'
                required
                value={formValues.guests}
                onChange={(e) => {
                const guestsValue = e.target.value;
                if (guestsValue <= 0) {
                    setGuestsError('Number of guests must be greater than 0');
                } else if (guestsValue > MAX_GUESTS) {
                    setGuestsError(`Number of guests must be less than or equal to ${MAX_GUESTS}`);
                } else {
                    setGuestsError('');
                    setFormValues({...formValues, guests: guestsValue});
                }
                }}
            />
            {guestsError && <div className='form-error'>{guestsError}</div>}
            </div>


            <div className='input-wrapper'>
            <label className='form-label'>Occasion</label>
            <select 
                className='booking-options'
                value={formValues.occasion}
                onChange={(e) => {
                  setOccasionError('');
                  setFormValues({ ...formValues, occasion: e.target.value });
                 
                }}
            >
                <option value=''></option>
                <option value='birthday'>Birthday</option>
                <option value='engagement'>Engagement</option>
                <option value='anniversary'>Anniversary</option>
            </select>
            {occasionError && <div className='error'>{occasionError}</div>}
            </div>
            <div className='input-wrapper'>
              <label className='form-label'>Additional Information</label>
              <textarea
                className='booking-textarea'
                value={formValues.message}
                onChange={(e) => setFormValues({ ...formValues, message: e.target.value })}
              />
            </div>

          </form>



            </div>

        <div className='summary-box'>
            <div className='p-column'>
                <h1 className='booking-summary'>Booking Summary</h1>
                <p className='summary-text'>Chosen Date is: {formValues.date}</p>
                <p className='summary-text'>Chosen Time is: {formValues.time}</p>
                <p className='summary-text'>The Occasion is: {formValues.occasion}</p>
                <p className='summary-text'>Number of Guests are: {formValues.guests}</p>
                <p className='summary-text'>ADDITIONAL INFORMATION: <br/>{formValues.message}</p>
                <div className='buttons-container'>
                  <button id ='reservation-button' onClick={handleSubmit}>
                      Make Reservation
                  </button>
                  <button id ='reset-button' onClick={handleReset}>
                      Reset
                  </button>
                </div>

            </div>
        </div>
        
      
    </section>
    
   
  );

}

export default BookingForm;
