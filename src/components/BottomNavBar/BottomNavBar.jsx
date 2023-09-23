import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import ControlPointIcon from '@mui/icons-material/ControlPoint';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import Paper from '@mui/material/Paper';
import './BottomNavBar.css'
import { Rating, ThemeProvider, createTheme } from '@mui/material';
const theme  = createTheme({
    palette:{
        primary:{
            main:"#7ab35b"
        },
        secondary:{
            main:'#ffbb51'
        }
    }
})
export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);

  };

  console.log(value)
  return (
    <ThemeProvider theme={theme}>
    <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3} className={'bottom-nav'} >
    <BottomNavigation  value={value} onChange={handleChange}>
      {/* <BottomNavigationAction
        label="Rewards"
        value="Rewards"
        icon={<EmojiEventsOutlinedIcon color="primary"/>}
      /> */}
       <BottomNavigationAction
        label="Review"
        value="Review"
        icon={<StarsOutlinedIcon color="primary"/>}
        showLabel={true}
      />
       <BottomNavigationAction
        label="Home"
        value="Home"
        icon={<HomeOutlinedIcon color="primary"/>}
        showLabel={true}
      />
      {/* <BottomNavigationAction
        label="Add"
        value="Add"
        icon={<ControlPointIcon color="primary"/>}
      /> */}
      <BottomNavigationAction
        label="Cart"
        value="Cart"
        icon={<AddShoppingCartOutlinedIcon color="primary"/>}
        showLabel={true}
      />
      
    </BottomNavigation>
    </Paper>
    </ThemeProvider>
  );
}