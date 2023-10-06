import React from 'react'
import styled from 'styled-components'
function About() {
  return (
    <AboutWrapper id='about'>
      <h2 className='section-title'>About Me</h2>
      <p>
        Ever since childhood, I always had the curiosity and desire to learn new things,
        leading me to be fascinated by science and mathematics. Initially aspiring to pursue 
        a degree in Physics at university, I encountered obstacles on that path. 
        However, I quickly pivoted towards the field of Computer Engineering, discovering a 
        captivating new world to explore.
      </p>
      <p>
        I found great enjoyment in programming, which led me to choose a specialization in computing.
        Along this path, I uncovered field such as Artificial Intelligence and Computer Vision, 
        these being the ones on which I aspire to concentrate my career and grow professionally.
      </p>
      <p>
        In addition to learning about Artificial Intelligence, I have keen interest in delving into another domains 
        such as web development. This allows me to create visually and appealing content for a wider audience, much
        like this portfolio you're currently viewing.
      </p>
      <p>
          Along with my pursuit of learning and engaging in self-directed projects, I love to play
          both individual and team sports. I also relish spending time with my girlfriend and friends,
          and whenever the opportunity arises, to explore new countries and inmerse myself in diverse cultures
          through travel. 
      </p>
    </AboutWrapper>
  )
}

export default About

const AboutWrapper = styled.section`
    margin-top: 1rem;
    p{
        margin-bottom: 1rem;
        line-height: 1.5;
        color: rgb(148 163 184/1);
    }
    .section-title{
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }
`