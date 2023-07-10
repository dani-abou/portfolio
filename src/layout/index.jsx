import { useEffect, useRef, useState } from "react";
import Footer from "./footer";
import {
  StyledButtonGroup,
  StyledChildren,
  StyledDownloadImg,
  StyledDropdown,
  StyledEmailContainer,
  StyledGuitar,
  StyledGuitarContainer,
  StyledHover,
  StyledNameContainer,
  StyledNavButtonText,
  StyledNavbarButton,
  StyledNavbarContainer,
  StyledOption, StyledOptionLabel,
  StyledPage, StyledTitleContainer
} from "./style";
import MobileNavbar from "./mobileNavbar";

export function NavButton({ children, className, dropdownButton, ...props }) {
  const [hover, setHover] = useState(false)

  return <StyledNavbarButton
    onMouseOver={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    className={className}
    {...props}>
    <StyledNavButtonText>
      {children}
    </StyledNavButtonText>
    <StyledHover $hover={hover} ref={dropdownButton} />
  </StyledNavbarButton>
}

function Navbar({ scrollToAbout, dropdownButton, setShowDropdown }) {

  return <StyledNavbarContainer>
    <StyledTitleContainer>
      <StyledNameContainer to='/'>Dani Abouhamad</StyledNameContainer>
      <StyledEmailContainer href='mailto: dabouhamad@gmail.com'>dabouhamad@gmail.com</StyledEmailContainer>
    </StyledTitleContainer>
    <StyledGuitarContainer to='/'>
      <StyledGuitar src="images/guitar.png" alt='guitar' />
    </StyledGuitarContainer>
    <StyledButtonGroup>
      <NavButton to='/#about' onClick={() => scrollToAbout && scrollToAbout()}>
        About
      </NavButton>
      <NavButton to='/projects'>
        Projects
      </NavButton>
      <NavButton dropdownButton={dropdownButton} onClick={() => setShowDropdown(prev => !prev)}>
        Contact
      </NavButton>
    </StyledButtonGroup>
  </StyledNavbarContainer>
}

const DROPDOWN_OPTIONS = [
  { label: 'dabouhamad@gmail.com', href: 'mailto: dabouhamad@gmail.com' },
  { label: '+1 (857) 294-3264', href: 'tel:857-294-3264' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dani-abouhamad/' },
  { label: 'Instagram', href: 'https://www.instagram.com/dabouboo' },
  { label: 'Github', href: 'https://github.com/dani-abou' },
  {
    label: <>Resume{' '}<StyledDownloadImg src='images/download.png' alt='download' /></>, href: 'Resume.pdf',
    props: {
      download: true
    }
  }
]

function ContactDropdown({ show, position, dropdownRef }) {
  return <StyledDropdown
    ref={dropdownRef}
    $show={show}
    $top={position ? position?.top + position?.height : 0}
    $right={position?.right || 0}
    $width={position?.width || 0}
  >
    {DROPDOWN_OPTIONS.map(option => {
      return <Option option={option} key={option.label} />
    })}
  </StyledDropdown>
}

function Option({ option }) {
  const [hovered, setHovered] = useState(false);
  return <StyledOption
    onMouseOver={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    $hovered={hovered}
    key={option.label}
    href={option.href}
    target="_blank"
    {...option.props}
  >
    <StyledOptionLabel>
      {option.label}
    </StyledOptionLabel>
  </StyledOption>
}



export default function Page({ children, scrollToAbout }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownButton = useRef(null);
  const dropdownRef = useRef(null)
  const [refRect, setRefRect] = useState(undefined)


  useEffect(() => {
    setRefRect(dropdownButton?.current?.getBoundingClientRect())
  }, [dropdownButton])

  //Closes dropwdown when clicked outside
  const handleClickOutside = (event) => {

    if (
      showDropdown &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      dropdownButton.current &&
      !dropdownButton.current.contains(event.target)
    ) {
      setShowDropdown(false);
    }
  };

  return <StyledPage onClick={handleClickOutside}>
    <MobileNavbar scrollToAbout={scrollToAbout} />

    <Navbar scrollToAbout={scrollToAbout} dropdownButton={dropdownButton} setShowDropdown={setShowDropdown} />
    <ContactDropdown show={showDropdown}
      position={refRect}
      dropdownRef={dropdownRef}
    />
    <StyledChildren>
      {children}
    </StyledChildren>
    <Footer scrollToAbout={scrollToAbout} />
  </StyledPage>
}

