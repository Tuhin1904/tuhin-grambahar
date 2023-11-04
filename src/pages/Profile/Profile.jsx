import React from 'react';
import classes from './Profile.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const Profile = () => {
  const currencies = [
    {
      value: 'Male',
      label: 'Male',
    },
    {
      value: 'Female',
      label: 'Female',
    },
    {
      value: 'Rather not say',
      label: 'Rather not say',
    },
  ];
  return (
    <>
      <div className={classes.container}>
        <form action="">
          <TextField className={classes.textField} label="Enter your Name" variant="outlined" />
          <br />
          <TextField
            id="filled-select-currency"
            select
            label="Gender"
            defaultValue="Male"
            helperText="Please select your gender"
            variant="filled"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <br />
          <br />
          <TextField className={classes.textField} label="Phone" type="phone" variant="outlined" disabled={true} />
          <TextField className={classes.textField} label="Email id" type="email" variant="outlined" />

          <div className={classes.button}>Save and Update</div>
        </form>
      </div>
      <button>Log out</button>
    </>
  );
};

export default Profile;
