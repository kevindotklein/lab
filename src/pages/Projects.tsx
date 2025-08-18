import type { CSSProperties } from "styled-components";
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

  return (
    <div style={projectsWrapper}>
      <ProjectCard title={"test1"}>
        <p>aaa</p>
        <a href="/#">lasdjfljkasd</a>
        <p>lfjsldçfj</p>
      </ProjectCard>


      <ProjectCard title={"test1"}>
        <p>aaa</p>
        <a href="/#">lasdjfljkasd</a>
        <p>lfjsldçfj</p>
      </ProjectCard>


      <ProjectCard title={"test1"}>
        <p>aaa</p>
        <a href="/#">lasdjfljkasd</a>
        <p>lfjsldçfj</p>
      </ProjectCard>
    </div>
  );
}
