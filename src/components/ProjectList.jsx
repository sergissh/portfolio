import React from 'react'
import styled from 'styled-components'
import Separator from './Separator'
import { TopRightArrow } from '../assets/Icons'

function ProjectList() {
  return (
    <WrapperList>
        <Separator />
        <ol className='pr-list'>
            <li className='pr-item'>
                <a href='#'>
                    <div className='pr-item__div'>
                        <div className='pr-item__img'>
                            <img src='https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg'/>
                        </div>
                        <div className='pr-item__content'>
                            <div className='prc-title'>
                                <h4>Dark Mode Theme</h4>
                                <TopRightArrow />
                            </div>
                            <p>Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.</p>
                            <ul className='prc-tags'>
                                <li>Spotify API</li>
                                <li>API Rest</li>
                                <li>Netlify</li>
                                <li>Styled-Components</li>
                                <li>ReactJS</li>
                            </ul>
                        </div>
                    </div>
                </a>
            </li>
            <li className='pr-item'>
                <a href='#'>
                    <div className='pr-item__div'>
                        <div className='pr-item__img'>
                            <img src='https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg'/>
                        </div>
                        <div className='pr-item__content'>
                            <div className='prc-title'>
                                <h4>Dark Mode Theme</h4>
                                <TopRightArrow />
                            </div>
                            <p>Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.</p>
                            <ul className='prc-tags'>
                                <li>Spotify API</li>
                                <li>API Rest</li>
                                <li>Netlify</li>
                                <li>Styled-Components</li>
                                <li>ReactJS</li>
                            </ul>
                        </div>
                    </div>
                </a>
            </li>
            <li className='pr-item'>
                <a href='#'>
                    <div className='pr-item__div'>
                        <div className='pr-item__img'>
                            <img src='https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg'/>
                        </div>
                        <div className='pr-item__content'>
                            <div className='prc-title'>
                                <h4>Dark Mode Theme</h4>
                                <TopRightArrow />
                            </div>
                            <p>Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.</p>
                            <ul className='prc-tags'>
                                <li>Spotify API</li>
                                <li>API Rest</li>
                                <li>Netlify</li>
                                <li>Styled-Components</li>
                                <li>ReactJS</li>
                            </ul>
                        </div>
                    </div>
                </a>
            </li>
            
        </ol>

    </WrapperList>
  )
}

export default ProjectList

const WrapperList = styled.section`
    width: 100%;
    .pr-list{
        display: flex;
        gap: 2rem;
        flex-direction: column;
        align-content: center;
        .pr-item__div{
            padding: 1rem;
            display: flex;
            flex-direction: row;
            gap: 1rem;
            .pr-item__img{
                width: 25%;
                align-items: center;
                img{
                    width: 120px;
                    float: left;
                    border: 0px solid #ccc;
                    border-width: 2px;
                    border-radius: .2rem;
                    border-color: rgba(226,232,240,.1);
                }
            }
            .pr-item__content{
                width: 75%;
                display: flex;
                flex-direction: column;
                gap: .4rem;
                .prc-title{
                    display: flex;

                    gap: .6rem;
                    svg{
                        fill: white;
                        width: .85rem;
                        transition-duration: .17s; 
                    }
                }
                p{
                    opacity: .75;
                    line-height: 1.35;
                }
                .prc-tags{
                    margin-top: 1rem;
                    display: flex;
                    gap: .7rem;
                    flex-wrap: wrap;
                    li{
                        padding: .4rem;
                        background: rgb(32, 141, 108, .7);
                        border-radius: 1rem;
                        color: rgb(66, 229, 180, 1);
                        font-size: .9rem;
                    }
                }
            }
            &:hover{
                background-color: rgb(57, 79, 131, .2);
                border-radius: .4rem;
                box-shadow: 4px 4px 2px 4px rgb(57, 79, 131, .2);
                .prc-title{
                    h4{
                    color: rgb(66, 229, 180, 1);
                    }
                    svg{
                        fill: rgb(66, 229, 180, 1);
                        transform: translateX(5px) translateY(-5px);
                    }
                }
            }
        }
    }
`