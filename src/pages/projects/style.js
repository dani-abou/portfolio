import { styled } from "styled-components";
import { FOOTER_BACKGROUND_COLOR, SECONDARY_COLOR, TEXT_COLOR } from "../../layout/style";
import media from "../../screenSizes";

export const StyledProjectContainer = styled.a`
  width: 80%;
  min-height: 400px;
  margin: 40px auto 0 50%;
  transform: translate(-50%);
  background-color: ${FOOTER_BACKGROUND_COLOR};
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  color: ${TEXT_COLOR};
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: ${props => props.$inverted ? 'row-reverse' : 'row'};
  padding: 40px 40px;
  box-sizing: border-box;
  gap: 50px;
  align-items: center;

  transition: all 0.2s ease-out;

  ${() => media.mobile(`
    flex-direction: column;
    width: 95%;
    padding: 40px 15px;

  `)}


  ${() => media.tablet(`
    flex-direction: column;
    width: 95%;
  `)}

  ${() => media.laptop(`
    width: 95%;
    gap: 30px;

  `)}

    ${() => media.desktop(`
    width: 90%;

  `)}
  

  &:hover {
    box-shadow: 0px 4px 8px darkgray;
    /* margin-bottom: 4px; */
    /* border: 1px solid #cccccc; */
    filter: brightness(110%);
  }
  ${props => props.$darken && `filter: brightness(90%);`}

background-color: #436284;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.17' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
`

export const StyledProjectImage = styled.img`
  flex: 0 0 40%;
  width: 40%;
  /* align-self: stretch; */
  object-fit:cover;
  aspect-ratio: 5 / 4;
  border-radius: 8px;

  ${() => media.mobile(`
    width: 85%;
    margin-top: 10px;
  `)}

    ${() => media.tablet(`
    width: 85%;
    margin-top: 10px;
  `)}

  ${() => media.laptop(`
    width: 50%;
  `)}

`

export const StyledProjectInfoContainer = styled.div`
  flex: 1 0;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 0;

`

export const StyledTitle = styled.p`
  /* color: ${SECONDARY_COLOR}; */
  font-size: 34px;
  margin: 0;
  filter: saturate(180%);
  line-height: 1.2;
`

export const StyledSubtitle = styled(StyledTitle)`
  font-size: 23px;
  line-height: 1.2;

`

export const StyledDescriptionLine = styled.p`
  line-height: 1.5;
`

export const StyledGoButton = styled.p`
  text-align: right;
  color:${SECONDARY_COLOR};
  font-weight: 700;
  filter: brightness(150%) saturate(70%) contrast(150%);
  margin: 0;
`
