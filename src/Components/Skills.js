import React from "react";
import SkillsCard from "./SkillsCard";
import Marquee from "react-fast-marquee";
import "../Styles/Skills.css";

const data = [
    {
        imgURL: "https://dev-portfolio-template.netlify.app/static/media/javascript.e9360603.svg",
        Skill: "JavaScript"
    },
    {
        imgURL: "https://dev-portfolio-template.netlify.app/static/media/react.2b6a0717.svg",
        Skill: "React"
    },
    {
        imgURL: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
        Skill: "Java"
    },
    {
        imgURL: "https://docs.soliditylang.org/en/latest/_images/solidity_logo.svg",
        Skill: "Solidity"
    },
    {
        imgURL: "https://dev-portfolio-template.netlify.app/static/media/css.43b6f4bd.svg",
        Skill: "CSS"
    },
    {
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg",
        Skill: "C#"
    },
    {
        imgURL: "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg",
        Skill: "Python"
    },
    {
        imgURL: "https://dev-portfolio-template.netlify.app/static/media/html.6a342d61.svg",
        Skill: "HTML"
    },
    {
        imgURL: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
        Skill: "Spring Boot"
    }
];

const Skills = () => {
    return (
        <div className="skill" id="Skills">
            <h1>Skills</h1>
            <Marquee 
                gradient={false} 
                speed={80} 
                pauseOnHover={true}
                pauseOnClick={true} 
                delay={0}
                play={true} 
                direction="left"
            >
                {data.map((item, index) => (
                    <SkillsCard key={index} data={item} />
                ))}
            </Marquee>
        </div>
    );
};

export default Skills;
