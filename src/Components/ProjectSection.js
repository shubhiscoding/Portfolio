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
      description: "Lets's User view and compare statistic of any spotify artists",
      techStack: "JavaScript, HTML, CSS",
      linkCode: "https://github.com/shubhiscoding/Spotify-Stats",
      linkDemo: "https://shubhiscoding.github.io/Spotify-Stats/Index.html",
      Img: "https://dev-portfolio-template.netlify.app/static/media/three.d4f751d1.svg",
    },
  ];
  return (
    <div className="ProjectSection">
      {data.map((item, index) => (
        <ProjectCard
          key={index}
          data={item}
        />
      ))}
    </div>
  );
};

export default ProjectSection;
