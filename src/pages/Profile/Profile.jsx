import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import classes from './Profile.module.css';
import {
  getMyAddresses,
  addMyAddress,
  updateMyAddress,
  deleteMyAddress,
  updateMyPersonalInfo,
  getMyProfile,
} from '../../services/account.services';
import AddNewAddress from '../../components/AddNewAddress/AddNewAddress';
import UserDetailsSection from '../../components/ProfilePage/UserDetailsSection';
import UserOrderSection from '../../components/ProfilePage/UserOrderSection';

function Profile() {
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

  //  to enable editing of adresses
  const [disabledbutton2, setDisabledButton2] = useState([]);

  const [userDetails, setUserDetails] = useState({});
  const [addressResponse, setAddressResponse] = useState([]);

  const toggleButtons = () => {
    setDisabledButton(!disabledbutton);
  };

  // toggle editing adresses
  const toggleButtons2 = (index) => {
    const newEditBoxes = [...disabledbutton2];
    newEditBoxes[index] = !newEditBoxes[index];
    setDisabledButton2(newEditBoxes);
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
        setUserDetails(response);
        setAddressResponse(response2);
      } catch (error) {
        console.log('catch prt:', error.response.data);
      }
    };
    fetchUserData();
  }, []);

  const handleDelete = async (id) => {
    const response = await deleteMyAddress(id);
    // console.log('delete response', response);
    // setAddressResponse((()))
  };

  const handleUpdateAddress = async (e) => {
    console.log('update event', e);
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const res = await updateMyAddress({
        id,
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
      console.log(res);
    } catch (error) {
      console.log('Unable to Update Details', error);
    }
  };

  return (
    <div className="container px-4 pt-10 mx-auto" style={{ flexDirection: 'column' }}>
      <h1 className="mb-5 text-xl font-bold">My Account</h1>

      <UserDetailsSection classes={classes} userDetails={userDetails} />

      <UserOrderSection />

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
              <form action="" key={i} style={{ marginTop: '1rem' }} onSubmit={() => handleUpdateAddress(e)}>
                <TextField
                  className={classes.textField2}
                  label="Enter your Name"
                  variant="outlined"
                  value={each.name}
                  disabled={!disabledbutton2[i]}
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
                  disabled={!disabledbutton2[i]}
                />
                <TextField
                  className={classes.textField2}
                  label="Address Line 2"
                  variant="outlined"
                  value={each.address_line_2}
                  disabled={!disabledbutton2[i]}
                />
                <br />

                <TextField
                  className={classes.textField}
                  label="District"
                  variant="outlined"
                  value={each.district}
                  disabled={!disabledbutton2[i]}
                />

                <TextField
                  className={classes.textField}
                  label="State"
                  variant="outlined"
                  value={each.state}
                  disabled={!disabledbutton2[i]}
                />

                <TextField
                  className={classes.textField}
                  label="Country"
                  variant="outlined"
                  value={each.country}
                  disabled
                />

                <TextField
                  className={classes.textField}
                  label="Pin-code"
                  variant="outlined"
                  value={each.pin}
                  disabled={!disabledbutton2[i]}
                />

                <TextField
                  className={classes.textField}
                  label="Landmark"
                  variant="outlined"
                  value={each.landmark}
                  disabled={!disabledbutton2[i]}
                />
                <div style={{ display: 'flex', marginTop: '1rem' }}>
                  {disabledbutton2[i] ? (
                    <div
                      className={classes.button}
                      onClick={() => {
                        toggleButtons2(i);
                      }}
                    >
                      Save Details
                    </div>
                  ) : (
                    <div className={classes.button2} onClick={() => toggleButtons2(i)}>
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
  );
}

export default Profile;
