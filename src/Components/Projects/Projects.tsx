import { useState } from "react";
import Header from "../Header";
import ProjectsList from "./ProjectList";
import { ProjectsDetails, ProjectsObj } from "../../Data";
import Popup from "./Popup";

function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    ProjectsObj | undefined
  >(undefined);

  function handleClick(e: React.MouseEvent, index: number) {
    const dots = document.querySelectorAll(".dot");
    const slide = document.getElementById("project-list");
    if (slide != null) {
      slide.style.transform = "translateX(-" + index * 40 + "%)";
    }
    dots.forEach((x) => x.classList.remove("dot-active"));
    e.currentTarget.classList.add("dot-active");
  }

  return (
    <div id="projects">
      <Header backgroundText="Projects" title="Recent Work" />
      <div className="slider">
        <ProjectsList setState={setSelectedProject} />
        <div className="slider-indicator">
          {ProjectsDetails.map((_, index) => (
            <div
              key={index}
              className={"dot" + (index === 0 ? " dot-active" : "")}
              onClick={(e) => handleClick(e, index)}
            ></div>
          ))}
        </div>
      </div>
      {selectedProject != undefined && (
        <Popup setState={setSelectedProject} pro={selectedProject} />
      )}
    </div>
  );
}

export default Projects;
