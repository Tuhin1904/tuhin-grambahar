import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
// import classes from './AddNewAddress.module.css';
import { addMyAddress } from '../../../services/account.services';

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
      <div
        onClick={toggleForm}
        className="px-4 py-2 text-sm font-medium text-center text-red-500 duration-300 ease-in-out border-2 border-red-300 rounded-full cursor-pointer "
      >
        {isFormVisibile ? 'Hide' : 'Add New Address +'}
      </div>
      <br />
      {isFormVisibile && (
        <>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <TextField label="Enter your Name" name="name" variant="outlined" />

            <TextField label="Address Line 1" name="addressLine1" variant="outlined" />

            <TextField label="Phone Number" name="phoneNumber" variant="outlined" />

            <TextField name="country" variant="outlined" value="India" />

            <TextField label="State" name="state" variant="outlined" />

            <TextField label="District" name="district" variant="outlined" />

            <TextField label="Pin-code" name="pin" variant="outlined" />

            <TextField label="Landmark" name="landmark" variant="outlined" />

            <button style={{ minHeight: '40px', backgroundColor: 'rgb(45, 110, 255)', color: 'white' }}>Submit</button>
          </form>
        </>
      )}
    </>
  );
}

export default AddNewAddress;
