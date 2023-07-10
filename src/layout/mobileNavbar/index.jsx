import { useState } from "react"
import {
  StyledHamburgerButton,
  StyledHamburger,
  StyledMobileNav,
  StyledTitleContainer,
  StyledNameContainer,
  StyledEmailContainer,
  StyledMobileNavContainer,
  StyledNavItemContainer,
  StyledCloseButton
} from "./style"


const DROPDOWN_OPTIONS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/projects' },

  { label: 'dabouhamad@gmail.com', href: 'mailto: dabouhamad@gmail.com' },
  { label: '+1 (857) 294-3264', href: 'tel:857-294-3264' },
  {
    label: 'LinkedIn', href: 'https://www.linkedin.com/in/dani-abouhamad/',
    props: {
      target: "_blank",
      rel: "noopener noreferrer"
    }
  },
  {
    label: 'Instagram', href: 'https://www.instagram.com/dabouboo',
    props: {
      target: "_blank",
      rel: "noopener noreferrer"
    }
  },
  {
    label: 'Github', href: 'https://github.com/dani-abou',
    props: {
      target: "_blank",
      rel: "noopener noreferrer"
    }
  },
  {
    label: 'Resume', href: 'Resume.pdf',
    props: {
      target: "_blank",
      rel: "noopener noreferrer"
    }
  }
]


export default function MobileNavbar({ scrollToAbout }) {
  const [showNav, setShowNav] = useState(false);

  return <StyledMobileNavContainer>

    <StyledHamburgerButton onClick={() => setShowNav(true)}>
      <StyledHamburger
        alt='hamburger'
        src='images/hamburger.png'
      />
    </StyledHamburgerButton>
    <StyledMobileNav $show={showNav}>
      <div style={{ width: '100vw' }}>
        <StyledCloseButton
          src='images/close.png'
          alt='mobile-navbar-close'
          onClick={() => setShowNav(false)}
        />
        <StyledTitleContainer>
          <StyledNameContainer to='/'>Dani Abouhamad</StyledNameContainer>
          <StyledEmailContainer href='mailto: dabouhamad@gmail.com'>dabouhamad@gmail.com</StyledEmailContainer>
        </StyledTitleContainer>

        {DROPDOWN_OPTIONS.map(option => {
          return <StyledNavItemContainer
            to={option.href}
            onClick={() => {
              setShowNav(false);
              option.label === 'About' && scrollToAbout()
            }}
            key={option.label}

            {...option.props}
          >
            {option.label}
          </StyledNavItemContainer>
        })}
      </div>


    </StyledMobileNav>
  </StyledMobileNavContainer>
}

