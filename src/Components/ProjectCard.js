import "../Styles/ProjectCard.css";
import { FaCode, FaPlay } from "react-icons/fa";
import { useRef } from "react";

const ProjectCard = ({ data }) => {
  const projectInfoRef = useRef(null);
  const techStackRef = useRef(null);
  const IMG = data.Img;
  const TITLE = data.title;
  const DESCRIPTION = data.description;
  const TECH_STACK = data.techStack;
  const LINK_CODE = data.linkCode;
  const LINK_DEMO = data.linkDemo;

  const handleMouseEnter = () => {
    projectInfoRef.current.style.opacity = "1";
    projectInfoRef.current.style.transform = "translateX(0)";
    document.querySelector(".buttonsCode").style.paddingRight = "0px";
    techStackRef.current.style.opacity = "1";
    techStackRef.current.style.display = "block";
    console.log("Mouse Enter");
  };

  const handleMouseLeave = () => {
    projectInfoRef.current.style.opacity = "0";
    projectInfoRef.current.style.transform = "translateX(-20px)";
    techStackRef.current.style.opacity = "0";
    techStackRef.current.style.display = "none";
    console.log("Mouse Leave");
  };

  return (
    <div className="project-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h1>{TITLE}</h1>
      <img src={IMG} alt="project" />
      <div className="project-info" ref={projectInfoRef}>
        <p>{DESCRIPTION}</p>
      </div>
      <div className="buttonsCode">
        <FaPlay className="play-icon" />
        <div className="code-icon-container">
        <FaCode className="code-icon" />
        </div>
        <div className="tech-stack" ref={techStackRef}>
          <p>{TECH_STACK}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
