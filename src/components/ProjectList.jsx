import React from 'react'
import styled from 'styled-components'
import Separator from './Separator'
import { TopRightArrow } from '../assets/Icons'

function ProjectList() {
  return (
    <WrapperList id='projects'>
        <Separator />
        <h2 className='section-title'>Projects</h2>
        <ol className='pr-list'>
            <li className='pr-item'>
                <a target='_blank' href='https://github.com/sergissh/TFG' rel="noreferrer">
                    <div className='pr-item__div'>
                        <div className='pr-item__img'>
                            <img src='../../images/Generative-Adversarial-Networks.png'/>
                        </div>
                        <div className='pr-item__content'>
                            <div className='prc-title'>
                                <h4>Convolutional Generative Adversarial Networks</h4>
                                <TopRightArrow />
                            </div>
                            <p>
                                This project consitutes my bachelor's thesis, in which I develop three
                                GAN network models for the generation of synthetic images that are similar to those of the 
                                MNIST and CelebA datasets.
                            </p>
                            <ul className='prc-tags'>
                                <li>PythonS</li>
                                <li>Py-PyTorch</li>
                                <li>Py-Matplotlib</li>
                                <li>Py-Jupyter Notebook</li>
                            </ul>
                        </div>
                    </div>
                </a>
            </li>
            <li className='pr-item'>
                <a target='_blank' href='https://github.com/sergissh/Basic-Web-Scraper' rel="noreferrer">
                    <div className='pr-item__div'>
                        <div className='pr-item__img'>
                            <img src='../../images/web-scraping.jpg'/>
                        </div>
                        <div className='pr-item__content'>
                            <div className='prc-title'>
                                <h4>Basic - Web Scraping</h4>
                                <TopRightArrow />
                            </div>
                            <p>
                                This project marks the inception of my journey into the world
                                of Web Scraping. It signifies my initial foray into developing a 
                                crawler and scraper bot, aimed at extracting valuable data from
                                <i> La Casa del Libro</i> website.
                            </p>
                            <ul className='prc-tags'>
                                <li>Python</li>
                                <li>Py-BeautifulSoup</li>
                                <li>Py-Selenium</li>
                            </ul>
                        </div>
                    </div>
                </a>
            </li>
            <li className='pr-item'>
                <a target='_blank' href='https://github.com/sergissh/Snake---PyGame' rel="noreferrer">
                    <div className='pr-item__div'>
                        <div className='pr-item__img'>
                            <img src='../../images/snake-pygame.jpg'/>
                        </div>
                        <div className='pr-item__content'>
                            <div className='prc-title'>
                                <h4>Snake | Python & PyGame</h4>
                                <TopRightArrow />
                            </div>
                            <p>
                            In this project I develop my first game with Python, the iconic Snake game. 
                            For this I use the PyGame library that allows the creation of 2D video games in a simple way.
                            </p>
                            <ul className='prc-tags'>
                                <li>Python</li>
                                <li>Py-PyGame</li>
                            </ul>
                        </div>
                    </div>
                </a>
            </li>
            <li className='pr-item'>
                <a target='_blank' href='https://github.com/sergissh/Search-Algorithms-with-Tkinter' rel="noreferrer">
                    <div className='pr-item__div'>
                        <div className='pr-item__img'>
                            <img src='../../images/main-window.png'/>
                        </div>
                        <div className='pr-item__content'>
                            <div className='prc-title'>
                                <h4>Search Algorithms with Tkinter</h4>
                                <TopRightArrow />
                            </div>
                            <p>
                            
                            </p>
                            <ul className='prc-tags'>
                                <li>Python</li>
                                <li>Py-Tkinter</li>
                                <li>Py-Matplotlib</li>
                                <li>Py-Networkx</li>
                            </ul>
                        </div>
                    </div>
                </a>
            </li>
            <li className='pr-item'>
                <a href='#' rel="noreferrer">
                    <div className='pr-item__div'>
                        <div className='pr-item__img'>
                            <img src='https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg'/>
                        </div>
                        <div className='pr-item__content'>
                            <div className='prc-title'>
                                <h4>🚧 Working on Uploading Projects 🚧</h4>
                            </div>
                            <p>
                             I'm working on uploading more projects to the Web. I have projects that 
                             I have doveloped during my degree or just for fun, but before uploading them 
                             I want to review and document them to turn them into an interesting piece of content.
                            </p>
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
            flex-direction: column-reverse;
            gap: 1rem;
            .pr-item__img{
                flex: 0 0 25%;
                img{
                    max-width: 50%;
                    height: auto;
                    border: 0px solid #ccc;
                    border-width: 2px;
                    border-radius: .2rem;
                    border-color: rgba(226,232,240,.1);
                }
            }
            .pr-item__content{
                flex: 0 0 75%;
                display: flex;
                flex-direction: column;
                gap: .4rem;
                flex-wrap: nowrap;
                .prc-title{
                    display: flex;
                    gap: .6rem;
                    align-items: center;
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
                    self-align: center;
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