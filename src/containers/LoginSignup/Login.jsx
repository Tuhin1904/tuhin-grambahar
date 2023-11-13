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

import React, { useState } from 'react';
// import './SignUp.css'; 
import { useRouter } from 'next/router';
import { sendLoginOtp, verifyLoginOtp } from '@/services/auth.service';

function Login() {
  const [otpSent, setOtpSent] = useState(false);
  const [pNumber, setPNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState(null);

  const router = useRouter();
  const handleSendOtp = async () => {
    // send otp here API req
      console.log("hi")
    try {
      const response = await sendLoginOtp(pNumber);
      console.log('📢[Login.jsx:61]: response: ', response);
      if (response?.message) {
        setOtpSent(true);
        console.log('send otp button response');
        console.log(error)
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
      router.replace('/');
      // console.log('after');
    } catch (error) {
      console.log('inside catch');
      console.log('📢[Login.jsx:80]: error: ', error?.response?.data?.error);
      setError(error.message);
    }
  };

  return (
    <>
    <h1 className="text-4xl font-bold flex justify-center text-primary my-4">Login/Sign Up</h1>
    <div className="sign-up-container max-w-xs mx-auto" style={{border:'1px solid #bfbfbf',padding:'1rem',marginBottom:'1rem',borderRadius:"1rem"}}>
      <form className="bg-white shadow-md rounded px-8 pt-5 pb-6 mb-4" onSubmit={(e) => e.preventDefault()} >
      <div class="mb-4">
        <label htmlFor="phonenum" className="block text-xl font-medium text-gray-700">Phone Number:</label>
        <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          type="phone"
          id="phonenum"
          placeholder="Enter Your Phone Number"
          value={pNumber}
          onChange={(e) => setPNumber(e.target.value)}
          disabled={otpSent}
          autoFocus
        />
      </div>

        {otpSent ? (
          <>
            <label htmlFor="otp">Enter your OTP here:</label>
            <input  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline" id="otp" placeholder="OTP" value={otp} type="Password" onChange={(e) => setOtp(e.target.value)} />
            <button onClick={verifyOTP} className='inline-block px-6 py-2 font-medium text-center text-white duration-300 ease-in-out border-2 rounded-full hover:bg-white hover:text-primary border-primary bg-primary'>Verify</button>
            {error!=null && <p style={{ color: 'red' }}> Wrong OTP Entered!</p>}
          </>
        ) : (
          <button onClick={handleSendOtp} className='inline-block px-6 py-2 font-medium text-center text-white duration-300 ease-in-out border-2 rounded-full hover:bg-white hover:text-primary border-primary bg-primary'>Send OTP</button>
        )}
      </form>
    </div>
</>
  );
}

export default Login;
