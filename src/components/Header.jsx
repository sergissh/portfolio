import React, {useState, useRef} from 'react'
import { GitHub, Instagram, Linkedin, Twitter } from '../assets/Icons'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

function Header() {

    const links = ['ABOUT', 'EXPERIENCE', 'STUDIES', 'PROJECTS'];

    const [activeLink, setActiveLink] = useState(0);

    
    const handleLinkClick = (index) => {
        setActiveLink(index);
    };

    const renderLinks = () => {
        return (
            <ul>
            {
                links.map((link, index) => {
                    return (
                        <li key={index} onClick={() => handleLinkClick(index)}>
                            <a className={index === activeLink ? 'll-anchor ll-active' : 'll-anchor'} href='#'>
                                <span className='ll-a__bar'></span>
                                <span className='ll-a__name'>{link}</span>
                            </a>
                        </li>
                    )
                })
            }
            </ul>
        )
    }
    return (
        <HeaderWrapper>
            <div className='upper-header'>
                <h1><Link to="#">Sergi Sanchez</Link></h1>
                <h3>Computer Engineer</h3>
                <p>This is my personal portfolio where you can check my CV data and check my projects out!</p>
                <nav>
                    {renderLinks()}
                </nav>
            </div>
            
            <div className='lower-header'>
                <Link to="#"><GitHub /></Link>
                <Link to="#"><Linkedin /></Link>
                <Link to="#"><Instagram /></Link>
                <Link to="#"><Twitter /></Link>
            </div>
        </HeaderWrapper>
    )
}

export default Header;

const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 100vh;
    min-height: 100vh;
    padding: 6rem 0;
    width: 50%;
    position: sticky;
    top: 0;
    .upper-header{
        h1{
        line-height: 1.45;
        }
        h3{
            font-size: 1.5rem;
        }
        p{
            font-size: 1rem;
            margin-top: 2rem;
            max-width: 22rem;
        }
    }
    nav{
        ul{
            margin-top: 3rem;
            display: block;
        }
        
        .ll-anchor{
            display: flex;
            align-items: center;
            padding: .75rem 0;
            opacity: .7;
            &:hover{
                opacity: 1;
                .ll-a__bar{
                    width: 4rem;
                }
                .ll-a__name{
                    font-weight: bolder;
                }
            }
            .ll-a__bar{
                height: 1px;
                background-color: white;
                width: 2rem;
                margin-right: 1.2rem;
                transition: .2s all ease;
            }
            .ll-a__name{
                font-size: .9rem;
            }
        }
        .ll-active{
            opacity: 1;
            .ll-a__bar{
                width: 4rem;
            }
            .ll-a__name{
                font-weight: bolder;
            }
        }
    }

    .lower-header{
        display: flex;
        gap: 1.2rem;
        svg{
            opacity: .65;
            font-size: 1.7rem;
            fill: white;
            &:hover{
                opacity: 1;
            }
        }
    }
`