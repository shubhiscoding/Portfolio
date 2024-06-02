import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { useEffect, useState } from "react";
import ProjectCard from "../Components/ProjectCard";
import "../Styles/AllProjects.css";

const AllProjects = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

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
        {
        title: "Morph Explorer Bot",
        description:
            "A Telegram bot simplifying blockchain exploration for newcomers.",
        techStack: "Python, Telegram API",
        linkCode: "https://github.com/shubhiscoding/Morph-explorer",
        linkDemo: "https://t.me/Morph_explorer_bot",
        Img: "https://dev-portfolio-template.netlify.app/static/media/seven.3168c0a5.svg",
        },
        {
        title: "HODLERS",
        description: "Hodlers is a non custodial Crypto wallet for everyone",
        techStack: "React, Solidity, Web3",
        linkCode: "https://github.com/shubhiscoding/HODLERS",
        linkDemo: "https://hodlers-gilt.vercel.app/",
        Img: "https://i.ibb.co/T1NGK3B/wallet.png",
        },
        {
        title: "BookApp",
        description: "A Frontend protoype for Book sharing app.",
        techStack: "Kotlin, Android Studio",
        linkCode: "https://github.com/shubhiscoding/Bookapp",
        linkDemo: "https://github.com/shubhiscoding/Bookapp",
        Img: "https://dev-portfolio-template.netlify.app/static/media/four.797cac62.svg",
        },
    ];

  useEffect(() => {
    const filteredProjects = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filteredProjects);
  }, [search]);

  return (
    <div className="AllProject">
      <div className="AllProjectHead">
        <Link to="/">
          <AiOutlineHome className="home-btn" />
        </Link>
        <h1>Projects</h1>
      </div>

      <div className="projectPage-container">
        <div className="projectPage-search">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search project..."
            className="input-white-placeholder"
          />
        </div>
        <div className="project-container">
          {filteredData.length > 0
            ? filteredData.map((item, index) => (
                <ProjectCard key={index} data={item} />
              ))
            : data.map((item, index) => (
                <ProjectCard key={index} data={item} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
