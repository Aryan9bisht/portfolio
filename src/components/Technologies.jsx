import React from 'react'
import { Card, Typography } from '@mui/material'
function Technologies() {
  return (
    <Card style={{border:'none',backgroundColor:'transparent',color:'whitesmoke',width:'70vw',marginBottom:'10vh',boxShadow:'none'}}>
         <div style={{fontSize:'50px'}}>Technologies</div>
         <Typography>I've worked with a range a technologies in the web development world. From Back-end To Design</Typography>
         <Card style={{border:'none',backgroundColor:'transparent'}}>
          <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around', color:'whitesmoke',marginTop:'40px'
          }}>
            <Card style={{display:'flex',flexDirection:'column',alignItems:'center',color:'whitesmoke', background: '#494980',width:'22vw',borderRadius:'10px',height:'10vh'}}>
             <Typography style={{fontSize:'25px',margin:'10px 0'}}>   FrontEnd Development</Typography>
             <Typography>ReactJS  ,  Redux  ,   NextJS  ,  TypeScript</Typography>
            </Card>
            <Card style={{display:'flex',flexDirection:'column',alignItems:'center',color:'whitesmoke', background: '#494980',width:'22vw',borderRadius:'10px',height:'10vh'}}>
            <Typography style={{fontSize:'25px',margin:'10px 0'}}>   Backend Development</Typography>
            <Typography>NodeJS  ,   ExpressJS  ,  SQL</Typography>
            </Card>
            <Card style={{display:'flex',flexDirection:'column',alignItems:'center',color:'whitesmoke', background: '#494980',width:'22vw',borderRadius:'10px',height:'10vh'}}>
            <Typography style={{fontSize:'25px',margin:'10px 0'}}>   Testing framework</Typography>
<Typography >Jest  , Cypress</Typography>
            </Card>
            </div>
         </Card>
       
    </Card>
   
  )
}

export default Technologies