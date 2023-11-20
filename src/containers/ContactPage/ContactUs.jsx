import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { FaCheckCircle } from 'react-icons/fa';

function ContactUs() {
  const [showRightIcon, setShowRightIcon] = useState(false);
  const inputStyle = {
    borderRadius: '25px',
    marginBottom: '10px',
    marginRight: '20px',
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowRightIcon(true);
    setTimeout((handler) => {
      setShowRightIcon(false);
    }, 3000);
  };
  return (
    <div className="container">
      <h3 className="mb-12 text-4xl font-bold text-center text-primary">Contact Us</h3>
      <div className="flex justify-center py-4 leftRight">
        <div className="flex-1 px-4 leftContainer">
          <form action="" onSubmit={handleFormSubmit} className="flex flex-col px-6 ">
            <div style={{ display: 'flex', width: '100%' }}>
              <TextField InputProps={{ style: inputStyle }} label="Enter your Name" variant="outlined" />
              <TextField InputProps={{ style: inputStyle }} label="Email id" type="email" variant="outlined" />
            </div>
            <TextField InputProps={{ style: inputStyle }} label="Phone" type="phone" variant="outlined" />

            <TextField
              InputProps={{ style: inputStyle }}
              label="Schedule Your Call"
              type="schedule"
              variant="outlined"
            />

            <TextField
              InputProps={{ style: { ...inputStyle, height: '6rem' } }}
              label="Write Your Query or Suggestion"
              type="query"
              variant="outlined"
            />
            <button
              style={{
                minHeight: '40px',
                backgroundColor: 'rgb(45, 110, 255)',
                color: 'white',
                marginBottom: '1rem',
                width: '25%',
                borderRadius: '2rem',
              }}
              type="submit"
            >
              Proceed
            </button>
          </form>
          {showRightIcon && (
            <div className="flex items-center mt-2">
              <FaCheckCircle className="mr-2 text-green-500" />
              <span className="text-green-500">Form submitted successfully!</span>
            </div>
          )}
        </div>
        <div className="flex-1 rightContainer">
          <p className="text-xl font-medium">Reach Us Via</p>
          <ul className="mt-5 text-lg">
            <li className="font-medium">
              <span>Email:</span>
              <a className="ml-1.5 text-primary" href="mailto:grambahar.com@gmail.com">
                grambahar.com@gmail.com
              </a>
            </li>
            <li className="mt-2 font-medium">
              <span>Phone:</span>
              <a className="ml-1.5 text-primary" href="tel:+919382147143">
                +919382147143
              </a>
              <span className="mx-2">/</span>
              <a className="text-primary" href="tel:+919883214823">
                +919883214823
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
