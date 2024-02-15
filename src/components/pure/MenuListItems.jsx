import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Settings, AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { getByText } from '@testing-library/react';

const getIcon = (icon) => {
    switch (icon) {
        case 'Home':
            return (<Home />)
        case 'Task':
            return (<Home />)
        case 'Setting':
            return (<Settings />)
        default:
            return (<Home />)
    }
}


const MenuListItems = ({list}) => {

    const navigate = useNavigate()

   const navigatePath = (path) =>{
        navigate(path)
   }
   return(
    <List>
        {list.map(({text,path,icon}, index)=>(
            <ListItem key={index} button onClick={()=> navigatePath(path)}>
                <ListItemIcon>
                    {getIcon(icon)}
                </ListItemIcon>
                <ListItemText primary={text}/>
            </ListItem>
        ))}

    </List>
   )
}

export default MenuListItems;

