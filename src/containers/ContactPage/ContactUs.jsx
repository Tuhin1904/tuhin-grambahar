import React from 'react';
import classes from './ContactUs.modules.css';
import TextField from '@mui/material/TextField';

function ContactUs() {
  const inputStyle = {
    borderRadius: '25px',
    marginBottom: '10px',
    marginRight:'20px'
  };
  return (
    <>
    <div className={classes.container} >
    <div className={classes.leftContainer}>
    <h3>Contact Us</h3>
        <form action="">
        <div className={classes.row}>
          <TextField
            InputProps={{ style: inputStyle }}
            className={classes.textField}
            label="Enter your Name"
            variant="outlined"
            
          />
          <TextField
          InputProps={{ style: inputStyle }}
            className={classes.textField}
            label="Email id"
            type="email"
            variant="outlined"
          
          />
          </div>
           <br />
           <div className={classes.row}>
          <TextField
          InputProps={{ style: inputStyle }}
            className={classes.textField}
            label="Phone"
            type="phone"
            variant="outlined"
            value=""
          
          /></div>
           <div className={classes.row}>
          <TextField
          InputProps={{ style: inputStyle }}
            className={classes.textField}
            label="Schedule Your Call"
            type="schedule"
            variant="outlined"
            value=""
          
          /></div>
           <div className={classes.row}>
          <TextField
          InputProps={{ style: inputStyle }}
            className={classes.textField}
            label="Schedule Your Call"
            type="schedule"
            variant="outlined"
            value=""         
          /></div>
        </form>
        </div>
        <div className={classes.rightContainer}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ab corrupti aut expedita reiciendis consequatur suscipit culpa, odio doloribus quisquam dicta tenetur sequi. Odio, consequatur totam rem corrupti dolor sapiente fugit eveniet quidem? Ducimus voluptatum accusantium unde inventore ratione! Voluptatum, necessitatibus. Illum facere, ex consequatur debitis tenetur officia qui esse voluptatum, impedit atque reprehenderit iste? Quia fugit quis commodi maxime, reiciendis harum facere! Rerum neque voluptatem hic, cupiditate commodi excepturi doloribus error assumenda placeat molestias ipsum corrupti, asperiores et quas inventore natus earum in eligendi repellendus harum, quia eveniet dolore. A recusandae fugiat ullam cupiditate. Est corporis nemo a consectetur!</p>
        </div>
    </div>
    </>
  );
}

export default ContactUs;
