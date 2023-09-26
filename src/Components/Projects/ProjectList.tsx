import ProjectCard from "./ProjectCard";
import { ProjectsDetails } from "../../Data";
import { createContext } from "react";

interface componentProp {
  title: string;
  summary: string;
  type: string;
  languages: string;
  URL: string;
  image: string;
}
export const ProjectContext = createContext<componentProp | undefined>(
  undefined
);

function ProjectsList({ setSelectedProject }) {
  return (
    <div id="project-list" className="project-list">
      {ProjectsDetails.map((project) => (
        <ProjectCard
          key={project.title}
          pro={project}
          setSelectedProject={setSelectedProject}
        />
      ))}
    </div>
  );
}

export default ProjectsList;
