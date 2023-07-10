import { useState, useEffect } from "react";
import { PROJECTS } from "../../data/projects";
import Page from "../../layout";
import {
  StyledDescriptionLine,
  StyledGoButton,
  StyledProjectContainer,
  StyledProjectImage,
  StyledProjectInfoContainer,
  StyledSubtitle,
  StyledTitle
} from "./style";

export default function Projects() {

  const [darken, setDarken] = useState(undefined);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <Page>

    {PROJECTS.map((project, index) => {
      return <StyledProjectContainer key={project.id}
        onMouseOver={() => setDarken(index)}
        onMouseLeave={() => setDarken(undefined)}
        $darken={darken !== undefined && darken !== index}
        href={project.github}
        target='_blank'
        $inverted={index % 2 === 1}
      >

        <StyledProjectImage
          src={`images/projects/${project.img}`}
          alt={`project-${project.id}`}
          loading="lazy"
        />
        <StyledProjectInfoContainer>
          <div>

            <StyledTitle>{project.title}</StyledTitle>
            <StyledSubtitle>{project.subtitle}</StyledSubtitle>
            <br />
            {project.description.map((line, lIndex) => {
              return <StyledDescriptionLine key={project.id + '-' + lIndex}>
                {line}
              </StyledDescriptionLine>
            })}
          </div>
          <StyledGoButton
            $inverted={index % 2 === 1}
          >
            * Click to see repo
          </StyledGoButton>
        </StyledProjectInfoContainer>
      </StyledProjectContainer>
    })}


    <br /><br />
  </Page >
}