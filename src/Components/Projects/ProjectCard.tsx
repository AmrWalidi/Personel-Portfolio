import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

interface ProjectObj {
  title: string;
  summary: string;
  type: string;
  languages: string;
  URL: string;
  image: string;
}

function ProjectCard(project: ProjectObj) {
  return (
    <div className="card">
      <img className="image" src={project.image} alt={project.title} />
      <div className="card-context">
        <div>
          <p className="project-type">{project.type + " project"}</p>
          <p className="side-text">Click to view</p>
        </div>
        <div className="openedLink-container">
          <FontAwesomeIcon className="icon" icon={faArrowUpRightFromSquare} />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
