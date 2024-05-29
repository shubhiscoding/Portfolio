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
                    <lottie-player src="https://lottie.host/db6661f8-68b6-4867-9d62-66c6d592e3a7/9TaMC46L5s.json" background="transparent" speed="1" style={{ width: '30vw', height: '40vh' }}  loop autoplay direction="1" mode="normal"></lottie-player>
                </div>
            </div>
        </div>
    );
};

export default Intro;