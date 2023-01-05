
import { AddOutlined } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"


export const JournalPage = () => {
  return (
    <JournalLayout>
     
    {/* <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati autem ratione nesciunt commodi sit animi. Odio, dicta asperiores! Dicta, quaerat eligendi. Commodi beatae recusandae libero, consectetur molestiae enim ipsam sapiente?</Typography> */}
     <NothingSelectedView/>
     {/* <NoteView/> */}


     <IconButton
     size="large"
     sx={{
      color: 'white',
      backgroundColor: 'error.main',
      ':hover':{backgroundColor: 'error.main' , opacity:0.9},
      position: 'fixed',
      right:50,
      bottom:50
     }}>
      <AddOutlined sx={{ fontSize:30}}/>
     </IconButton>

    </JournalLayout>
   
    
  )
}
