import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { FaCaretSquareDown, FaCaretSquareUp } from 'react-icons/fa';

import {
  getMyAddresses,
  addMyAddress,
  updateMyAddress,
  deleteMyAddress,
  updateMyPersonalInfo,
  getMyProfile,
} from '../../services/account.services';
import AddNewAddress from '../AddNewAddress/AddNewAddress';
import UserDetailsSection from '../../components//ProfilePage/UserDetailsSection';
import UserOrderSection from '../../components//ProfilePage/UserOrderSection';

function Profile() {
  // const currencies = [
  //   {
  //     value: 'Male',
  //     label: 'Male',
  //   },
  //   {
  //     value: 'Female',
  //     label: 'Female',
  //   },
  //   {
  //     value: 'Rather not say',
  //     label: 'Rather not say',
  //   },
  // ];

  const [disabledbutton, setDisabledButton] = useState(true);

  //  to enable editing of adresses
  const [disabledbutton2, setDisabledButton2] = useState([]);

  const [userDetails, setUserDetails] = useState({});
  const [addressResponse, setAddressResponse] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [editableFields, setEditableFields] = useState({
    name: '',
    addressLine1: '',
    district: '',
    state: '',
    pin: '',
    landmark: '',
  });

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
        console.log('catch prt:', error.response);
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
        // addressLine2: formData.get('addressLine2'),
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
    <div className="container flex flex-col px-4 pt-10 mx-auto" style={{ alignItems: 'center' }}>
      <h1 className="flex justify-center my-4 text-4xl font-bold text-primary">My Profile</h1>

      <UserDetailsSection userDetails={userDetails} />

      <UserOrderSection />

      <div>
        <label htmlFor="">
          To Add New Address click the button <span style={{ color: 'red' }}>'Add New Address+'</span>
        </label>
        <br />
        {addressResponse.length > 0 ? (
          <>
            <label
              style={{
                fontWeight: 'bold',
                fontSize: 'larger',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
              }}
              onClick={() => setIsFormVisible((prev) => !prev)}
            >
              Your Current Addresses are:
              {isFormVisible ? <FaCaretSquareUp /> : <FaCaretSquareDown />}
            </label>

            {isFormVisible &&
              addressResponse.map((each, i) => (
                <form action="" key={i} className="flex flex-col mt-4" onSubmit={() => handleUpdateAddress(e)}>
                  <TextField
                    label="Enter your Name"
                    variant="outlined"
                    value={editableFields.name || each.name}
                    onChange={(e) => setEditableFields({ ...editableFields, name: e.target.value })}
                    disabled={!disabledbutton2[i]}
                    className="mb-4"
                  />
                  <TextField
                    label="Address Line 1"
                    variant="outlined"
                    value={editableFields.addressLine1 || each.addressLine1}
                    onChange={(e) => setEditableFields({ ...editableFields, addressLine1: e.target.value })}
                    disabled={!disabledbutton2[i]}
                    className="mb-4"
                  />

                  <TextField
                    label="District"
                    variant="outlined"
                    value={editableFields.district || each.district}
                    onChange={(e) => setEditableFields({ ...editableFields, district: e.target.value })}
                    disabled={!disabledbutton2[i]}
                    className="mb-4"
                  />

                  <TextField
                    label="State"
                    variant="outlined"
                    value={editableFields.state || each.state}
                    onChange={(e) => setEditableFields({ ...editableFields, state: e.target.value })}
                    disabled={!disabledbutton2[i]}
                    className="mb-4"
                  />

                  <TextField label="Country" variant="outlined" value="India" disabled={true} className="mb-4" />

                  <TextField
                    label="Pin-code"
                    variant="outlined"
                    value={editableFields.pin || each.pin}
                    onChange={(e) => setEditableFields({ ...editableFields, pin: e.target.value })}
                    className="mb-4"
                  />

                  <TextField
                    label="Landmark"
                    variant="outlined"
                    value={editableFields.landmark || each.landmark}
                    onChange={(e) => setEditableFields({ ...editableFields, landmark: e.target.value })}
                    className="mb-4"
                  />

                  <div style={{ display: 'flex', marginTop: '1rem' }}>
                    {disabledbutton2[i] ? (
                      <div
                        className="inline-block px-6 py-2 font-medium text-center text-white duration-300 ease-in-out border-2 rounded-full cursor-pointer border-primary bg-primary"
                        onClick={() => {
                          toggleButtons2(i);
                        }}
                      >
                        Save Details
                      </div>
                    ) : (
                      <div
                        className="inline-block px-6 py-2 font-medium text-center text-white duration-300 ease-in-out border-2 rounded-full cursor-pointer border-primary bg-primary"
                        onClick={() => toggleButtons2(i)}
                      >
                        Edit Details
                      </div>
                    )}
                    <div
                      className="inline-block px-6 py-2 ml-4 font-medium text-center text-red-500 duration-300 ease-in-out border-2 rounded-full cursor-pointer"
                      onClick={() => handleDelete(each.id)}
                      style={{ border: '2px solid' }}
                    >
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
      <button
        style={{
          border: '2px solid lightgrey',
          borderRadius: '2rem',
          padding: '0.4rem 0.7rem',
          fontWeight: 'bold',
          color: 'GrayText',
          marginBottom: '1rem',
          width: '350px',
        }}
        onClick={deleteKey}
      >
        Log out
      </button>
    </div>
  );
}

export default Profile;
