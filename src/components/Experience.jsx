import React from 'react'
import styled from 'styled-components'
import Separator from './Separator'
function Experience() {
  return (
    <ExperienceWrapper id='experience'>
        <Separator />
        <h2 className='section-title'>Experience</h2>
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
                            <li>Scala</li>
                            <li>Spark</li>
                            <li>Quantexa Tool</li>
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
                            Managed an end-to-end CRM project in Microsoft Dynamics 365, employing Scrum and Kanban methods for effective teamwork. 
                            Developed custom plugins using C#, .NET, and enhanced user interface with JavaScript. Responsibilities spanned project 
                            creation, maintenance, and plugin programming. Engaged in sprint planning, ensuring project alignment, and facilitated knowledge sharing.
                        </p>
                        <ul>
                            <li>Microsoft Dynamics 365</li>
                            <li>C#</li>
                            <li>Javascript</li>
                            <li>.NET</li>
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
    .section-title{
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }
    .exp-list__item{
        margin-top: 3rem;
    }
    .item{
        display: flex;
        flex-direction: column;
        max-width: 100%;
        gap: .8rem;
        .item-header{
            width: 100%;
            font-size: .85rem;
            opacity: .75;
        }
        .item-content{
            width: 100%;
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
        @media(min-width: 623px){
            flex-direction: row;
            gap: 0;
            .item-header{
                width: 32%;
                padding-top: .15rem;
            }
            .item-content{
                width: 68%;
            }
        }
    }
`
