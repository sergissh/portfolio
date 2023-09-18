import React from 'react'
import styled from 'styled-components';
import About from './About';
import Experience from './Experience';

function MainSection() {
  return (
    <SectionWrapper>
        <About/>
        <Experience />
    </SectionWrapper>
  )
}

export default MainSection;

const SectionWrapper = styled.main`
    padding: 6rem 0;
    width: 50%;
`