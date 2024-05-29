import "../Styles/EducationCard.css";

const EducationCart = (data) => {
  const duration = data['data']['duration'];
  const course = data['data']['course'];
  const school = data['data']['school'];
  return (
    <div className="containerEducation">
      <div className="educationImg">
        <img
          src="https://dev-portfolio-template.netlify.app/static/media/eduImgWhite.ae822784.svg"
          alt=""
        ></img>
      </div>
      <div className="items">
        <h4>{duration}</h4>
        <h2>{course}</h2>
        <p>{school}</p>
      </div>
    </div>
  );
};

export default EducationCart;
