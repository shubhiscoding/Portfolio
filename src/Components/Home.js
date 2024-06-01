import "../Styles/Home.css";
import profile from "../assets/profile.png";
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import NavBar from '../Components/NavBar';
const Home = () => {
  return (
    <div className="Home" id="Home">
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Marck+Script&display=swap');
        </style>
        <NavBar />
      <div className="container">
        <div className="left-red">
            <div className="social">
                <a href="https://x.com/LookWhatIbuild" className="icons" target="_blank" rel="noreferrer"><FaTwitter /></a>
                <a href="https://www.linkedin.com/in/shubh-kesharwani-29737427a/" className="icons" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a href="https://github.com/shubhiscoding" className="icons" target="_blank" rel="noreferrer"><FaGithub /></a>
            </div>
        </div>
        <div className="right-dark">
            <div className="content">
                <h3>Web developer</h3>
                <h1>Shubh Kesharwani</h1>
                <p>
                    Hello, I'm Shubh Kesharwani, a first-year computer science student passionate about Web3, VR, game, app, and web development. I love exploring and growing my expertise across these exciting tech domains.
                </p>
            </div>
            <div className="buttons">
                <button className="btn">Download CV</button>
                <button className="btn Contact">Contact</button>
            </div>
        </div>
      </div>
      <img className="profile" src={profile} alt="Profile Logo" />
    </div>
  );
};

export default Home;
