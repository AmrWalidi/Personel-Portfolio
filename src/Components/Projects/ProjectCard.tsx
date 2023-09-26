import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function ProjectCard({ pro, setSelectedProject }) {
  return (
    <div id="card" className="card">
      <img className="image" src={pro.image} alt={pro.title} />
      <div className="card-context">
        <div>
          <p className="project-type">{pro.type + " project"}</p>
          <p className="side-text">Click to view</p>
        </div>
        <div
          className="openedLink-container"
          onClick={() => setSelectedProject(pro)}
        >
          <FontAwesomeIcon className="icon" icon={faArrowUpRightFromSquare} />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
