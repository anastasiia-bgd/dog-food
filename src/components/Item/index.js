
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../../utils/api';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';

export const Item = () => {
  const [item, setItem] = useState(null)
  const params = useParams();
  const navigate = useNavigate()

  const handleClick = () => {
    api.deleteProduct(params.itemID)
      .then((data) => {
        console.log(data)
        navigate('/')
      })
  }

  const navigateToEditPage = () => {
    navigate(`edit`)
  }
 
  useEffect(() => {
    api.getProducts(params.itemID)
      .then((data) => setItem(data))
      .catch((err) => alert(err))
  }, [])
  return (
    <>
      {item && (
        <Grid container spacing={2}>
          <Grid item container xs={6}>
           <Grid item xs={12}>
            <img
              style={{
                maxHeight: 330,
                maxWidth: 330,
              }}
              src={
                'https://www.ubuy.co.it/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFLT3JFRTNMS0wuX0FDX1NMMTUwMF8uanBn.jpg'
              }
              alt='picture'
            />
          </Grid>
          <Grid item xs={4}>
          Цена: {item.price}
          </Grid>
          <Grid item xs={4}>
          <Button onClick={handleClick} variant='contained' color='primary' size='small'>
            Удалить товар
          </Button>
          <Grid item xs={4}>
          <Button onClick={navigateToEditPage} variant='contained' color='warning' size='small'>
           Редактировать
          </Button>
          </Grid>
          </Grid>
          </Grid>
          <Grid item xs={6}>
            <Typography variant='h3'>{item.name}</Typography>
            <Typography variant='caption'>{item.weight}</Typography>
            <Typography variant='subtitle1'>{item.description}</Typography>
          </Grid>
            </Grid>  
      )}

    </>

  )
}
