import React from 'react'
import styled from 'styled-components'
function About() {
  return (
    <AboutWrapper id='about'>
      <h2 className='section-title'>About Me</h2>
      <p>
        Computer Engineer with professional experience developing AI 
        and machine learning solutions for smart energy systems, 
        contributing to research projects that resulted in a 
        peer-reviewed publication and presentation at an international 
        conference. I enjoy solving real-world problems through data, 
        covering the complete machine learning workflow from data 
        preprocessing and feature engineering to model development and
         evaluation.
      </p>
      <p>
        My main interests are Artificial Intelligence, Machine Learning 
        and Computer Vision. I'm passionate about continuously learning 
        new technologies and applying them through both professional and 
        personal projects, always looking to improve my skills as an 
        engineer.
      </p>
      <p>
        Outside of work, I'm currently studying Physics at UNED, 
        a field that has always fascinated me and complements my 
        background in Computer Engineering. I also enjoy travelling, 
        practicing sports and building projects that allow me to keep 
        exploring new ideas.
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