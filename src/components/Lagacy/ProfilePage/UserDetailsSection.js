import TextField from '@mui/material/TextField';
import { useState } from 'react';

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
      <form action="" onSubmit={onUpdateMyDetailsHandler}>
        <div className="mb-4">
          <TextField
            className={classes.textField}
            label="Name"
            id="user-name"
            placeholder="Enter your name"
            variant="outlined"
            disabled={viewMode}
          />
        </div>

        <div className="mb-4">
          <TextField
            className={classes.textField}
            label="Phone Number"
            type="text"
            placeholder="Enter your phone number"
            variant="outlined"
            value={userDetails.phone_number}
            disabled
          />
        </div>
        <div className="mb-4">
          <TextField
            className={classes.textField}
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
