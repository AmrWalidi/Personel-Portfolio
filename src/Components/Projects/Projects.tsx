import Header from "../Header";
import ProjectsList from "./ProjectList";

function Projects() {
  return (
    <div id="projects">
      <Header backgroundText="Projects" title="Recent Work" />
      <div className="slider">
        <ProjectsList />
      </div>
    </div>
  );
}

export default Projects;
