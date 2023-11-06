import React, { useState } from 'react';
import classes from './AddNewAddress.module.css';
import TextField from '@mui/material/TextField';
import { addMyAddress } from '../../services/account.services';

function AddNewAddress() {
  const [isFormVisibile, setFormVisible] = useState(false);
  const [addresses, setAddresses] = useState([]);

  const toggleForm = () => {
    setFormVisible(!isFormVisibile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('form event', e);
    try {
      const formData = new FormData(e.target);
      const response = await addMyAddress({
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
      console.log('add response', response);
      setAddresses([...addresses, response]);

      e.target.reset();
    } catch (error) {
      console.log('Unable to Add new Address', error);
    }
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.button2} onClick={toggleForm}>
          {isFormVisibile ? 'Hide' : 'Add New Address +'}
        </div>
        <br />
        {isFormVisibile && (
          <>
            <form onSubmit={handleSubmit}>
              <TextField className={classes.textField} label="Enter your Name" name="name" variant="outlined" />

              <TextField className={classes.textField} label="Address Line 1" name="addressLine1" variant="outlined" />

              <TextField className={classes.textField} label="Address Line 2" name="addressLine2" variant="outlined" />
              <br />

              <br />

              <TextField className={classes.textField} label="Phone Number" name="phoneNumber" variant="outlined" />

              <TextField className={classes.textField} label="Country" name="country" variant="outlined" />

              <TextField className={classes.textField} label="State" name="state" variant="outlined" />

              <TextField className={classes.textField} label="District" name="district" variant="outlined" />

              <TextField className={classes.textField} label="Pin-code" name="pin" variant="outlined" />

              <TextField className={classes.textField} label="Landmark" name="landmark" variant="outlined" />

              <button
                className={classes.button}
                style={{ minHeight: '40px', backgroundColor: 'rgb(45, 110, 255)', color: 'white' }}
              >
                Submit
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
}

export default AddNewAddress;
