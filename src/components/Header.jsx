import React, {useState, useEffect} from 'react'
import { GitHub, Linkedin} from '../assets/Icons'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

function Header() {
    
    const links = [
        { id: "about", label: "ABOUT" },
        { id: "experience", label: "EXPERIENCE" },
        { id: "studies", label: "STUDIES" },
        { id: "research-projects", label: "RESEARCH PROJECTS" },
        { id: "personal-projects", label: "PERSONAL PROJECTS" },
    ];

    const [activeSection, setActiveSection] = useState("about");

    useEffect(()=>{
        const observer = new IntersectionObserver(entries =>{
            entries.forEach((entry) => {
                if (entry.isIntersecting){
                    setActiveSection(entry.target.id);
                }
            })
        }, {rootMargin: "-40% 0px -40% 0px"});
        
        const sections = document.querySelectorAll("section[id]");
        
        sections.forEach(section => observer.observe(section)); 
        
        return () => observer.disconnect();
    }, [])

    const renderLinks = () => (
        <ul>
            {links.map(({ id, label }) => (
            <li key={id}>
                <a
                className={activeSection === id ? "ll-anchor ll-active" : "ll-anchor"}
                href={`#${id}`}
                >
                <span className="ll-a__bar"></span>
                <span className="ll-a__name">{label}</span>
                </a>
            </li>
            ))}
        </ul>
    );

    return (
        <HeaderWrapper>
            <div className='upper-header'>
                <h1><Link to="#">Sergi Sanchez</Link></h1>
                <h3>Artificial Intelligence Engineer</h3>
                <p>
                    Computer Engineer and AI enthusiast, passionate about solving real-world
                     problems through Machine Learning and Computer Vision. 
                     Always learning, always building.
                </p>
                <nav>
                    {renderLinks()}
                </nav>
            </div>
            
            <div className='lower-header'>
                <a target='_blank' href='https://github.com/sergissh' rel="noreferrer" title='GitHub Repository'><GitHub /></a>
                <a target='_blank' href="https://www.linkedin.com/in/sergi-s%C3%A1nchez-hern%C3%A1ndez/" rel="noreferrer" title='Linkedin Profile'><Linkedin /></a>
            </div>
        </HeaderWrapper>
    )
}

export default Header;

const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 4rem 0;
    .upper-header{
        h1{
        line-height: 1.45;
        }
        h3{
            font-size: 1.5rem;
        }
        p{
            font-size: 1rem;
            margin-top: 1.6rem;
            max-width: 22rem;
            opacity: .75;
        }
    }
    nav{
        display: none;
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
    @media(min-width: 1025px){
        flex: 0 0 380px;
        height: 100vh;
        position: sticky;
        top: 0;
        padding: 6rem 0;
        nav{
            display: block;
        }
    }
    .lower-header{
        margin-top: 2rem;
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