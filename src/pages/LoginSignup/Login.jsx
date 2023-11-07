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
import { useNavigate } from 'react-router-dom';

function Login() {
  const [otpSent, setOtpSent] = useState(false);
  const [pNumber, setPNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSendOtp = async () => {
    //send otp here API req

    try {
      const response = await sendLoginOtp(pNumber);
      console.log('📢[Login.jsx:61]: response: ', response);
      if (response?.message) {
        setOtpSent(true);
        console.log('send otp button response');
      }
    } catch (error) {
      console.error('Error! OTP not send:', error);
      setError(error.message);
    }
  };

  const verifyOTP = async () => {
    try {
      const response = await verifyLoginOtp(pNumber, otp);
      console.log('verify otp response', response);
      localStorage.setItem('user', JSON.stringify(response));
      localStorage.setItem('isLoggedIn', 'true');

      // console.log('before');
      navigate('/');
      // console.log('after');
    } catch (error) {
      console.log('inside catch');
      console.log('📢[Login.jsx:80]: error: ', error?.response?.data?.error);
      setError(error.message);
    }
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
          value={pNumber}
          onChange={(e) => setPNumber(e.target.value)}
          disabled={otpSent}
          autoFocus
        />

        {otpSent ? (
          <>
            <label htmlFor="otp">Enter your OTP here:</label>
            <input id="otp" placeholder="OTP" value={otp} type="Password" onChange={(e) => setOtp(e.target.value)} />
            <button onClick={verifyOTP}>Verify</button>
            {error && <p style={{ color: 'red' }}> Wrong OTP Entered!</p>}
          </>
        ) : (
          <button onClick={handleSendOtp}>Send OTP</button>
        )}
      </form>
    </div>
  );
}

export default Login;
