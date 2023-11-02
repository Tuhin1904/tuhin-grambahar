// import React from 'react';
// import classes from './Login.module.css';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// const Login = () => {
//   const inputStyle = {
//     marginBottom:"10px",

//   }
//   return (
//     <div className={classes.mainContainer}>
//         <div className={classes.container}>

//         <TextField
//           InputProps={{
//             className:classes.input
//           }}

//           id="filled-search"
//           label="MOBILE NUMBER"
//           type="search"
//           fullWidth
//         />
//         <br />
//         <TextField
//         sx={inputStyle}
//         className={classes.input}
//           id="filled-password-input"
//           label="Password"
//           type="password"
//           autoComplete="current-password"
//         />
//         </div>
//     </div>
//   )
// }

// export default Login

{
  /* <p>Already have an account? <a href="/login">Log in</a></p> */
}
{
  /* <input type="text" placeholder="Full Name" /> */
}
{
  /* <input type="password" placeholder="Password" /> */
}

import React, { useState } from 'react';
import './SignUp.css'; // Import your CSS file
import { sendLoginOtp, verifyLoginOtp } from './../../services/auth.service';

function Login() {
  const [otpSent, setOtpSent] = useState(false);
  const [pnumber, setPnumber] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState(null);

  const handleSendOtp = async () => {
    //send otp here API req

    try {
      const response = await sendLoginOtp(pnumber);
      console.log('📢[Login.jsx:61]: response: ', response);
      if (response?.message) {
        setOtpSent(true);
        console.log('send otp button');
      }
    } catch (error) {
      console.error('Error! OTP not send:', error);
      setError(error.message);
    }
  };

  const verifyOTP = async () => {
    try {
      const response = await verifyLoginOtp(pnumber, otp);
      localStorage.setItem('user', response);
    } catch (error) {
      console.log('📢[Login.jsx:80]: error: ', error?.response?.data?.error);
    }
    // if (otp === expectedOTP) {
    //   console.log('Login Successful');
    // } else {
    //   setError('Invalid OTP. Try again');
    // }
  };

  return (
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={(e) => e.preventDefault()}>
        <h1>Sign In/Up</h1>

        <label htmlFor="email">Phone Number:</label>
        <input
          type="phone"
          id="phonenum"
          placeholder="Phone Number"
          value={pnumber}
          onChange={(e) => setPnumber(e.target.value)}
          disabled={otpSent}
          autoFocus
        />

        {otpSent ? (
          <>
            <label htmlFor="otp">Enter your OTP here:</label>
            <input id="otp" placeholder="OTP" value={otp} type="Password" onChange={(e) => setOtp(e.target.value)} />
            <button onClick={verifyOTP}>Verify</button>
          </>
        ) : (
          <button onClick={handleSendOtp}>Send OTP</button>
        )}
      </form>
    </div>
  );
}

export default Login;
