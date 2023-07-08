import { styled } from "styled-components";
import { FOOTER_BACKGROUND_COLOR, OTHER_BACKGROUND_COLOR, SECONDARY_COLOR } from "../../layout/style";

export const StyledAboutDiv = styled.div`
  width: 100%;
  background-color: ${OTHER_BACKGROUND_COLOR};
  height: 780px;
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

`

export const StyledPortrait = styled.img`
   --s: 15px;  /* size of the frame */
  --b: 2px;   /* border thickness */
  --w: 530px; /* width of the image */
  --c: ${FOOTER_BACKGROUND_COLOR};

  flex: 0 0 var(--w);
  object-fit: cover;
  object-position: bottom;
  height: 600px;
  color: var(--c);
 
  
  width: var(--w);
  aspect-ratio: 1;
  padding: calc(2*var(--s));
  --_g: var(--c) var(--b),#0000 0 calc(100% - var(--b)),var(--c) 0;
  background:
    linear-gradient(      var(--_g)) 50%/100% var(--_i,100%) no-repeat,
    linear-gradient(90deg,var(--_g)) 50%/var(--_i,100%) 100% no-repeat;
  outline: var(--b) solid;
  outline-offset: calc(var(--s)/-2);
  --_i: calc(100% - 2*var(--s));
  filter: hue-rotate(-25deg) ;

  border-radius: 15px;
`

export const StyledBodyDiv = styled.div`
  flex: 1 1;
`

export const StyledParagraph = styled.p`
  text-align: right;
`