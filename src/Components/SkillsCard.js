import "../Styles/SkillsCard.css";

const SkillsCard = ({data}) => {
    const imgURL = data['imgURL'];
    const Skill = data['Skill'];
    return (
        <div className="skills-card">
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Teko:wght@300..700&display=swap');
            </style>
            <img src={imgURL} alt="skills" />
            <h3>{Skill}</h3>
        </div>
    );
}
export default SkillsCard;