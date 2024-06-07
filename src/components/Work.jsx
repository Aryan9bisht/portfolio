import React from 'react'
import { Card, Typography } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle';
function Work() {
  return (
    <Card style={{border:'none',backgroundColor:'transparent',color:'whitesmoke',width:'70vw',boxShadow:'none'}}>
    <div style={{fontSize:'50px',marginTop:'10px',marginBottom:'10px'}}>Work Expierience</div>
    <Typography>I've hands on Expierience with these technologies. I am starting my career. I have done few interships and currently employed as SDE in shopflo.</Typography>
    <Card style={{border:'none',backgroundColor:'transparent'}}>
     <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around', color:'whitesmoke',marginTop:'40px',height:'70vh',alignItems: 'center'
     }}>
       <Card style={{display:'flex',flexDirection:'column',alignItems:'start',color:'whitesmoke', background: '#494980',width:'55vw',borderRadius:'10px',height:'max-content',paddingBottom:'20px'}}>
        <Typography style={{fontSize:'25px',marginTop:'25px',marginLeft:'30px'}}>  SDE@Mountblue Technologies</Typography>
        <Typography style={{marginBottom:'20px',marginLeft:'30px'}}>(May-2024 to Current)</Typography>
        <Typography style={{marginLeft:'50px'}}> <CircleIcon sx={{ fontSize: 10 }} /> Currently deployed at client SHOPFLO in bangalore as a SDE. </Typography>
        <Typography style={{marginLeft:'50px'}}> <CircleIcon sx={{ fontSize: 10 }} /> Developing and debugging API's. </Typography>
        <Typography style={{marginLeft:'50px'}}> <CircleIcon sx={{ fontSize: 10 }} /> Fixing and developing UI for the Shopflo product. </Typography>
        <Typography style={{marginLeft:'50px'}}> <CircleIcon sx={{ fontSize: 10 }} /> Writing automated test cases for the developed features.</Typography>
       </Card>
       <Card style={{display:'flex',flexDirection:'column',alignItems:'start',color:'whitesmoke', background: '#494980',width:'55vw',borderRadius:'10px',height:'max-content',paddingBottom:'20px'}}>
        <Typography style={{fontSize:'25px',marginTop:'25px',marginLeft:'30px'}}>  SDE intern@Mountblue Technologies</Typography>
        <Typography style={{marginBottom:'20px',marginLeft:'30px'}}>(Jan-2024 to May-2024)</Typography>
        <Typography style={{marginLeft:'50px'}}> <CircleIcon sx={{ fontSize: 10 }} />  Worked on perfecting ReactJs and nodeJS. </Typography>
        <Typography style={{marginLeft:'50px'}}> <CircleIcon sx={{ fontSize: 10 }} />  Developed handson expierience in various technologies. </Typography>
        <Typography style={{marginLeft:'50px'}}> <CircleIcon sx={{ fontSize: 10 }} />  Worked on many projects for the product. </Typography>
        <Typography style={{marginLeft:'50px'}}> <CircleIcon sx={{ fontSize: 10 }} />  Writing automated test cases for the developed features.</Typography>
       </Card>
       <Card style={{display:'flex',flexDirection:'column',alignItems:'start',color:'whitesmoke', background: '#494980',width:'55vw',borderRadius:'10px',height:'max-content',paddingBottom:'20px'}}>
        <Typography style={{fontSize:'25px',marginTop:'25px',marginLeft:'30px'}}> Teaching Assistant@Coding Ninjas</Typography>
       
        <Typography style={{marginLeft:'50px'}}> <CircleIcon sx={{ fontSize: 10 }} />  Served as Teaching Assistant in Coding Ninjas where I solved around 1400+ doubts of more than 600+ students. </Typography>
        <Typography style={{marginLeft:'50px'}}> <CircleIcon sx={{ fontSize: 10 }} />  Developed my problem solving, debugging and Communication Skills. </Typography>
        <Typography style={{marginLeft:'50px'}}> <CircleIcon sx={{ fontSize: 10 }} />  Improved my DSA while solving doubts. </Typography>
       </Card>
       </div>
    </Card>
  
</Card>
  )
}

export default Work