import {useDispatch} from 'react-redux'
import { Google } from "@mui/icons-material"
import { Grid, TextField, Typography, Button, Link } from "@mui/material"
import {Link as RouterLink} from 'react-router-dom'
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"
import { chekingAuthentication, startGoogleSignIn } from '../../store/auth'

export const LoginPage = () => {
 
 const dispatch = useDispatch() 

const {email, password, onInputChange, formState} = useForm({
  email:'fernando@google.com',
  password:'123456'

})

const onSubmit = (event)=>{
  event.preventDefault();
  console.log({email, password})
  dispatch(chekingAuthentication());
}

 const onGoogleSignIn = ()=>{

  console.log('onGoogleSingIn')
  dispatch(startGoogleSignIn());
 }
 
 
 
 
  return (
  <AuthLayout title="Login">

<form onSubmit={onSubmit}>
<Grid container>
   <Grid item xs={12} sx={{mt:2}}>
      <TextField 
      label="Correo"
       type="email"
       placeholder="correo@google.com"
       fullWidth
       name="email"
       value={email}
       onChange={onInputChange}/>
   </Grid>

   <Grid item xs={12} sx={{mt:2}}>
      <TextField 
      label="Contrseña"
       type="password"
       placeholder="contraseña"
       fullWidth
       name="password"
       value={password}
       onChange={onInputChange}/>
   </Grid>

   <Grid container spacing={2} sx={{mb:2, mt:1}}>
      <Grid item xs={12} sm={6}>
        <Button type="submit" variant='contained' fullWidth >
          Login
        </Button>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Button  variant='contained' fullWidth onClick={onGoogleSignIn} >
          <Google/>
          <Typography sx={{ml:1}}>Google</Typography>
        </Button>
      </Grid>
   </Grid>


 <Grid container direction='row' justifyContent='end' >
  <Link component={RouterLink} color='inherit' to="/auth/register">
  Crear una cuenta
  </Link>
 </Grid>


</Grid>

</form>


   
  </AuthLayout>

  )
}
