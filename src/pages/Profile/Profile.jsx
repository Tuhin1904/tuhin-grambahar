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
  const [addressResponse, setAddressResponse] = useState([]);

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

        // for all responses
        const response2 = await getMyAddresses();
        // console.log('My storeed address are:', response2);
        // console.log('getmyprofile response', response);
        // console.log(response.name, response.phone_number, response.email);
        setUserData(response);
        setAddressResponse(response2);
      } catch (error) {
        console.log('catch prt:', error.response.data);
      }
    };
    fetchUserData();
  }, [addressResponse]);

  const handleDelete = async (id) => {
    const response = await deleteMyAddress(id);
    // console.log('delete response', response);
    // setAddressResponse((()))
  };

  const updateDetails = async (e) => {
    console.log('update event', e);
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const res = await updateMyAddress({
        name: formData.get('name'),
        addressLine1: formData.get('addressLine1'),
        addressLine2: formData.get('addressLine2'),
        phoneNumber: formData.get('phoneNumber'),
        country: formData.get('country'),
        state: formData.get('state'),
        district: formData.get('district'),
        pin: formData.get('pin'),
        landmark: formData.get('landmark'),
      });
    } catch (error) {
      console.log('Unable to Update Details', error);
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
          </label>{' '}
          <br />
          {addressResponse.length > 0 ? (
            <>
              <label style={{ fontWeight: 'bold', fontSize: 'larger', marginBottom: '10px' }}>
                Your Current Addresses are:
              </label>

              {addressResponse.map((each, i) => (
                <form action="" key={i} style={{ marginTop: '1rem' }} onSubmit={updateDetails}>
                  <TextField
                    className={classes.textField2}
                    label="Enter your Name"
                    variant="outlined"
                    value={each.name}
                    disabled={disabledbutton2}
                    InputProps={{
                      style: {
                        color: '#000000',
                      },
                    }}
                  />
                  <TextField
                    className={classes.textField2}
                    label="Address Line 1"
                    variant="outlined"
                    value={each.address_line_1}
                    disabled={disabledbutton2}
                  />
                  <TextField
                    className={classes.textField2}
                    label="Address Line 2"
                    variant="outlined"
                    value={each.address_line_2}
                    disabled={disabledbutton2}
                  />
                  <br />

                  <TextField
                    className={classes.textField}
                    label="District"
                    variant="outlined"
                    value={each.district}
                    disabled={disabledbutton2}
                  />

                  <TextField
                    className={classes.textField}
                    label="State"
                    variant="outlined"
                    value={each.state}
                    disabled={disabledbutton2}
                  />

                  <TextField
                    className={classes.textField}
                    label="Country"
                    variant="outlined"
                    value={each.country}
                    disabled={true}
                  />

                  <TextField
                    className={classes.textField}
                    label="Pin-code"
                    variant="outlined"
                    value={each.pin}
                    disabled={disabledbutton2}
                  />

                  <TextField
                    className={classes.textField}
                    label="Landmark"
                    variant="outlined"
                    value={each.landmark}
                    disabled={disabledbutton2}
                  />
                  <div style={{ display: 'flex', marginTop: '1rem' }}>
                    {!disabledbutton2 ? (
                      <div
                        className={classes.button}
                        onClick={() => {
                          toggleButtons2();
                        }}
                      >
                        Save Details
                      </div>
                    ) : (
                      <div className={classes.button2} onClick={toggleButtons2}>
                        Edit Details
                      </div>
                    )}
                    <div className={classes.button3} onClick={() => handleDelete(each.id)}>
                      Delete Address
                    </div>
                  </div>
                  <br />
                  <br />
                  <br />
                </form>
              ))}
            </>
          ) : (
            <>
              <br />
              <div>You don't have any Addressess saved</div>
            </>
          )}
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
