import "../Styles/ProjectSection.css";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

const ProjectSection = () => {
  const data = [
    {
      title: "Tip A Tweet",
      description: "A website that can be used to tip any tweet using crypto.",
      techStack: "React, Solidity, Web3",
      linkCode: "https://github.com/shubhiscoding/Tip-A-Tweet",
      linkDemo: "https://tip-a-tweet.vercel.app/",
      Img: "https://dev-portfolio-template.netlify.app/static/media/one.a3146128.svg",
    },
    {
      title: "Course Registration System",
      description: "A course registration system for students.",
      techStack: "Java, Spring Boot, MySQL",
      linkCode: "https://github.com/shubhiscoding/Course-Registration-System",
      linkDemo: "https://github.com/shubhiscoding/Course-Registration-System",
      Img: "https://dev-portfolio-template.netlify.app/static/media/two.721a0672.svg",
    },
    {
      title: "Spotify Stats",
      description:
        "Lets's User view and compare statistic of any spotify artists",
      techStack: "JavaScript, HTML, CSS",
      linkCode: "https://github.com/shubhiscoding/Spotify-Stats",
      linkDemo: "https://shubhiscoding.github.io/Spotify-Stats/Index.html",
      Img: "https://dev-portfolio-template.netlify.app/static/media/three.d4f751d1.svg",
    },
  ];
  return (
    <div className="ProjectSectionParent" id="Projects">
      <h1>Projects</h1>
      <div className="ProjectSection">
        {data.map((item, index) => (
          <ProjectCard key={index} data={item} />
        ))}
      </div>
      <div className="ViewAllProjects">
        <a href="/projects">
          <button>
            View All
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 20 20"
              class="jss16"
              height="1.5em"
              width="1.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectSection;
