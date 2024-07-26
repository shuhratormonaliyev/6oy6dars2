import React, { useRef } from 'react';
import './App.css';

const RegistrationForm = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const companyRef = useRef();
  const addressRef = useRef();
  const monthRef = useRef();
  const dayRef = useRef();
  const yearRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const company = companyRef.current.value;
    const address = addressRef.current.value;
    const month = monthRef.current.value;
    const day = dayRef.current.value;
    const year = yearRef.current.value;

    // Simple validation
    if (!firstName || !lastName || !email || !address || !month || !day || !year) {
      alert('Please fill in all required fields');
      return;
    }

    console.log('Form Data:', {
      firstName,
      lastName,
      email,
      company,
      address,
      month,
      day,
      year
    });

 };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <div className="form-header">
        <h1>YourEvent</h1>
        <h2>Online Registration</h2>
      </div>
      <div className="form-group">
        <label>
          First Name
          <input type="text" ref={firstNameRef} placeholder="First Name" required />
        </label>
        <label>
          Last Name
          <input type="text" ref={lastNameRef} placeholder="Last Name" required />
        </label>
      </div>
      <div className="form-group">
        <label>
          Email Address
          <input type="email" ref={emailRef} placeholder="Email Address" required />
        </label>
      </div>
      <div className="form-group">
        <label>
          Company (if applicable)
          <input type="text" ref={companyRef} placeholder="Company" />
        </label>
      </div>
      <div className="form-group">
        <label>
          Physical Address
          <input type="text" ref={addressRef} placeholder="Physical Address" required />
        </label>
      </div>
      <div className="form-group">
        <label>
          Date of Birth
          <div className="dob-inputs">
            <input type="number" ref={monthRef} placeholder="Month" min="1" max="12" required />
            <input type="number" ref={dayRef} placeholder="Day" min="1" max="31" required />
            <input type="number" ref={yearRef} placeholder="Year" min="1900" max="2024" required />
          </div>
        </label>
      </div>
      <button type="submit" className="submit-button">Register</button>
    </form>
  );
};

export default RegistrationForm;
