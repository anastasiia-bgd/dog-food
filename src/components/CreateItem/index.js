import React from 'react'
import { Navigate } from 'react-router-dom'
import api from '../../utils/api'
import { TextField, Grid, Button } from '@mui/material'

export const CreateItem = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
       const {
           target: {name, description, price},
       } = event;
    
    api.addProduct({
          name: name.value,
          description: description.value,
          price: price.value,  
        })
        .then((data) => {
           Navigate('/')
        })
        .catch((err) => alert(err))
    }
  return (
   <form onSubmit={handleSubmit}>
     <Grid container flexDirection='column' spacing={3}>
       <Grid item>
       <TextField label="Название" name='inputName' variant="outlined" />
       </Grid>
       <Grid item>
       <TextField label="Описание товара" name='inputName' variant="outlined" />
       </Grid>
       <Grid item>
       <TextField label="Цена" name='inputName' variant="outlined" />
       </Grid>
     <Grid item>
       <Button type='submit' variant='contained' color='secondary'>Add item</Button>
       </Grid>
       </Grid>
        </form>
  )
}
