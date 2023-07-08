import {
  StyledAboutDiv,
  StyledAboutFlex,
  StyledBodyDiv,
  StyledLinks,
  StyledParagraph,
  StyledPortrait
} from "./aboutStyle"

const ABOUT_ME = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse vel tempor erat, molestie pulvinar elit.Nunc sit amet turpis porta, euismod orci et, rutrum sem.Etiam eu pellentesque lorem.Sed sagittis rutrum felis id viverra.Maecenas elementum nisl et ligula semper interdum.Maecenas et purus porta, ultricies ligula et, finibus nulla.Sed commodo nisi non quam consectetur cursus.Sed ac erat dui.Vivamus vel auctor erat.Nunc id nisl mauris.Pellentesque aliquam pulvinar tortor.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Donec in ipsum nisl.`,
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel tempor erat, molestie pulvinar elit. Nunc sit amet turpis porta, euismod orci et, rutrum sem. Etiam eu pellentesque lorem. Sed sagittis rutrum felis id viverra. Maecenas elementum nisl et ligula semper interdum. Maecenas et purus porta, ultricies ligula et, finibus nulla. Sed commodo nisi non quam consectetur cursus. Sed ac erat dui. Vivamus vel auctor erat. Nunc id nisl mauris. Pellentesque aliquam pulvinar tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec in ipsum nisl.`
]

export default function About() {
  return <StyledAboutDiv id='about'>

    <StyledAboutFlex>
      <StyledPortrait src='images/portrait.jpg' alt='portrait' />
      <StyledBodyDiv>
        {ABOUT_ME.map((paragraph, index) => {
          return <StyledParagraph key={index}>
            {paragraph}
          </StyledParagraph>
        })}
      </StyledBodyDiv>
    </StyledAboutFlex>


  </StyledAboutDiv>
}

