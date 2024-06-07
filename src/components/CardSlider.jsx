import React from 'react';
import Slider from 'react-slick';
import { Card, CardContent, CardMedia, Typography, Container } from '@mui/material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./slider-style.css"
import { Link } from 'react-router-dom';
import trello from '../assets/trello.png'
import todoist from '../assets/todoist.png'
import rest from '../assets/rest.png'
import git from '../assets/git.png'
const cards = [
  {
    title: "Trello Clone",
    description: "Created clone of Trello using API's added all major features",
    Technologies: ["ReactJS", "Redux"],
    image: trello,
    link:'https://trello-react-aryan-wtvd.vercel.app/boards'
  },
  {
    title: "Todoist Clone",
    description: "Create clone of Todoist using API's added all major features",
    Technologies: ["ReactJS", "Redux"],
    image: todoist,
    link:'https://todist-omega.vercel.app/'
  },
  {
    title: "Rest Countries project",
    description: "Created a rest countries project with data of all countries and special filters added for filtering countries",
    Technologies: ["ReactJS", "MaterialUI"],
    image:rest,
    link: "https://rest-countries-nine-henna.vercel.app/"
  },
  {
    title: "Product Management",
    description: "Created product management API's",
    Technologies: ["NodeJs", "MongoDB"],
    image: git,
    link:'https://github.com/Aryan9bisht/mirrar-assignment'
  },
  {
    title: "Social Media Backend",
    description: "Created social media applications API's",
    Technologies: ["NodeJs", "expressJS", "MongoDB"],
    image: git,
    link:'https://github.com/Aryan9bisht/social-networking-website'
  }
];

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    color:'primary',
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Container style={{ height: '55vh', background: 'rgb(15,22,36)', borderRadius: '10px', padding: '20px 0' ,boxShadow:'none',width:'max-content'}}>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <Link to={card.link} style={{textDecoration:'none'}}>
          <Card key={index} sx={{ margin: '25px', padding: '20px', borderRadius: '10px', background: '#494980', color: 'whitesmoke',width:'18vw',height:'40vh',textDecoration:'none' }}>
            <CardMedia
              component="img"
              height="200"
              image={card.image}
              alt={card.title}
              style={{ color: 'whitesmoke' }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{ color: 'whitesmoke',textDecoration:'none' }}>
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ color: 'whitesmoke' }}>
                {card.description}
              </Typography>
              {card.Technologies.map((skill, skillIndex) => (
                <Typography key={skillIndex} variant="body2" color="text.secondary" style={{ color: 'whitesmoke' }}>
                  {skill}
                </Typography>

              ))}
            </CardContent>
          </Card>
          </Link>
        ))}
      </Slider>
    </Container>
  );
};

export default CardSlider;
