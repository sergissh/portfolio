import React from 'react'
import { DiGithubBadge } from "react-icons/di";
import { BsFileText } from "react-icons/bs";
import styled from 'styled-components';
import Separator from './Separator';
import ganImage from '../assets/images/Generative-Adversarial-Networks.png';
import scrapingImage from '../assets/images/web-scraping.jpg';
function PersonalProjects() {
  return (
    <WrapperList id='personal-projects'>
        <Separator />
        <h2 className='section-title'>Personal Projects</h2>
        <ol className='pr-list'>
            <li className='pr-item'>
                <div className='pr-card'>
                    <div className='pr-card__img'>
                        <img src={ganImage} alt="Convolutional GANs project" />
                    </div>
                    <div className='pr-card__content'>
                        <h4>Convolutional Generative Adversarial Networks</h4>
                        <p>
                            This project consitutes my bachelor's thesis, in which I develop three
                            GAN network models for the generation of synthetic images that are similar to those of the 
                            MNIST and CelebA datasets.
                        </p>
                        <ul className='prc-tags'>
                            <li>Python</li>
                            <li>PyTorch</li>
                            <li>TensorFlow</li>
                            <li>Deep Learning</li>
                            <li>GAN</li>
                        </ul>
                    </div>
                    <div className="pr-card__footer">
                        <a
                            href="https://github.com/sergissh/GAN---Bachelor-Thesis"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <DiGithubBadge />
                            GitHub 
                        </a>
                        <a
                            href="https://ddd.uab.cat/pub/tfg/2022/tfg_1637318/Informe_Final.pdf"
                            target="_blank"
                            rel="noreferrer"
                        >   
                            <BsFileText />
                            Thesis
                        </a>
                    </div>
                </div>
            </li>
            <li className='pr-item'>
                <div className='pr-card'>
                    <div className='pr-card__img'>
                        <img src={scrapingImage} alt="Convolutional GANs project" />
                    </div>
                    <div className='pr-card__content'>
                        <h4>Basic - Web Scraping</h4>
                        <p>
                            This project marks the inception of my journey into the world
                            of Web Scraping. It signifies my initial foray into developing a 
                            crawler and scraper bot, aimed at extracting valuable data from
                            <i> La Casa del Libro</i> website.
                        </p>
                        <ul className='prc-tags'>
                            <li>Python</li>
                            <li>BeautifulSoup</li>
                            <li>Selenium</li>
                        </ul>
                    </div>
                    <div className="pr-card__footer">
                        <a
                            href="https://github.com/sergissh/Basic-Web-Scraper"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <DiGithubBadge />
                            GitHub 
                        </a>
                    </div>
                </div>
            </li>
        </ol>

    </WrapperList>
  )
}

export default PersonalProjects

const WrapperList = styled.section`
    width: 100%;
    .section-title{
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }   
    .pr-list{
        display: flex;
        width: 100%;
        flex-direction: column;
        gap: 5rem;
    }
    .pr-card{
        display: flex;
        flex-direction: column;
        background: rgb(30, 41, 59);
        border: 1px solid rgba(148, 163, 184, .12);
        border-radius: 1rem;
        padding: .1rem;
        overflow: hidden;
        transition: .25s ease;
        .pr-card__img{
            width: 100%;
            height: 200px;
            overflow: hidden;
            border-radius: .5rem;
            img{
                height: 100%;
                width: 100%;
                object-fit: cover;
                display: block; 
            }
        }
        .pr-card__content{
            display: flex;
            flex-direction: column;
            gap: .9rem;
            padding-top: 1.4rem;
            padding-left: 1.4rem;
            padding-right: 1.4rem;

            h4{
                font-size: 1.2rem;
                font-weight:600;
            }
            
            ul{
                display: flex;
                gap: 1rem;
                li{
                    padding: .4rem;
                    background: rgba(32,141,108,.45);
                    border-radius: 1rem;
                    font-size: .9rem;
                    color: rgba(66, 229, 180, 1);
                }
            }
        }
        .pr-card__footer{
            display: flex;
            flex-direction: row;
            gap: 1rem;
            padding: .8rem 1.4rem;
            a{
                display: inline-flex;
                align-items: center;
                gap: .3rem;
                border-radius: 1rem;
                border: 1px solid transparent;
                padding: .4rem 1rem;
                color: rgb(66,229,180);
                svg{
                    font-size: 1.3rem;
                }
            }
            a:hover{
                transition: .4s ease;
                background-color: rgba(32,141,108,.12);
                border-color: rgba(66,229,180,.35);
            }
        }
    }

    .pr-card:hover{
        transform: translateY(-4px);
        box-shadow: 0 12px 30px rgba(0,0,0,.25);
        border-color: rgba(66,229,180,.35)
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