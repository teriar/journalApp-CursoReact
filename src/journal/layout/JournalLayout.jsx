import { Toolbar } from "@mui/material";
import { Box } from "@mui/system"
import { NavBar, SideBar } from "../components";

const drawerWidht = 280;

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display: 'flex'}}>
      
      {/* navbar */}
      <NavBar drawerWidht={drawerWidht}/>

      {/* sidebar */}
      <SideBar drawerWidht={drawerWidht}/>
       <Box 
       component='main'
       sx={{flexGrow:1, p:3}}>
         
         {/* toolbar */}
         <Toolbar/>
         {children}
       </Box>

    </Box>
  )
}
