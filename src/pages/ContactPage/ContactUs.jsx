import React from 'react';
import classes from './ContactUs.modules.css';
import TextField from '@mui/material/TextField';

function ContactUs() {
  const inputStyle = {
    borderRadius: '25px',
    marginBottom: '10px',
    marginRight: '20px',
  };
  const contactFormSubmit = () => {
    // post api submit form
  };
  return (
    <>
      <div className={classes.contactContainer}>
        <div className="grid grid-cols-1 px-4 pb-10 mx-auto contactContainer sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-10">
          <div className="p-6 left">
            <h2 className="pt-4 mb-5 text-xl font-bold text-primary">Contact Us</h2>
            <form action="" onSubmit={contactFormSubmit}>
              <div className={classes.row}>
                <TextField
                  InputProps={{ style: { ...inputStyle, width: '19vw' } }}
                  className={classes.textField}
                  label="Enter your Name"
                  variant="outlined"
                />
                <TextField
                  InputProps={{ style: { ...inputStyle, width: '19vw' } }}
                  className={classes.textField}
                  label="Email id"
                  type="email"
                  variant="outlined"
                />
              </div>

              <div className={classes.row}>
                <TextField
                  InputProps={{ style: { ...inputStyle, width: '40vw' } }}
                  className={classes.textField}
                  label="Phone"
                  type="phone"
                  variant="outlined"
                  value=""
                />
              </div>
              <div className={classes.row}>
                <TextField
                  InputProps={{ style: { ...inputStyle, width: '40vw' } }}
                  className={classes.textField}
                  label="Schedule Your Call"
                  type="schedule"
                  variant="outlined"
                  value=""
                />
              </div>
              <div className={classes.row}>
                <TextField
                  InputProps={{ style: { ...inputStyle, width: '40vw' } }}
                  className={classes.textField}
                  label="Schedule Your Call"
                  type="schedule"
                  variant="outlined"
                  value=""
                />
              </div>
              <button className="button">Submit</button>
            </form>
          </div>
          <div className="right" style={{ paddingTop: '3rem' }}>
            <h3 className="mb-2 text-xl font-bold text-primary">Get in touch</h3>
            <p className="mb-1">
              For collaborations and business related queries: <b>grambahar.com@gmail.com</b>
            </p>
            <p className="mb-1">
              For customer related queries: <b>grambahar.com@gmail.com</b>
            </p>
            <p className="mb-1">
              For any other query: <b>grambahar.com@gmail.com</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
