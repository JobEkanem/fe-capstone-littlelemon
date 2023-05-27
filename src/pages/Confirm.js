import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/reserve.css';

function Confirm() {
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [firstnameError, setFirstnameError] = useState('');
  const [lastnameError, setLastnameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');

  const validate = () => {
    let isValid = true;

    if (!firstname) {
      setFirstnameError(<span style={{ color: 'red' }}>Please enter a firstname</span>);
      isValid = false;
    }
    if (!lastname) {
      setLastnameError(<span style={{ color: 'red' }}>Please enter a lastname</span>);
      isValid = false;
    }
    if (!phone) {
      setPhoneError(<span style={{ color: 'red' }}>Please enter a phone number</span>);
      isValid = false;
    }
    if (!email) {
      setEmailError(<span style={{ color: 'red' }}>Please enter an email</span>);
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validate()) {
      navigate('/success');
    }
  };

  return (
    <div className="confirm-container">
    <div>
        <h1>Enter your details here</h1>
    </div>

      <form className="enter-details">
        <div className="input-wrapper">
          <label className="form-label">Enter Firstname</label>
          <input
            className="form-input"
            id="firstname"
            type="text"
            required
            value={firstname}
            onChange={(e) => {
              setFirstname(e.target.value);
              setFirstnameError('');
            }}
          />
          {firstnameError && <div className="error-message">{firstnameError}</div>}
        </div>

        <div className="input-wrapper">
          <label className="form-label">Enter Lastname</label>
          <input
            className="form-input"
            id="lastname"
            type="text"
            required
            value={lastname}
            onChange={(e) => {
              setLastname(e.target.value);
              setLastnameError('');
            }}
          />
          {lastnameError && <div className="error-message">{lastnameError}</div>}
        </div>

        <div className="input-wrapper">
          <label className="form-label">Enter Phone No:</label>
          <input
            className="form-input"
            id="phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              setPhoneError('');
            }}
          />
          {phoneError && <div className="error-message">{phoneError}</div>}
        </div>

        <div className="input-wrapper">
          <label className="form-label">Enter email</label>
          <input
            className="form-input"
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError('');
            }}
          />
          {emailError && <div className="error-message">{emailError}</div>}
        </div>

        <button id="confirm-button" onClick={handleSubmit}>
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

export default Confirm;

