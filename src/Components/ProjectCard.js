import "../Styles/ProjectCard.css";
import { FaCode, FaPlay } from "react-icons/fa";
import { useRef } from "react";

const ProjectCard = ({ data }) => {
  const projectInfoRef = useRef(null);
  const codeIconRef = useRef(null);
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
    codeIconRef.current.classList.add("active");
    codeIconRef.current.classList.remove("inactive");
    techStackRef.current.style.opacity = "1";
    techStackRef.current.style.display = "block";
    console.log("Mouse Enter");
  };

  const handleMouseLeave = () => {
    projectInfoRef.current.style.opacity = "0";
    projectInfoRef.current.style.transform = "translateX(-50px)";
    techStackRef.current.style.opacity = "0";
    techStackRef.current.style.display = "none";
    codeIconRef.current.classList.remove("active");
    codeIconRef.current.classList.add("inactive");

    console.log("Mouse Leave");
  };

  return (
    <div
      className="project-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1>{TITLE}</h1>
      <img src={IMG} alt="project" />
      <div className="project-info" ref={projectInfoRef}>
        <p>{DESCRIPTION}</p>
      </div>
      <div className="buttonsCode">
        <div className="demo-button">
        <FaPlay className="play-icon" />
        </div>
        <div className="code-icon-container" ref={codeIconRef}>
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
