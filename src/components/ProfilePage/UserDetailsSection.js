import TextField from '@mui/material/TextField';
import { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import { updateMyPersonalInfo } from '@/services/account.services';
import { FaPencilAlt } from "react-icons/fa";

function UserDetailsSection({ classes, userDetails }) {
  const [viewMode, setViewMode] = useState(true);
  const [userDetailsState, setUserDetails] = useState(userDetails);
  const [editMode, setEditMode] = useState(false);

  const toggleEditOptions = () => {
    setViewMode((value) => !value);
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
        className="flex flex-col items-center w-auto"
        style={{ display: 'flex', flexDirection: 'column',textAlign:'left' }}
      >
         <div className="mb-4">
          <strong>Name:</strong> {editMode ? (
            <TextField
              variant="outlined"
              value={userDetailsState.name}
              onChange={(e) => setUserDetails({ ...userDetailsState, name: e.target.value })}
            />
          ) : (
            userDetailsState.name
          )}
        </div>
        <div className="flex items-center">
          {editMode ? (
            <button onClick={toggleEditOptions} type="submit" color="primary">
              Save
            </button>
          ) : (
            <button onClick={toggleEditOptions} color="primary">
              <FaPencilAlt  />
            </button>
          )}
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

        <TextField
          label="Email"
          id="user-email"
          placeholder="Enter your email address"
          type="email"
          variant="outlined"
          disabled={viewMode}
          className="mb-4"
          value={userDetails.email}
          InputLabelProps={{
            shrink: !!userDetails.name, // Shrink label if there's a value
          }}
          onChange={(e) => setUserDetails({ ...userDetailsState, email: e.target.value })}
        /> */}

        {/* <div className="flex justify-end">
          {!viewMode ? (
            <button
              className="px-6 py-2 text-sm font-medium duration-300 ease-in-out border-2 rounded-full border-primary text-primary hover:bg-primary hover:text-white"
              type="submit"
              onClick={updateMyNameMail}
            >
              Save Details
            </button>
          ) : (
            <button
              type="button"
              className="px-6 py-2 text-sm font-medium duration-300 ease-in-out border-2 rounded-full border-primary text-primary hover:bg-primary hover:text-white"
              onClick={toggleEditOptions}
            >
              Edit My Details
            </button>
          )}
        </div> */}
      </form>
    </>
  );
}

export default UserDetailsSection;
