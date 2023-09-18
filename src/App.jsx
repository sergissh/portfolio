import { useState, useEffect, useRef} from 'react'
import './css/App.css'
import Header from './components/Header';
import styled from 'styled-components';
import MainSection from './components/MainSection';
function App() {

const cursorRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (mouseEvent) => {
      if (!cursorRef.current) return;
      const scrollX = window.scrollX || window.pageXOffset;
      const scrollY = window.scrollY || window.pageYOffset;

      const clientX = mouseEvent.clientX + scrollX;
      const clientY = mouseEvent.clientY + scrollY;

      cursorRef.current.style.setProperty('--x', `${clientX}px`);
      cursorRef.current.style.setProperty('--y', `${clientY}px`);
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])
  const backStyles = {
    background: 'radial-gradient(600px at var(--x, 0px) var(--y, 0px), rgba(29, 78, 216, 0.15), transparent 80%)',
  }
  return (
    <div ref={cursorRef} style={backStyles}>
      <MainWrapper>
        <Header />
        <MainSection />
      </MainWrapper>
    </div>
  ) 
}

export default App;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 6rem;
`
