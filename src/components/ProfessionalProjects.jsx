import React from 'react'
import styled from 'styled-components'
import Separator from './Separator'
import { BsFileEarmarkText } from "react-icons/bs";
import { GiMicrophone } from "react-icons/gi";
import ganImage from '../assets/images/Generative-Adversarial-Networks.png'
function ProfessionalProjects() {
  return (
    <WrapperList id='projects'>
        <Separator />
        <h2 className='section-title'>Professional Projects</h2>
        <ol className='pr-list'>
            <li className='pr-item'>
                <div className='pr-item__div'> 
                    <header>
                        <h3>Forecasting of PV & Energy Consumption</h3>
                        <span>European Research Project · IREC</span>
                    </header>
                    <div className='content'>
                        <div className='image'>
                            <img src={ganImage}/>
                        </div>
                        <div className='description'>
                            <p>
                                Developed machine learning models for short-term photovoltaic 
                                generation and electricity demand forecasting using historical 
                                energy and weather data. Built and evaluated forecasting 
                                pipelines, comparing deep learning and traditional machine 
                                learning approaches while optimizing model performance for 
                                real-world smart energy applications.
                            </p>
                            <ul className='tags'>
                                <li>Python</li>
                                <li>Tensorflow</li>
                                <li>XGBoost</li>
                                <li>LSTM</li>
                            </ul>
                        </div>

                    </div>
                    <footer>
                        <div className="metadata">
                            AI Engineer
                            <span>•</span>
                            IREC
                            <span>•</span>
                            European Research Project
                            <span>•</span>
                            2024–2026
                        </div>
                        <ul className='links'>
                            <li>
                                <small>Published Paper</small> 
                                <a href='www.google.com'>
                                    <BsFileEarmarkText />
                                    Short-Term Photovoltaic and Demand Forecasting Using Deep Learning • 2026
                                </a>
                            </li>
                            <li>
                                <small>Congress Speaker</small>
                                <a href='https://www.wsed.at/programme/overview-2025'>
                                    <GiMicrophone />
                                    World Sustainable Energy Days 2025
                                </a>
                            </li>
                        </ul>
                    </footer>
                </div>
            </li>
        </ol>

    </WrapperList>
  )
}

export default ProfessionalProjects

const WrapperList = styled.section`
    width: 100%;
    .section-title{
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }
    .pr-list{
        display: flex;
        gap: 2rem;
        flex-direction: column;
        align-content: center;
        .pr-item__div{
            padding: 1rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            background: rgb(30, 41, 59);
            border: 1px solid rgba(148, 163, 184, .12);
            border-radius: 1rem;
            transition: .25s ease;
            header{
                display: flex;
                flex-direction:column;
                gap:.25rem;
                h3{
                    font-size:1.35rem;
                    font-weight:600;
                }
                span{
                    color:#94a3b8;
                    font-size: 1.1rem;
                }
            }
            h3 span{
                color: #94a3b8;
                font-weight: 500;
            }
            .content{
                display: flex;
                gap: 1.5rem;
                align-items: flex-start;
                .image{
                    flex: 0 0 240px;
                    img{
                        width: 100%;
                        aspect-ratio:16/10;
                        object-fit:cover;
                        border-radius:.6rem;
                    }
                }
                .description{
                    display: flex;
                    flex-direction: column;
                    gap: .7rem;
                    flex: 1;
                }
            } 
            .tags{
                display: flex;
                gap: 1rem;
                flex-wrap: wrap;
                li{
                    padding: .35rem .75rem;
                    background: rgba(32,141,108,.45);
                    border-radius: 1rem;
                    font-size: .82rem;
                    color: rgb(66, 229, 180);
                }
            } 
            footer{
                border-top:1px solid rgba(148,163,184,.12);
                margin-top:.4rem;
                padding-top: 1rem;
                .metadata{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    gap:.8rem;
                    color:#94a3b8;
                    font-size:.9rem;
                }
                .links{
                    display:flex;
                    flex-direction:column;
                    gap:1rem;
                    margin-top: 1rem;
                    li{
                        display:flex;
                        flex-direction:column;
                        gap:.35rem;
                    }
                    small{
                        color:#94a3b8;
                        font-size:.82rem;
                        text-transform:uppercase;
                        letter-spacing:.08em;
                    }
                    a{
                        display:flex;
                        align-items:center;
                        gap:.5rem;
                        color:#e2e8f0;
                        transition:.2s;
                    }
                    a:hover{
                        color:rgb(66,229,180);
                    }

                    svg{
                        font-size:1rem;
                        flex-shrink:0;
                    }
                }
            }
        &:hover{
            transform: translateY(-4px);
            box-shadow: 0 12px 30px rgba(0,0,0,.25);
            border-color: rgba(66,229,180,.35)
        }
    }
    @media(min-width: 623px){
        .pr-list{
            .pr-item__div{
                flex-direction: row;
                .pr-item__img{
                    img{
                        max-width: 100%;
                    }
                }
            }
        }
    }   
`