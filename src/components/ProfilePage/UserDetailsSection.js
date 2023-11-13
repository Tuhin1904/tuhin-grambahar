import TextField from '@mui/material/TextField';
import { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';

function UserDetailsSection({ classes, userDetails }) {
  const [viewMode, setViewMode] = useState(true);
  const [userDetailsState, setUserDetails] = useState(userDetails);

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
        className="flex flex-col items-center"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <TextField
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
        />

        <div className="flex justify-end">
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
        </div>
      </form>
    </>
  );
}

export default UserDetailsSection;
