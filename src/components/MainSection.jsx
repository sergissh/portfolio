import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import About from './About';
import Experience from './Experience';
import Studies from './Studies';
import ProjectList from './ProjectList';

function MainSection() {
  return (
    <SectionWrapper>
        <About/>
        <Experience />
        <Studies />
        <ProjectList />
    </SectionWrapper>
  )
}

export default MainSection;

const SectionWrapper = styled.main`
  @media(min-width: 1025px){
    padding: 6rem 0;
    width: 50%;
    .section-title{
      display: none;
    }
  }
`