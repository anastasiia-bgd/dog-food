import React, { useState } from 'react'
import { Grid, TextField } from '@mui/material'
export const EditItem = () => {
   const [name, setName] = useState()
    const handleClick =() => {

    }
  return (
    
    <Grid container flexDirection='column' spacing={3}>
      <Grid item>
      <TextField label="Название" name='inputName' variant="outlined" />
      </Grid>
      <Grid item>
      <TextField label="Описание товара" variant="outlined" />
      </Grid>
      <Grid item>
      <TextField label="Цена" name='inputName' variant="outlined" />
      </Grid>
    <Grid item>
      <Button  variant='contained' color='secondary'>Редактировать</Button>
      </Grid>
      </Grid>
     
  )
}
