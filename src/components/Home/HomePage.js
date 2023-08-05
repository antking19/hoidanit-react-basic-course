import homepageVideo from "../../assets/video-homepage.mp4";

const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <div className="video-content">
                <video loop autoPlay>
                    <source src={homepageVideo} type="video/mp4" />
                </video>
            </div>
            <div className="homepage-content">
                <h1 className="homepage-title">
                    Forms
                    <br />
                    that break
                    <br />
                    the norm
                </h1>
                <h4 className="homepage-text">
                    Get more data—like signups, feedback, and anything else—with
                    forms designed to be
                    <strong> refreshingly different.</strong>
                </h4>
                <button className="homepage-button btn btn-dark btn-lg">
                    Get started—it's free
                </button>
            </div>
        </div>
    );
};

export default HomePage;
