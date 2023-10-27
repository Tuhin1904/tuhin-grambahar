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
import React from 'react';
import './SignUp.css'; // Import your CSS file

function Login() {
  return (
    <div className="sign-up-container">
      <form className="sign-up-form">
        <h1>Sign Up</h1>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
        <p>Already have an account? <a href="/login">Log in</a></p>
      </form>
    </div>
  );
}

export default Login;