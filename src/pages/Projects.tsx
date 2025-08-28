import { styled, type CSSProperties } from "styled-components";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projectsWrapper: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "center",
    justifyContent: "center",
    marginTop: "2.5rem",
    gap: "2rem",
  };

  const PAbout = styled.p`
    font-size: 1.2rem;
  `;

  return (
    <div style={projectsWrapper}>
      <ProjectCard title={"bazooka"}>
        <h2>a parser combinator library written in erlang</h2>
        <span style={{ fontSize: "1.2rem" }}>check the github repo: </span>
        <a
          style={{ fontSize: "1.2rem" }}
          href="https://github.com/kevindotklein/bazooka"
          target="_blank"
        >
          https://github.com/kevindotklein/bazooka
        </a>
        <PAbout>
          check the <strong>/examples/json</strong> dir inside the repo to see a
          fully working json parser
        </PAbout>
      </ProjectCard>
    </div>
  );
}
