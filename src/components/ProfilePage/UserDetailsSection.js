import TextField from '@mui/material/TextField';
import { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';

function UserDetailsSection({ classes, userDetails }) {
  const [viewMode, setViewMode] = useState(true);

  const toggleEditOptions = () => {
    setViewMode((value) => !value);
  };

  const onUpdateMyDetailsHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <>
      <p className="mb-4 text-lg font-bold">My Details</p>
      <form action="" onSubmit={onUpdateMyDetailsHandler} style={{ maxWidth: '80%', margin: 'auto' }}>
        <div className="mb-4">
          <TextField
            
            label="Name"
            id="user-name"
            placeholder="Enter your name"
            variant="outlined"
            disabled={viewMode}
            className="w-full"
          />
        </div>

        <div className="mb-4">
         
          <TextField
            
            // label="Phone Number"
            type="text"
            placeholder="Enter your phone number"
            variant="outlined"
            value={userDetails.phone_number}
            disabled
            style={{width:'100%'}}
          />
        </div>
        <div className="mb-4">
          <TextField
            
            label="Email"
            id="user-email"
            placeholder="Enter your email address"
            type="email"
            variant="outlined"
            disabled={viewMode}
          />
        </div>

        <div className="flex justify-end">
          {!viewMode ? (
            <button
              className="px-6 py-2 text-sm font-medium duration-300 ease-in-out border-2 rounded-full border-primary text-primary hover:bg-primary hover:text-white"
              type="submit"
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
