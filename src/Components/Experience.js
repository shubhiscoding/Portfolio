import "../Styles/Experience.css";

const Experience = () => {

    const experienceData = [
        {
            duration: "May 2021 - Present",
            position: "Software Developer",
            company: "Company 1",
        },
        {
            duration: "May 2021 - Present",
            position: "Software Developer",
            company: "Company 2",
        },
        {
            duration: "May 2021 - Present",
            position: "Software Developer",
            company: "Company 3",
        }
    ]

    return (
        <div className="Experience">
            <div className="experience-image">
                <img src="https://dev-portfolio-template.netlify.app/static/media/expOrange.9383b2df.svg" alt="experience" />
            </div>
            <div className="experience-card-content">
                <h1>Experience</h1>
                {experienceData.map((item, index) => (

                    <div key={index} className="experience-card">
                        <div className="experience-card-image">
                            <img src="https://dev-portfolio-template.netlify.app/static/media/expImgWhite.0b896d9c.svg" alt="experience" />
                        </div>
                        <div className="experience-card-text">
                            <h4>{item.duration}</h4>
                            <h2>{item.position}</h2>
                            <p>{item.company}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Experience;