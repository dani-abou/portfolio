import { styled } from 'styled-components'
import { FOOTER_BACKGROUND_COLOR, TEXT_COLOR, BACKGROUND_COLOR, SECONDARY_COLOR } from '../style'
import media from '../../screenSizes'
import { Link } from 'react-router-dom'

export const StyledMobileNavContainer = styled.div`
  display:none;

  ${() => media.mobile(`
    display: block;
  `)}
   ${() => media.tablet(`
    display: block;
  `)}
`

export const StyledHamburgerButton = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color:${FOOTER_BACKGROUND_COLOR};
  box-shadow: 2px 2px 3px black;
  z-index: 10;

  cursor: pointer;

  &:active {
    box-shadow: none;
    transform: translateY(4px);
    filter: brightness(60%);
  }
`

export const StyledHamburger = styled.img`
  height: 65%;
  width: 50%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  filter: invert(80%);
`

export const StyledMobileNav = styled.div`
  height: 100%;
  width: 100%;
  background-color:${TEXT_COLOR};
  position:fixed;
  inset: 0 0 0 0;
  z-index: 11;
  color: ${BACKGROUND_COLOR};

  overflow-x: hidden;
  max-width: ${props => props.$show ? '100%' : '0px'};

  transition: max-width 0.5s ease;
`

export const StyledNameContainer = styled(Link)`
  font-size: 50px;
  margin: 0;
  margin-bottom: 10px;
  display:block;
  text-decoration: none;
  color: ${SECONDARY_COLOR};
`

export const StyledEmailContainer = styled.a`
  display: block;
  width: 100%;
  font-size: 25px;
  color: ${BACKGROUND_COLOR};
`

export const StyledTitleContainer = styled.div`
  width: 100%;
  margin-top: 60px;
  padding-left: 20px;
  padding-bottom: 30px;
`

export const StyledNavItemContainer = styled(Link)`
  display: block;
  width: 100%;
  padding: 20px;
  font-size: 20px;
  color:${BACKGROUND_COLOR};
  text-decoration: none;
`

export const StyledCloseButton = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;

  z-index: 10;

  cursor: pointer;

  &:active {
    transform: translateY(4px);
    filter: brightness(60%);
  }
`