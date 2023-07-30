import HomePageVideo from "../../assets/video-homepage.mp4";

const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <div className="homepage-content">
                <div className="homepage-left">
                    <video loop autoPlay muted className="homepage-video">
                        <source src={HomePageVideo} />
                    </video>
                </div>
                <div className="homepage-right">
                    <h1 className="homepage-title">
                        Forms
                        <br />
                        that break
                        <br />
                        the norm
                    </h1>
                    <h2 className="homepage-text">
                        Get more data—like signups, feedback, and anything
                        else—with forms designed to be{" "}
                        <strong>refreshingly different.</strong>
                    </h2>
                    <button className="btn btn-dark btn-lg homepage-button">
                        Get started—it's free
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
