import React from 'react'
import styled from 'styled-components'
import Separator from './Separator'
function Experience() {
  return (
    <ExperienceWrapper>
        <Separator />
        <ol className='exp-list'>
            <li className='exp-list__item'>
                <div className='item'>
                    <header className='item-header'>
                        MAY 2023 — SEP 2023
                    </header>
                    <div className='item-content'>
                        <h4>Internship · Accenture</h4>
                        <p>
                        Deliver high-quality, robust production code for a 
                        diverse array of projects for clients including 
                        Harvard Business School, Everytown for Gun Safety, 
                        Pratt Institute, Koala Health, Vanderbilt University, 
                        The 19th News, and more. Provide leadership within 
                        engineering department through close collaboration, 
                        knowledge shares, and mentorship.
                        </p>
                        <ul>
                            <li>Javascript</li>
                            <li>ReactJS</li>
                            <li>CSS3</li>
                            <li>HTML5</li>
                        </ul>
                    </div>
                </div>
            </li>
            <li className='exp-list__item'>
                <div className='item'>
                    <header className='item-header'>
                        OCT 2021 — DEC 2022
                    </header>
                    <div className='item-content'>
                        <h4>Internship · NTTDATA</h4>
                        <p>
                            Deliver high-quality, robust production code for a 
                            diverse array of projects for clients including 
                            Harvard Business School, Everytown for Gun Safety, 
                            Pratt Institute, Koala Health, Vanderbilt University, 
                            The 19th News, and more. Provide leadership within 
                            engineering department through close collaboration, 
                            knowledge shares, and mentorship.
                        </p>
                        <ul>
                            <li>Javascript</li>
                            <li>ReactJS</li>
                            <li>CSS3</li>
                            <li>HTML5</li>
                            <li>Python</li>
                            <li>C++</li>
                        </ul>
                    </div>
                </div>
            </li>
        </ol>
    </ExperienceWrapper>
  )
}

export default Experience

const ExperienceWrapper = styled.section`
    
    .exp-list__item{
        margin-top: 2rem;
    }
    .item{
        display: flex;
        flex-direction: row;
        max-width: 100%;
        .item-header{
            width: 32%;
            font-size: .85rem;
            opacity: .75;
        }
        .item-content{
            width: 68%;
            h4{
                margin-bottom: 1rem;
            }
            p{
                line-height: 1.4rem;
                opacity: .75;
                min-width: 100%;
            }
            ul{
                display: flex;
                flex-direction: row;
                gap: .7rem;
                margin-top: 1rem;
                flex-wrap: wrap;
                li{
                    border-radius: 1rem;
                    padding: .4rem;
                    font-size: .9rem;
                    background-color: rgb(32, 141, 108, .7);
                    color: rgb(66, 229, 180, 1);
                }
            }
        }
    }
`
