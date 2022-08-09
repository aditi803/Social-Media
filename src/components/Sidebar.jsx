import React, { useState } from 'react'
import { Box, List, ListItem, ListItemText, ListItemButton, ListItemIcon, Switch } from "@mui/material"
import { Home, ListAlt, People, Storefront, EmojiPeople, Settings, AssignmentInd, ModeNight } from '@mui/icons-material';


const Sidebar = ({mode, setMode}) => {

  const [flag, setFlag] = useState(false)
  const changeHandler = () => {
    setFlag(!flag)
    if(!flag){
      setMode("dark")
    }
    else{
      setMode("light")
    }
    // console.log(flag,"Falg change ");
  }
  
  // console.log(flag,"Ohvgcxgfzdx");
  return (
    <Box
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#pages'>
              <ListItemIcon>
                <ListAlt />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#pages'>
              <ListItemIcon>
                <People />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#marketplace'>
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#friends'>
              <ListItemIcon>
                <EmojiPeople />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#settings'>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#profile'>
              <ListItemIcon>
                <AssignmentInd />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#profile'>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onChange={changeHandler}/>
            </ListItemButton>
          </ListItem>

        </List>
      </Box>

    </Box>
  )
}

export default Sidebar