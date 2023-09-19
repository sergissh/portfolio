import React from 'react'
import styled from 'styled-components'
import Separator from './Separator'
import { RightArrow } from '../assets/Icons'

function Studies() {
  return (
    <StudiesWrapper>
        <Separator/>
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
                    <span className='h-deg'>Phisical Science Degree | 2019 - Present</span>
                    <span className='h-esp'>Performing Part-Time</span>
                </div>
            </li>
        </ol>
        <div className='resume'>
            <a href='#'>
                <span>View Full Resumé</span>
                <RightArrow />
            </a>
        </div>
    </StudiesWrapper>
  )
}

export default Studies

const StudiesWrapper = styled.section`
    width: 100%;
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
    .resume{
        margin-top: 3rem;
        a{
            display: flex;
            justify-content: flex-start;
            align-content: center;
            gap: .4rem;
            span{
                font-size: 1rem;
                font-weight: bold;
                transition: box-shadow 0.2s ease-in-out;
            }
            svg{
                fill: white;
                transition-duration: .17s;
            }
            &:hover{
                span{
                    box-shadow: 0px 1px 0px 0px rgba(66, 229, 180, 1);
                }
                svg{
                    @keyframes arrow-moving{
                        50% {margin-left: .9rem;}
                        100$ {margin-left: 0;}
                    }

                    transform: translateX(9px);
                    fill: rgb(66, 229, 180, 1);
                    /*
                    animation-name: arrow-moving;
                    animation-duration: .85s;
                    animation-iteration-count: infinite;
                    */
                }
            }
        }
    }

`