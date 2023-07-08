import { Link } from "react-router-dom";
import { styled } from "styled-components";
import {
  BACKGROUND_COLOR, OTHER_BACKGROUND_COLOR,
  SECONDARY_COLOR,
  TEXT_COLOR
} from "../../layout/style";

export const StyledMainText = styled.p`
  text-align: center;
  font-size: 65px;
  margin-bottom: 0px;
  margin-top: 0px;
`

export const StyledSoundwave = styled.img`
  width: 85%;
  height: 300px;
  margin-left: 50%;
  transform: translate(-50%);
  margin-top: -10px;
`

export const StyledSoundwaveBackground = styled.div`
  width: 100%;
  /* background-image: linear-gradient(${BACKGROUND_COLOR} 74%, ${OTHER_BACKGROUND_COLOR}); */
  position: relative;
`

export const StyledCursor = styled.span`
  visibility: ${props => props.$visible ? 'visible' : 'hidden'};
  background-color: ${TEXT_COLOR};
  width: 7px;
  height: 70px;
  display: inline-block;
  margin-left: 5px;
  margin-top: 5px;
`

export const RedSpan = styled.span`
  color: #fb4a59;
`

export const StyledHireButton = styled.div`
  margin-left: 50%;
  transform: translate(-50%);
  width: 155px;
  height: 65px;
  padding: 0;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  visibility: ${props => props.$showButton ? 'visible' : 'hidden'};
  opacity: ${props => props.$showButton ? '100%' : '0%'};
  transition: opacity 2s;

  color: ${BACKGROUND_COLOR};

  &:focus { outline: none }

  &::before {
		position: absolute;
		top: 0; bottom: 0; right: 0; left: 0;
    transform: scaleX(1);
    transform-origin: left;
		background: ${SECONDARY_COLOR};
		mix-blend-mode: difference;
    border-radius: 10px;
		content: '';
    transition: transform .5s ease;
	}
  &::after {
		position: absolute;
		top: 0; bottom: 0; right: 0; left: 0;
    transform: scaleX(0);
    transform-origin: right;
		background: ${TEXT_COLOR};
		mix-blend-mode: overlay;
    border-radius: 10px;
		content: '';
    transition: transform .5s ease;
	}

  &:focus, &:hover { 
    &::before { 
      transform: scaleX(0);
      transform-origin: right;
    }
    &::after { 
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`

export const StyledHireButtonText = styled.p`
  text-align: center;
  font-size: 28.5px;
  margin: 0;
  width: max-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const StyledHireButtonTextNoEffect = styled(StyledHireButtonText)`
  /* color: ${BACKGROUND_COLOR}; */
  z-index: 2;

  /* :after { */
  /* } */
`

export const StyledHoverEffect = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0; top: 0;

  ${props => props.$hovered ?
    `transform: scaleX(1);
  transform-origin: bottom left;` :
    `transform: scaleX(0);
  transform-origin: bottom right;`
  }
  display: block;
  background-color: ${TEXT_COLOR};

  transition: transform .3s ease;
  overflow: hidden;
  z-index: 1;
    mix-blend-mode: difference;

`

export const StyledHoverEffect2 = styled(StyledHoverEffect)`
    ${props => props.$hovered ?
    `transform: scaleX(0);
  transform-origin: bottom right;` :
    `transform: scaleX(1);
  transform-origin: bottom left;`
  }

`


export const StyledLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 150px;
  align-items: center;
  height: 80px;
  background-color: #08192b;
  margin-top: -45px;
  z-index: 1000;
  position: relative;
`

export const StyledLink = styled.a`
  cursor: pointer;
  font-size: 20px;
  color: ${TEXT_COLOR};
`