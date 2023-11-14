import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { addMyAddress } from '../../services/account.services';
import { FaCheckCircle } from 'react-icons/fa';

function AddNewAddress() {
  const [isFormVisibile, setFormVisible] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [showRightIcon, setShowRightIcon] = useState(false);

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
    setShowRightIcon(true);
    setTimeout((handler) => {
      setShowRightIcon(false);
    }, 3000);
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
          <form onSubmit={handleSubmit} className="container flex flex-col">
            <TextField label="Enter your Name" name="name" variant="outlined" className="mb-4" />

            <TextField label="Address Line 1" name="addressLine1" variant="outlined" className="mb-4" />

            <TextField label="Phone Number" name="phoneNumber" variant="outlined" className="mb-4" />

            <TextField name="country" variant="outlined" value="India" className="mb-4" />

            <TextField label="State" name="state" variant="outlined" className="mb-4" />

            <TextField label="District" name="district" variant="outlined" className="mb-4" />

            <TextField label="Pin-code" name="pin" variant="outlined" className="mb-4" />

            <TextField label="Landmark" name="landmark" variant="outlined" className="mb-4" />

            <button
              style={{ minHeight: '40px', backgroundColor: 'rgb(45, 110, 255)', color: 'white', marginBottom: '1rem' }}
            >
              Add
            </button>
          </form>
          {showRightIcon && (
            <div className="flex items-center mt-2">
              <FaCheckCircle className="mr-2 text-green-500" />
              <span className="text-green-500">Form submitted successfully!</span>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default AddNewAddress;
