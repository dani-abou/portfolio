import { Link } from "react-router-dom";
import { styled } from "styled-components";
import media from "../screenSizes";
import {
  BACKGROUND_COLOR,
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

  background-color: #436284;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");

${() => media.mobile(`
  height: 490px;
  flex-direction: column-reverse;
  padding: 0;
  align-items: center;
  justify-content: flex-end;
`)}

${() => media.tablet(`
  height: 490px;
  flex-direction: column-reverse;
  padding: 0;
  align-items: center;
  justify-content: flex-end;
`)}

${() => media.laptop(`
    padding-left: 80px;
    padding-right: 80px;
`)}

`

export const StyledNavigateContainer = styled.div`
  flex: 1 0;

  ${() => media.mobile(`
    text-align: center;
  `)}
    ${() => media.tablet(`
    text-align: center;
  `)}
`

export const StyledNameContainer = styled.div`
  flex: 1 0;
  text-align: right;

  ${() => media.mobile(`
    text-align: center;
  `)}
    ${() => media.tablet(`
    text-align: center;
  `)}

  
`

export const StyledVolcanoContainer = styled.div`
  flex: 1 0;
  height: 100%;
  position: relative;
  /* padding-top: 35px; */
  ${() => media.mobile(`
    display: none;
  `)}
    ${() => media.tablet(`
    display: none;
  `)}
`

export const StyledVolcanoContainerMobile = styled(StyledVolcanoContainer)`
  display: none;
  ${() => media.mobile(`
    display: block;
    flex: 1 0 100px;
  `)}
    ${() => media.tablet(`
    display: block;
    flex: 1 0 100px;
  `)}
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

  ${() => media.mobile(`
    width: 100%;
  `)}
    ${() => media.tablet(`
    width: 100%;
  `)}
`

export const StyledFooterName = styled(StyledFooterTitle)`
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
    font-size: 10px;

  padding-bottom: 4px;

  overflow: hidden;
  background-color: ${BACKGROUND_COLOR};
` 