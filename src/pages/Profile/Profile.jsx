import React, { useEffect, useState } from 'react';
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
import AddNewAddress from '../../components/AddNewAddress/AddNewAddress';

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
  const [displayUserData, setUserData] = useState({});

  const toggleButtons = () => {
    setDisabledButton(!disabledbutton);
  };
  const toggleButtons2 = () => {
    setDisabledButton2(!disabledbutton2);
  };

  const deleteKey = (e) => {
    e.preventDefault();
    localStorage.removeItem('user');
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/';
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getMyProfile();
        // console.log('getmyprofile response', response);
        // console.log(response.name, response.phone_number, response.email);
        setUserData(response);
      } catch (error) {
        console.log('catch prt:', error.response.data);
      }
    };
    fetchUserData();
  }, []);

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
          <TextField
            className={classes.textField}
            // label="Phone"
            type="phone"
            variant="outlined"
            value={displayUserData.phone_number}
            disabled={true}
          />

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
        </div>
        <AddNewAddress />
        <button className={classes.button} id={classes.logOut} onClick={deleteKey}>
          Log out
        </button>
      </div>
    </>
  );
};

export default Profile;
