import TextField from '@mui/material/TextField';
import { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import { updateMyPersonalInfo } from '@/services/account.services';
import { FaPencilAlt } from "react-icons/fa";

function UserDetailsSection({ classes, userDetails }) {
  const [userDetailsState, setUserDetails] = useState(userDetails);
  const [editMode, setEditMode] = useState(false);

  const toggleEditOptions = () => {
    setEditMode((value) => !value);
  };

  const onUpdateMyDetailsHandler = async (event) => {
    event.preventDefault();
  };
  const updateMyNameMail = () => {
    console.log('update');
  };
  return (
    <>
      <p className="my-4 text-lg font-bold">My Details</p>
      
      <form
        action=""
        onSubmit={onUpdateMyDetailsHandler}
        className="flex bg-slate-100 p-4 w-100 items-center rounded-lg justify-between"
        style={{alignItems: 'flex-start',textAlign:'left' }}
      >
        <div>
         <div className="mb-4" style={{ display: 'flex', alignItems: 'center' }}>
          <strong className='w-18 text-primary'>Name:</strong> {editMode ? (
            <TextField
              variant="outlined"
              placeholder={userDetails.name}
              onChange={(e) => setUserDetails({ ...userDetailsState, name: e.target.value })}
            />
          ) : (
            userDetails.name
          )}
        </div>
         <div className="mb-4" style={{ display: 'flex', alignItems: 'center' }}>
          <strong className='w-18'>Phone:</strong> {editMode ? (
            <TextField
              variant="outlined"
              value={userDetails.phone_number}
              onChange={(e) => setUserDetails({ ...userDetailsState, phone: e.target.value })}
              disabled={true}
            />
          ) : (
            userDetails.phone_number
          )}
        </div>
         <div className="mb-4 " style={{ display: 'flex', alignItems: 'center' }}>
          <strong className='w-18 text-primary'>Email:</strong> {editMode ? (
            <TextField
              variant="outlined"
              placeholder={userDetails.email}
              onChange={(e) => setUserDetails({ ...userDetailsState, email: e.target.value })}
            />
          ) : (
            userDetails.email
          )}
        </div>
        </div>
        {/* <TextField
          label="Name"
          id="user-name"
          placeholder="Enter your name"
          variant="outlined"
          disabled={viewMode}
          className="mb-4"
          value={userDetailsState.name}
          InputLabelProps={{
            shrink: !!userDetails.name,
          }}
          onChange={(e) => setUserDetails({ ...userDetailsState, name: e.target.value })}
        />

        <TextField
          // label="Phone Number"
          type="text"
          placeholder="Enter your phone number"
          variant="outlined"
          value={userDetails.phone_number}
          disabled
          className="mb-4"
        />
*/}
    
        <div className="flex items-center">
          {editMode ? (
            <button onClick={toggleEditOptions} className='bg-primary text-white py-1 px-2 rounded-xl' type="submit" color="primary">
              Save
            </button>
          ) : (
            <button onClick={toggleEditOptions} color="primary">
              <FaPencilAlt  />
            </button>
          )}
        </div>
      </form>
    </>
  );
}

export default UserDetailsSection;
