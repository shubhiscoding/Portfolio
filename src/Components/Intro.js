import "../Styles/About.css";

const Intro = () => {
    return (
        <div className="Intro">
            <div class="line-styling">
                <div class="style-circle"></div>
                <div class="style-circle"></div>
                <div class="style-line"></div>
            </div>
            <div className="About">
                <div className="description">
                    <h2>Who I am</h2>
                    <p>
                    My name's Shubh. I'm a web designer and developer based in Bangalore, India.
                    <br></br>
                    <br></br>
                    I'm a first-year computer science student passionate about Web3, VR, game, app, and web development. I love exploring and growing my expertise across these exciting tech domains.
                    </p>
                </div>
                <div className="img">
                    <img src="https://dev-portfolio-template.netlify.app/static/media/orangeTheme-girl.d0ad58be.svg" alt="about-img" />   
                </div>
            </div>
        </div>
    );
};

export default Intro;