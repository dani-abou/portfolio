import { styled } from "styled-components";
import { FOOTER_BACKGROUND_COLOR, OTHER_BACKGROUND_COLOR } from "../../layout/style";
import media from "../../screenSizes";

export const StyledAboutDiv = styled.div`
  width: 100%;
  /* background-color: ${OTHER_BACKGROUND_COLOR}; */
  height: 780px;

background: rgb(8,25,43);
background: linear-gradient(180deg, rgba(8,25,43,1) 0%, rgba(43,127,193,1) 56%, rgba(50,149,220,1) 72%, rgba(0,212,255,1) 100%);

  /* mix-blend-mode: difference; */

  isolation: isolate;

  ${() => media.mobile(`
  padding-bottom: 140px;
`)}

  ${() => media.tablet(`
  padding-bottom: 140px;
`)}

  ${() => media.laptop(`
    height: 700px;
`)}

`



export const StyledAboutFlex = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  padding-left: 70px;
  padding-right: 70px;

  gap: 70px;
  box-sizing: border-box;

  ${() => media.mobile(`
    flex-direction: column;
    padding: 0;
    gap: 0px;
  `)}

    ${() => media.tablet(`
    flex-direction: column;
    padding: 0;
    gap: 0px;
  `)}
  ${() => media.laptop(`
    padding-left: 40px;
    padding-right: 40px;

  `)}

`

export const StyledPortrait = styled.img`
   --s: 15px;  /* size of the frame */
  --b: 2px;   /* border thickness */
  --c: ${FOOTER_BACKGROUND_COLOR};

  object-fit: cover;
  object-position: bottom;
  height: 600px;
  color: var(--c);
 
  
  width: 530px;
  aspect-ratio: 1;
  padding: calc(2*var(--s));
  --_g: var(--c) var(--b),#0000 0 calc(100% - var(--b)),var(--c) 0;
  background:
    linear-gradient(      var(--_g)) 50%/100% var(--_i,100%) no-repeat,
    linear-gradient(90deg,var(--_g)) 50%/var(--_i,100%) 100% no-repeat;
  outline: var(--b) solid;
  outline-offset: calc(var(--s)/-2);
  --_i: calc(100% - 2*var(--s));

  border-radius: 15px;

  ${() => media.mobile(`
    width: 80%;
  `)}

    ${() => media.tablet(`
    width: 80%;
  `)}

  ${() => media.laptop(`
    width: 350px;
    height: 480px;
  `)}

    ${() => media.desktop(`
    width: 450px;
    height: 510px;
  `)}
  
`

export const StyledBodyDiv = styled.div`
  flex: 1 1;

    ${() => media.mobile(`
    width: 90%;
  `)}

      ${() => media.tablet(`
    width: 90%;
  `)}
`

export const StyledParagraph = styled.p`
  font-family: 'Montserrat', sans-serif;
  /* font-weight: bold; */
  font-size: 20px;
  line-height:1.5;
  margin-bottom: 50px;

  ${() => media.mobile(`
    font-size: 18px;
    margin-bottom: 10px;
  `)}

    ${() => media.tablet(`
    font-size: 18px;
    margin-bottom: 10px;
  `)}
  ${() => media.laptop(`
    font-size: 18px;
    font-weight: normal;
    margin-bottom: 40px;
  `)}
`