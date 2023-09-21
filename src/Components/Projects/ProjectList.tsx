import ProjectCard from "./ProjectCard";
import { ProjectsDetails } from "../../Data";

function ProjectsList() {
  return (
    <div className="project-list">
      {ProjectsDetails.map((pro) => (
        <ProjectCard
          key={pro.title}
          title={pro.title}
          summary={pro.summary}
          languages={pro.languages}
          type={pro.type}
          URL={pro.URL}
          image={pro.image}
        />
      ))}
    </div>
  );
}

export default ProjectsList;
