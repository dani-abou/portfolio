import {
  StyledAboutDiv,
  StyledAboutFlex,
  StyledBodyDiv,
  StyledParagraph,
  StyledPortrait,
} from "./aboutStyle"

const ABOUT_ME = [
  `3+ years of experiences`,
  `BS in Computer Science and Music Technology from Northeastern University`,
  `Full Stack developer, specializing in React and nodeJs`,
  `Born and raised in Boston, based in Brooklyn as of September 1st`,
  `Passioniate musician -- I play guitar and bass, and I currently write, perform, and manage my band Astroidiot :)`,
  `Currently seeking employment!`
]

export default function About() {
  return <StyledAboutDiv id='about'>
    <StyledAboutFlex>
      <StyledPortrait src='images/portrait.jpg' alt='portrait' />
      <StyledBodyDiv>
        {ABOUT_ME.map((paragraph, index) => {
          return <StyledParagraph key={index}>
            {paragraph}
          </StyledParagraph>
        })}
      </StyledBodyDiv>
    </StyledAboutFlex>


  </StyledAboutDiv>
}

