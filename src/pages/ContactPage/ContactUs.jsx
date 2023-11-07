import React from 'react';
import classes from './ContactUs.modules.css';
import TextField from '@mui/material/TextField';

function ContactUs() {
  return (
    <>
    <div className={classes.container}>
    <div className="classes leftContainer">
        <form action="">
        <div className={classes.row}>
          <TextField
            className={classes.textField}
            label="Enter your Name"
            variant="outlined"
            
          />
          <TextField
            className={classes.textField}
            label="Email id"
            type="email"
            variant="outlined"
          
          />
          </div>
           <br />
           <div className={classes.row}>
          <TextField
            className={classes.textField}
            label="Phone"
            type="phone"
            variant="outlined"
            value=""
          
          /></div>
           <div className={classes.row}>
          <TextField
            className={classes.textField}
            label="Schedule Your Call"
            type="schedule"
            variant="outlined"
            value=""
          
          /></div>
           <div className={classes.row}>
          <TextField
            className={classes.textField}
            label="Schedule Your Call"
            type="schedule"
            variant="outlined"
            value=""
          
          /></div>

        </form>
        </div>
    </div>
    </>
  );
}

export default ContactUs;
