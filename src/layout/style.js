import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const BACKGROUND_COLOR = '#0E2A47';
export const OTHER_BACKGROUND_COLOR = '#88cee8';
export const SECONDARY_COLOR = '#fb4a59';
export const TEXT_COLOR = '#fcfaf7';
export const FOOTER_BACKGROUND_COLOR = '#436284'

export const StyledPage = styled.div`
  width: 100vw;
  min-height: 90vh;
  background-color: ${BACKGROUND_COLOR};
  font-family: 'Doppio One', sans-serif;
  color: ${TEXT_COLOR};
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
`

export const StyledNavbarContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  padding-left: 70px;
  padding-right: 70px;

  box-sizing: border-box;
  justify-content: space-evenly;
  align-items: center;
`

export const StyledNameContainer = styled(Link)`
  font-size: 35px;
  margin: 0;
  margin-bottom: 10px;
  display:block;
  text-decoration: none;
  color: ${TEXT_COLOR};
`

export const StyledEmailContainer = styled.a`
  font-size: 20px;
  color: ${TEXT_COLOR};
`

export const StyledGuitarContainer = styled(Link)`
  position: relative;
  height: 100%;
  flex: 1 0 ;
  cursor: auto;
`

export const StyledGuitar = styled.img`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
  height: 65%;
  cursor: pointer;
`

export const StyledButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  justify-content: flex-end;
  flex: 1 0;
  align-items: center;

`

export const StyledNavbarButton = styled(Link)`
  width: 125px;
  height: 65px;
  color: ${TEXT_COLOR};
  text-decoration: none;
  border-radius: 10px;
  position: relative;
  padding: 0;
  overflow: hidden;

`

export const StyledNavButtonText = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 100;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  z-index: 10;
`

export const StyledHover = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${BACKGROUND_COLOR};
  z-index: 1;

  
  filter: brightness(${props => props.$hover ? '60%' : '85%'});

  transition: all 0.2s ease;

`

export const StyledDropdown = styled.div`
  position: absolute;
  top: ${props => props.$top + 'px' || 0};
  right: ${props => `calc(100vw - ${props.$right}px)`};
  margin-top: 10px;

  min-width: ${props => props.$width + 'px' || 0};
  width: 265px;

  background-color: ${TEXT_COLOR};
  /* display: ${props => props.$show ? 'block' : 'none'}; */

  /* clip: ${props => `rect(${props.$top + 'px'}, calc(100vw - ${props.$right}px), ${props.$top + 'px'}, calc(${props.$right}px-265px))`}; */
  /* clip: ${props => `rect(1, 2, 3, 5)`}; */

  /* transform: scaleY(${props => props.$show ? '0' : '1'});
  transform-origin:top;
  transition: transform 0.3s ease; */

  max-height: ${props => props.$show ? 'none' : '0px'};
  transition: max-height 0.3s ease;



  border-radius: 10px;
  overflow: hidden;
  
`


export const StyledOption = styled.a`
  width: 100%;
  height: 50px;
  color: black;
  display: block;
  position: relative;
  cursor: pointer;
  background-color: ${props => props.$hovered ? '#fb4a597F' : 'transparent'};
  transition: background-color 0.1s ease;
`

export const StyledOptionLabel = styled.div`
  margin-left: 15px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`

