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
                        FEB 2024 — OCT 2026
                    </header>
                    <div className='item-content'>
                        <h4>AI Engineer <span>· IREC</span></h4>
                        <p>
                            Developed AI and machine learning solutions for smart energy
                             systems within European research and innovation projects. 
                             My work covered the complete machine learning pipeline, 
                             including data acquisition, preprocessing, feature engineering,
                              model development, evaluation and visualization. 
                              I contributed to projects on photovoltaic and demand 
                              forecasting, non-intrusive load monitoring (NILM) and 
                              building flexibility aggregation, with part of this work 
                              resulting in a peer-reviewed scientific publication and 
                              presentation at an international conference.
                        </p>
                        <ul>
                            <li>Python</li>
                            <li>PyTorch</li>
                            <li>Scikit-learn</li>
                            <li>TensorFlow</li>
                            <li>Git</li>
                            <li>Docker</li>
                            <li>SQL</li>
                        </ul>
                    </div>
                </div>
            </li>
            <li className='exp-list__item' id='first-item'>
                <div className='item'>
                    <header className='item-header'>
                        MAY 2023 — SEP 2023
                    </header>
                    <div className='item-content'>
                        <h4>Data Analyst Intern <span>· Accenture</span></h4>
                        <p>
                            Contributed to an insurance and banking analytics project on the 
                            Quantexa platform, developing data processing pipelines with 
                            Scala and Apache Spark.
                        </p>
                        <ul>
                            <li>Scala</li>
                            <li>Spark</li>
                            <li>SQL</li>
                            <li>Git</li>
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
                        <h4>Software Developer Intern <span>· NTTDATA</span></h4>
                        <p>
                            Contributed to the development of an end-to-end CRM solution using
                            Microsoft Dynamics 365, developing backend features in C#/.NET and
                            frontend components with JavaScript.
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
      font-size: 1.2rem;
    }
    .exp-list__item{
        margin-top: 3rem;
    }
    #first-item{
        margin-top: 2rem;
    }
    .item{
        display: flex;
        flex-direction: column;
        max-width: 100%;
        gap: .8rem;
        .item-header{
            width: 100%;
            font-size: .85rem;
            color: #94a3b8;
            font-weight: 500;
        }
        .item-content{
            width: 100%;
            h4{
                margin-bottom: 1rem;
                font-size: 1.1rem;
                font-weight: 600;
            }
            h4 span{
                color:#94a3b8;
                font-weight:500;
            }
            p{
                line-height: 1.6;
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
                width: 25%;
                padding-top: .15rem;
            }
            .item-content{
                width: 68%;
            }
        }
    }
`
