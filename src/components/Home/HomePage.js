import homepageVideo from "../../assets/video-homepage.mp4";
import "./HomePage.scss";

const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <div className="video-container">
                <video autoPlay loop muted>
                    <source src={homepageVideo} type="video/mp4" />
                </video>
            </div>
            <div className="homepage-content">
                <h1 className="homepage-title">
                    Forms
                    <br />
                    that break
                    <br />
                    the norn
                </h1>
                <h5 className="homepage-text">
                    Get more data—like signups, feedback, and anything else—with
                    forms designed to be{" "}
                    <strong>refreshingly different.</strong>
                </h5>
                <button className="btn btn-dark btn-lg">
                    Get started—it's free
                </button>
            </div>
        </div>
    );
};

export default HomePage;
