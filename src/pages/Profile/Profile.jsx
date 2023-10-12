import React from 'react'
import classes from './Profile.module.css'
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
    <div className={classes.container}>
        <form action="">
        <TextField className={classes.textField} label="First Name" variant="outlined" />
        <br />
        <TextField className={classes.textField} label="Last Name" variant="outlined" />
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
        <TextField className={classes.textField} label="Mobile Number" variant="outlined" />
        <br />
        <TextField className={classes.textField} label="Email id" variant="outlined" />

        <div className={classes.button}>Save and Update</div>
        </form>
    </div>
  )
}

export default Profile