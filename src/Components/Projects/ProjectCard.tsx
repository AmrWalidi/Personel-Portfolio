import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { ProjectsObj } from "../../Data";

export interface componentProp {
  pro: ProjectsObj;
  setState: React.Dispatch<React.SetStateAction<ProjectsObj | undefined>>;
}

function ProjectCard({ pro, setState }: componentProp) {
  return (
    <div id="card" className="card">
      <img className="image" src={pro.image} alt={pro.title} />
      <div className="card-context">
        <div>
          <p className="project-type">{pro.type + " project"}</p>
          <p className="side-text">Click to view</p>
        </div>
        <div className="openedLink-container" onClick={() => setState(pro)}>
          <FontAwesomeIcon className="icon" icon={faArrowUpRightFromSquare} />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
