import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import About from './About';
import Experience from './Experience';
import Studies from './Studies';
import PersonalProjects from './PersonalProjects';
import ProfessionalProjects from './ResearchProjects';

function MainSection() {
  return (
    <SectionWrapper>
        <About/>
        <Experience />
        <Studies />
        <ProfessionalProjects />
        <PersonalProjects />
    </SectionWrapper>
  )
}

export default MainSection;

const SectionWrapper = styled.main`
  margin-bottom: 5rem;
  @media(min-width: 1025px){
    flex: 1;
    padding: 6rem 0;
    margin-bottom: 0;
    width: 55%;
    .section-title{
      display: none;
    }
  }
`