import { useMemo } from 'react';
import {
  StyledCopyrightContainer,
  StyledFooterContainer,
  StyledFooterEmail,
  StyledFooterLink,
  StyledFooterName,
  StyledFooterTitle,
  StyledNameContainer,
  StyledNavigateContainer,
  StyledVolcano,
  StyledVolcanoContainer, StyledVolcanoContainerMobile
} from "./footerStyle";

export default function Footer({ scrollToAbout }) {

  const year = useMemo(() => {
    const d = new Date();
    return d.getFullYear()
  }, [])

  return <><StyledFooterContainer>
    <StyledVolcanoContainerMobile>
      <StyledVolcano src='images/volcano.png' alt='volcano' />
    </StyledVolcanoContainerMobile>
    <StyledNavigateContainer>
      <StyledFooterTitle>Navigate</StyledFooterTitle>
      <StyledFooterLink
        to='/'
        onClick={() => window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })}
      >
        Home</StyledFooterLink>
      <StyledFooterLink to='/#about' onClick={scrollToAbout}>
        About</StyledFooterLink>
      <StyledFooterLink to='/projects'>Projects</StyledFooterLink>

    </StyledNavigateContainer>
    <StyledVolcanoContainer>
      <StyledVolcano src='images/volcano.png' alt='volcano' />
    </StyledVolcanoContainer>
    <StyledNameContainer>
      <StyledFooterName>Dani Abouhamad</StyledFooterName>
      <StyledFooterEmail to='mailto: dabouhamad@gmail.com'
      >dabouhamad@gmail.com</StyledFooterEmail>
      <br />
    </StyledNameContainer>

  </StyledFooterContainer>
    <StyledCopyrightContainer>
      Copyright © {year} Dani Abouhamad. All Rights Reserved
    </StyledCopyrightContainer >
  </>
}