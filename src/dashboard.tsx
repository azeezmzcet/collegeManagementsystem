
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';



function Dashboard() {


   const navigate = useNavigate(); 
    const handleteacher=()=>{
        navigate('/create-teacher')
    }


    const [name, setName] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setName(event.target.value as string);
    };

    
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (
      _event: React.MouseEvent<HTMLDivElement, MouseEvent>,
      index: number,
    ) => {
      setSelectedIndex(index);
    };
  
    return (
        <>
   
        <div> 
             <h1>MountZion collge of engineering and technology</h1>  
              <div> Dashboard</div>

        
      <Box sx={{ maxWidth: 360, bgcolor: 'background.paper',width:{xs:'90%',sm:'70',md:'40%'},
        padding:{xs:'20px',md:'40px'}, boxShadow:'0px 4px 12px rgba(0,0,0,0.1)',
        borderRadius:'8px',
        backgroundColor:'#fff', }}>

        <List component="nav">
            {['B.SC', 'BBA','B.Com','B.tech','MBA'].map((course, index)=>(
                  <ListItemButton
                  key={course}
                selected={selectedIndex === index}
                onClick={(event) => handleListItemClick(event, index)} >
                     <ListItemText primary={course} />
                     </ListItemButton>
                    ))}
                    
                </List>
            </Box>
      </div>


      <div>
      <Box sx={{ maxWidth: 360, bgcolor: 'background.paper',width:{xs:'90%',sm:'70',md:'40%'},
        padding:{xs:'20px',md:'40px'}, boxShadow:'0px 4px 12px rgba(0,0,0,0.1)',
        borderRadius:'8px',
        backgroundColor:'#fff', }}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Teacher Lists</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={name}
          label="Teacher Lists"
          onChange={handleChange}
        >
          <MenuItem  value='Divya' >Divya</MenuItem>
          <MenuItem value='Bala' >Bala</MenuItem>
          <MenuItem value='James'>James</MenuItem>
          <MenuItem value='Pavithra'>Pavithra</MenuItem>
          <MenuItem value='john'>john</MenuItem>
          
        </Select>
      </FormControl>

      <Button onClick={handleteacher}>
        create teacher
      </Button>

      </Box>
  
      
      </div>

    




     </>
    );
  }
  

export default Dashboard