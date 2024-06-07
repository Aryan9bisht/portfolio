import { Card } from '@mui/material'
import React from 'react'
import CardSlider from './CardSlider'

function Project() {
  return (
    <Card style={{backgroundColor:'transparent',color:'whitesmoke',boxShadow:'none',width:'80vw',display:'flex',flexDirection:'column',justifyContent:'start',alignItems:'start'}}>
         <div style={{fontSize:'50px',paddingLeft:'5vw'}}>Project</div>
         <CardSlider />
    </Card>
   
  )
}

export default Project