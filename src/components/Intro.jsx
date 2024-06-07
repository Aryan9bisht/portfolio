import React from 'react'
import LottieAnimation from './LottieAnimation'
import { Card, Typography } from '@mui/material'
import ResumeDownloader from './ResumeDownload'
import shadows from '@mui/material/styles/shadows'
function Intro() {
    return (
        <Card style={{ display: 'flex', flexDirection: 'row', background: 'rgb(15,22,36)', justifyContent: 'space-around', color: 'whitesmoke', width: '80vw', alignItems: 'center',boxShadow:'none' }}>
            <div style={{display:'flex',justifyContent:'center',flexDirection:'column',cursor:'pointer'}}>
                <Card style={{
                    width:'25vw',
                    background:'none',
                    color:'white',
                    fontSize:'25px',
                    boxShadow:'none',
                }}>
            <Typography style={{fontSize:'50px'}}>    Hello!</Typography>
            <Typography style={{fontSize:'50px'}}>    I'm Aryan Bisht</Typography>
                
                A Fornt Developer specializing in React JS Proficient in Node.js for seamless web development.
                </Card>
                <ResumeDownloader style={{marginRight:'10px'}} />
            </div>
            <LottieAnimation />

        </Card>

    )
}

export default Intro