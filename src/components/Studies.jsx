import React from 'react'
import styled from 'styled-components'
import Separator from './Separator'
import { RightArrow } from '../assets/Icons'

function Studies() {

  return (
    <StudiesWrapper id='studies'>
        <Separator/>
        <h2 className='section-title'>Studies</h2>
        <ol>
            <li className='studies-item'>
                <div>
                    <h5 className='h-uni'>Universidad Autónoma de Barcelona (UAB)</h5>
                    <span className='h-deg'>Computer Engineering Degree | 2018 - 2023</span>
                    <span className='h-esp'>Specialization in Computing (AI)</span>
                </div>
            </li>
            <li className='studies-item'>
                <div>
                    <h5 className='h-uni'>Universidad Nacional de Educación a Distancia (UNED)</h5>
                    <span className='h-deg'>Phisics Degree | 2023 - Present</span>
                    <span className='h-esp'>Performing Part-Time</span>
                </div>
            </li>
        </ol>
    </StudiesWrapper>
  )
}

export default Studies

const StudiesWrapper = styled.section`
    width: 100%;
    .section-title{
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }
    .studies-item{
        margin-top: 2.5rem;
        div{
            display: flex;
            flex-direction: column;
            gap:.4rem;
            .h-uni{
                font-size: 1.05rem;
            }
            .h-deg{
                opacity: .75;
            }
            .h-esp{
                opacity: .75;
            }
        }
    }
`