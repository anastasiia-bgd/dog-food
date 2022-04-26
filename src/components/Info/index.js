import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Grid, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

export const Info = ({basket, favorites, name}) => {
const navigate = useNavigate()
const navigateToCreatePage= () => {
  navigate('product/create')
}
  return (
  <div> 
  <Grid container flexDirection='column'>
       <Grid item>Like {favorites.length}</Grid> 
       <Grid item>Basket {basket.length}</Grid>
       <Grid item>User Name {name}</Grid> 
       <Grid item>
         <IconButton>
           <AddIcon onClick={navigateToCreatePage}/>
         </IconButton>
       </Grid>
       </Grid>
       </div> 
  )
 
}
