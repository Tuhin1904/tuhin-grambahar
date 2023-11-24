// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem'
// import { FaCheckCircle } from 'react-icons/fa';

// function ContactUs() {
//   const [showRightIcon, setShowRightIcon] = useState(false);
//   const [selectedTime,setSelectedTime]=useState('');

//   const inputStyle = {
//     borderRadius: '25px',
//     marginBottom: '10px',
//     marginRight: '20px',
//   };
//   const timeRanges=[
//     '10am-11am',
//     '11am-12pm',
//     '12pm-1pm',
//     '1pm-2pm',
//   ]
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     setShowRightIcon(true);
//     setTimeout((handler) => {
//       setShowRightIcon(false);
//     }, 3000);
//   };
//   return (
//     <div className="container">
//       <h3 className="mb-12 text-4xl font-bold text-center text-primary">Contact Us</h3>
//       <div className="flex justify-center py-4 leftRight">
//         <div className="flex-1 px-4 leftContainer">
//           <form action="" onSubmit={handleFormSubmit} className="flex flex-col px-6 ">
//             <div style={{ display: 'flex', width: '100%' }}>
//               <TextField InputProps={{ style: inputStyle }} label="Enter your Name" variant="outlined" />
//               <TextField InputProps={{ style: inputStyle }} label="Email id" type="email" variant="outlined" />
//             </div>
//             <TextField InputProps={{ style: inputStyle }} label="Phone" type="phone" variant="outlined" />

//             <TextField
//   InputProps={{ style: inputStyle }}
//   label="Schedule Your Call"
//   type="schedule"
//   variant="outlined"
//   select
//   value={selectedTime}
//   onChange={(e) => setSelectedTime(e.target.value)}
// >
//   {timeRanges.map((time) => (
//     <MenuItem key={time} value={time}>
//       {time}
//     </MenuItem>
//   ))}
// </TextField>


//             <TextField
//               InputProps={{ style: { ...inputStyle, height: '6rem' } }}
//               label="Write Your Query or Suggestion"
//               type="query"
//               variant="outlined"
//             />
//             <button
//               style={{
//                 minHeight: '40px',
//                 backgroundColor: 'rgb(45, 110, 255)',
//                 color: 'white',
//                 marginBottom: '1rem',
//                 width: '25%',
//                 borderRadius: '2rem',
//               }}
//               type="submit"
//             >
//               Proceed
//             </button>
//           </form>
//           {showRightIcon && (
//             <div className="flex items-center mt-2">
//               <FaCheckCircle className="mr-2 text-green-500" />
//               <span className="text-green-500">Form submitted successfully!</span>
//             </div>
//           )}
//         </div>
//         <div className="flex-1 rightContainer">
//           <p className="text-xl font-medium">Reach Us Via</p>
//           <ul className="mt-5 text-lg">
//             <li className="font-medium">
//               <span>Email:</span>
//               <a className="ml-1.5 text-primary" href="mailto:grambahar.com@gmail.com">
//                 grambahar.com@gmail.com
//               </a>
//             </li>
//             <li className="mt-2 font-medium">
//               <span>Phone:</span>
//               <a className="ml-1.5 text-primary" href="tel:+919382147143">
//                 +919382147143
//               </a>
//               <span className="mx-2">/</span>
//               <a className="text-primary" href="tel:+919883214823">
//                 +919883214823
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContactUs;
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { FaCheckCircle } from 'react-icons/fa';

function ContactUs() {
  const [showRightIcon, setShowRightIcon] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');

  const inputStyle = {
    borderRadius: '25px',
    marginBottom: '10px',
    marginRight: '20px',
  };
  const timeRanges = ['10am-11am', '11am-12pm', '12pm-1pm', '1pm-2pm'];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowRightIcon(true);
    setTimeout(() => {
      setShowRightIcon(false);
    }, 3000);
  };

  return (
    <div className="container mx-auto">
      <h3 className="mb-12 text-4xl font-bold text-center text-primary">Contact Us</h3>
      <div className="flex flex-col lg:flex-row justify-center py-4 lg:space-x-12">
        <div className="flex-1 px-4 lg:w-1/2">
          <form onSubmit={handleFormSubmit} className="flex flex-col px-6">
            <div className="mb-4 lg:flex">
            <span className="lg:w-1/2 lg:mr-2">
              <TextField
                InputProps={{ style: inputStyle }}
                label="Enter your Name"
                variant="outlined"
                className="lg:mr-4"
              /></span>
              <span className="lg:w-1/2 lg:ml-2">
              <TextField
                InputProps={{ style: inputStyle }}
                label="Email id"
                type="email"
                variant="outlined"
                className="lg:ml-4"
              /></span>
            </div>
            <TextField
              InputProps={{ style: inputStyle }}
              label="Phone"
              type="phone"
              variant="outlined"
              className="mb-4"
            />
            <TextField
              InputProps={{ style: inputStyle }}
              label="Schedule Your Call"
              type="schedule"
              variant="outlined"
              select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="mb-4"
            >
              {timeRanges.map((time) => (
                <MenuItem key={time} value={time}>
                  {time}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              InputProps={{ style: { ...inputStyle, height: '6rem' } }}
              label="Write Your Query or Suggestion"
              type="query"
              variant="outlined"
              className="mb-4"
            />
            <button
              className="px-6 py-2 text-sm mb-8 font-medium bg-primary text-white rounded-full lg:w-1/4"
              type="submit"
            >
              Proceed
            </button>
          </form>
          {showRightIcon && (
            <div className="flex items-center mt-2">
              <FaCheckCircle className="mr-2 text-green-500" />
              <span className="text-green-500">Form submitted successfully!</span>
            </div>
          )}
        </div>
        <div className="flex-1 lg:w-1/2">
          <p className="text-xl font-medium">Reach Us Via</p>
          <ul className="mt-5 text-lg">
            <li className="mb-2 font-medium">
              <span>Email:</span>
              <a className="ml-1.5 text-primary" href="mailto:grambahar.com@gmail.com">
                grambahar.com@gmail.com
              </a>
            </li>
            <li className="font-medium">
              <span>Phone:</span>
              <a className="ml-1.5 text-primary" href="tel:+919382147143">
                +919382147143
              </a>
              <span className="mx-2">/</span>
              <a className="text-primary" href="tel:+919883214823">
                +919883214823
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
