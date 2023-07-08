import { Link } from "react-router-dom";
import { styled } from "styled-components";
import {
  FOOTER_BACKGROUND_COLOR,
  SECONDARY_COLOR,
  TEXT_COLOR
} from "./style";

export const StyledFooterContainer = styled.div`
  background-color: ${FOOTER_BACKGROUND_COLOR};
  height: 270px;
  width: 100%;
  display: flex;  
  justify-content: center;
  align-items: start;

  box-sizing: border-box;
  padding-left: 150px;
  padding-right: 150px;

  overflow: hidden;

`

export const StyledNavigateContainer = styled.div`
  flex: 1 0;
`

export const StyledNameContainer = styled.div`
  flex: 1 0;
`

export const StyledVolcanoContainer = styled.div`
  flex: 1 0;
  height: 100%;
  position: relative;
  /* padding-top: 35px; */
`

export const StyledVolcano = styled.img`
  height: 130px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

export const StyledFooterTitle = styled.p`
  font-size: 35px;
  color: ${SECONDARY_COLOR};
  margin-bottom: 15px;
`

export const StyledFooterLink = styled(Link)`
  display: block;
  font-size: 20px;
  color: ${TEXT_COLOR};
  margin-bottom: 10px;
  text-decoration: none;
  width: max-content;
  
  &:hover {
    filter: brightness(80%);
  }
`

export const StyledFooterName = styled(StyledFooterTitle)`
  text-align: right;

`

export const StyledFooterEmail = styled(Link)`
  font-size: 20px;
  width: max-content;
  color: ${TEXT_COLOR};
  &:hover {
    filter: brightness(80%);
  }
  

`

export const StyledCopyrightContainer = styled.div`
  width: 100%;
  text-align: center;
  height: 25px;

  overflow: hidden;
`