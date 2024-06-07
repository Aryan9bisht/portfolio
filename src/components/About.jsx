import React from 'react'
import { Card, Typography } from '@mui/material'
function About() {
  return (
    <Card style={{ border: 'none', backgroundColor: 'transparent', color: 'whitesmoke', width: '70vw',paddingBottom:'50px',marginTop:'30px',marginBottom:'45px',boxShadow:'none' }}>
      <div style={{ fontSize: '50px', marginTop: '10px', marginBottom: '10px' }}>About Me</div>
      <Typography>I am a recent graduate with a Bachelor's degree in Technology from Maharaja Agrasen Institute of Technology, where I majored in Mechanical Engineering. Despite my background in mechanical engineering, I discovered a passion for software development during my college years, which has since become my primary career focus.


.
      </Typography>
      <Typography>Currently, I am based in Bangalore, working as a software developer at Shopflo. My primary interest lies in frontend development, and I am enthusiastic about exploring various programming languages and technologies to broaden my skill set.
</Typography>
<Typography>Growing up in New Delhi, I completed my schooling there before embarking on my professional journey. My problem-solving skills, honed through my engineering studies, have been instrumental in my transition to software development. I am committed to continuously improving these skills and applying them to diverse aspects of software development.
</Typography>
<Typography>
I am eager to work on numerous projects, both to enhance my technical abilities and to find joy in my work. By immersing myself in different areas of software development, I aim to evolve into a versatile and accomplished developer.
</Typography>
    </Card>
  )
}

export default About