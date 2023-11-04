import React, { useState } from 'react';
import classes from './Profile.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import {
  getMyAddresses,
  addMyAddress,
  updateMyAddress,
  deleteMyAddress,
  updateMyPersonalInfo,
  getMyProfile,
} from '../../services/account.services';

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
    setDisabledButton2(!disabledbutton2);
  };

  const deleteKey = (e) => {
    e.preventDefault();
    localStorage.removeItem('user');
    window.location.href = '/';
  };
  const toggleForm = () => {
    setFormVisible(!isFormVisibile);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    try {
      const formData = new FormData(e.target);
      const name = formData.get('name');
      const addressLine1 = formData.get('addressLine1');
      const addressLine2 = formData.get('addressLine2');
      const phoneNumber = formData.get('phoneNumber');
      const country = formData.get('country');
      const state = formData.get('state');
      const district = formData.get('district');
      const pin = formData.get('pin');
      const landmark = formData.get('landmark');
      const response = await addMyAddress({
        name,
        addressLine1,
        addressLine2,
        phoneNumber,
        country,
        state,
        district,
        pin,
        landmark,
      });
      // console.log(response);
    } catch (error) {
      console.log('Unable to Add new Address', error);
    }
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
          <label htmlFor="" id={classes.info}>
            To Add New Address click the button 'Add New Address+'
          </label>
          <form action="">
            <TextField
              className={classes.textField2}
              label="Enter your Name"
              variant="outlined"
              disabled={disabledbutton2}
            />
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
            {isFormVisibile ? 'Hide' : 'Add New Address +'}
          </div>
          <br />

          {isFormVisibile && (
            <>
              <form onSubmit={handleSubmit}>
                <TextField className={classes.textField2} label="Enter your Name" name="name" variant="outlined" />

                <TextField
                  className={classes.textField2}
                  label="Address Line 1"
                  name="addressLine1"
                  variant="outlined"
                />

                <TextField
                  className={classes.textField2}
                  label="Address Line 2"
                  name="addressLine2"
                  variant="outlined"
                />
                <br />

                <TextField className={classes.textField} label="Phone Number" name="phoneNumber" variant="outlined" />

                <TextField className={classes.textField} label="Country" name="country" variant="outlined" />

                <TextField className={classes.textField} label="State" name="state" variant="outlined" />

                <TextField className={classes.textField} label="District" name="district" variant="outlined" />

                <TextField className={classes.textField} label="Pin-code" name="pin" variant="outlined" />

                <TextField className={classes.textField} label="Landmark" name="landmark" variant="outlined" />
                <button className={classes.button} type="submit">
                  Submit
                </button>
              </form>
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
