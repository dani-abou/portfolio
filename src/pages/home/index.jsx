import { useCallback, useEffect, useRef, useState } from "react";
import Page from "../../layout";
import About from "./about";

import {
  RedSpan, StyledCursor,
  StyledHireButton, StyledHireButtonText,
  StyledHireButtonTextNoEffect,
  StyledHoverEffect, StyledHoverEffect2,
  StyledLink,
  StyledLinks,
  StyledMainText, StyledSoundwave,
  StyledSoundwaveBackground
} from "./style";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * max - min) + min;
}

const TEXT = ['Hello!', `I'm _Dani`, 'a Web Developer.']

export default function Home() {
  const [index, setIndex] = useState([0, 0])
  const [showButton, setShowButton] = useState(false);

  const [buttonHover, setButtonHover] = useState(false);

  const aboutRef = useRef(null);

  const scrollTo = useCallback(() => window.scrollTo({
    top: aboutRef.current.offsetTop,
    behavior: 'smooth'
  }), [aboutRef])

  useEffect(() => {
    const typing = () => {
      //Set to false to end timeout recursion
      let loop = true

      setIndex(prev => {

        if (TEXT[prev[0]]?.length === undefined) {
          loop = false
          setShowButton(true);
        } else if (prev[1] === TEXT[prev[0]].length - 1) {
          //Go to next line
          if (prev[0] !== TEXT.length) {
            return [prev[0] + 1, 0]
            //End loop if no more line to go to
          } else {
            loop = false
          }
        }
        //Iterate through the current line
        return [prev[0], prev[1] + 1]
      });
      if (loop) setTimeout(typing, getRandomInt(100, 500));
    }
    setTimeout(typing, 1000);
  }, [])

  const [cursorVisibility, setCursorVisibility] = useState(true);


  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisibility(prev => !prev)
    }, 700);
    return () => clearInterval(interval);
  }, [])

  useEffect(() => {
    if (window.location.href.includes('#about') && aboutRef !== null) {
      scrollTo();
    }
  }, [aboutRef, scrollTo])

  return <Page scrollToAbout={scrollTo}>
    <div style={{ height: '330px', overflowX: 'hidden' }}>
      {TEXT.slice(0, index[0] + 1).map((line, i) => {
        const text = i !== index[0] ? line : line.substring(0, index[1])
        if (text.includes('_')) {
          const splitPoint = text.search('_');
          return <StyledMainText key={i}>{text.substring(0, splitPoint)}
            {text[splitPoint + 1] && <RedSpan>{text.substring(splitPoint + 1)}</RedSpan>}
          </StyledMainText>
        }
        return <StyledMainText key={i}>{text}
          {i === index[0] && <StyledCursor $visible={cursorVisibility} />}
        </StyledMainText>
      })}
      <br />

      <StyledHireButton
        onMouseOver={() => setButtonHover(true)}
        onMouseLeave={() => setButtonHover(false)}
        $showButton={showButton}
      >
        {/* <a
          style={{ height: '100%', width: '100%', color: 'inherit', backgroundColor: 'green' }}
          href='mailto: dabouhamad@gmail.com'
          onClick={() => console.log('clicked')}
        > */}

        {/* <StyledHoverEffect $hovered={buttonHover} /> */}
        {/* <StyledHoverEffect2 $hovered={buttonHover} opposite={true} /> */}

        <StyledHireButtonText >
          Hire Me!
        </StyledHireButtonText>
        {/* </a> */}


      </StyledHireButton>
    </div>
    <StyledSoundwaveBackground>
      <StyledSoundwave src='images/soundWave.svg' alt='sound wave' />
    </StyledSoundwaveBackground>

    <StyledLinks ref={aboutRef}>
      <StyledLink target="_blank" href='https://www.linkedin.com/in/dani-abouhamad/'>
        LinkedIn
      </StyledLink>
      <StyledLink target="_blank" href='https://github.com/dani-abou'>Github</StyledLink>
      <StyledLink target="_blank" href='Resume.pdf' download>Resume</StyledLink>
    </StyledLinks>
    <About />
  </Page>
}