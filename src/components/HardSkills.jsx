import React from 'react'
import styled from 'styled-components'
import Separator from './Separator'
function HardSkills() {
  return (
    <SkillsWrapper id='hard-skills'>
        <Separator />
        <h2 className='section-title'>Hard Skills</h2>
        <div className='skills'>
            <div className='skills-lang'>
                <div></div>
            </div>
            <div className='skills-ai'>

            </div>
            <div className='skills-web'>
                
            </div>
        </div>
    </SkillsWrapper>
  )
}

export default HardSkills

const SkillsWrapper = styled.section`
    .section-title{
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }

`