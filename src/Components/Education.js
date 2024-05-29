import "../Styles/Education.css";
import EducationCart from "./EducationCard";

const Education = () => {
    const data = [
        {
        duration: "2021-2023",
        course: "Higher Secondary Education",
        school: "Laurels International School, Prayagraj",
        },
        {
        duration: "2016-2018",
        course: "Higher Secondary Education",
        school: "Sri Chaitanya Junior College, Vijayawada",
        },
        {
        duration: "2023-Present",
        course: "Bachelor of Science in Computer Science",
        school: "Scaler School of Technology, Bangalore",
        }
    ]
  return (
    <div className="Education">
      <h1>Education</h1>
      <div className="educationContent">
        <div className="Education-Item">
            <EducationCart data={data[2]} />
            <EducationCart data={data[1]} />
            <EducationCart data={data[0]} />
        </div>
        <div className="educationCoverImg">
            <img
                src="https://dev-portfolio-template.netlify.app/static/media/eduOrange.c61dcfc3.svg"
                alt=""
            ></img>
        </div>
      </div>
    </div>
  );
};

export default Education;
