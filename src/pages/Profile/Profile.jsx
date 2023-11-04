import React, { useState } from 'react';
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

  const [disabledbutton, setDisabledButton] = useState(true);
  const [disabledbutton2, setDisabledButton2] = useState(true);
  const [isFormVisibile, setFormVisible] = useState(false);

  const toggleButtons = () => {
    setDisabledButton(!disabledbutton);
  };
  const toggleButtons2 = () => {
    setDisabledButton2(!disabledbutton);
  };

  const deleteKey = (e) => {
    e.preventDefault();
    localStorage.removeItem('user');
    window.location.href = '/';
  };
  const toggleForm = () => {
    setFormVisible(!isFormVisibile);
  };
  return (
    <>
      <div className={classes.container}>
        <form action="">
          <TextField
            className={classes.textField}
            label="Enter your Name"
            variant="outlined"
            disabled={disabledbutton}
          />
          <br />
          <TextField className={classes.textField} label="Phone" type="phone" variant="outlined" disabled={true} />
          <TextField
            className={classes.textField}
            label="Email id"
            type="email"
            variant="outlined"
            disabled={disabledbutton}
          />

          {!disabledbutton ? (
            <div className={classes.button} onClick={toggleButtons}>
              Save Details
            </div>
          ) : (
            <div className={classes.button2} onClick={toggleButtons}>
              Edit Details
            </div>
          )}
        </form>

        <h4>Your Orders</h4>

        <div>
          <form action="">
            <TextField
              className={classes.textField2}
              label="Address Line 1"
              variant="outlined"
              disabled={disabledbutton2}
            />
            <TextField
              className={classes.textField2}
              label="Address Line 2"
              variant="outlined"
              disabled={disabledbutton2}
            />
            <br />

            <TextField className={classes.textField} label="District" variant="outlined" disabled={disabledbutton2} />

            <TextField className={classes.textField} label="State" variant="outlined" disabled={disabledbutton2} />

            <TextField className={classes.textField} label="Country" variant="outlined" disabled={disabledbutton2} />

            <TextField className={classes.textField} label="Pin-code" variant="outlined" disabled={disabledbutton2} />

            <TextField className={classes.textField} label="Landmark" variant="outlined" disabled={disabledbutton2} />

            {!disabledbutton2 ? (
              <div className={classes.button} onClick={toggleButtons2}>
                Save Details
              </div>
            ) : (
              <div className={classes.button2} onClick={toggleButtons2}>
                Edit Details
              </div>
            )}
          </form>

          <div className={classes.button2} onClick={toggleForm}>
            {isFormVisibile ? 'Hide' : 'New Address +'}
          </div>
          <br />
          {isFormVisibile && (
            <>
              <form action="">
                <TextField className={classes.textField2} label="Address Line 1" variant="outlined" />
                <TextField className={classes.textField2} label="Address Line 2" variant="outlined" />
                <br />

                <TextField className={classes.textField} label="District" variant="outlined" />

                <TextField className={classes.textField} label="State" variant="outlined" />

                <TextField className={classes.textField} label="Country" variant="outlined" />

                <TextField className={classes.textField} label="Pin-code" variant="outlined" />

                <TextField className={classes.textField} label="Landmark" variant="outlined" />
              </form>
              <button className={classes.button}>Submit</button>
            </>
          )}
        </div>
        <button className={classes.button} id={classes.logOut} onClick={deleteKey}>
          Log out
        </button>
      </div>
    </>
  );
};

export default Profile;
