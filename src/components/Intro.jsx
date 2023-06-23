import Wrapper from "../assets/wrappers/Intro";
import Wave from "../assets/images/waving-hand.PNG";
import Me from "../assets/images/my-image.JPG";
import { AiOutlineFileText } from "react-icons/ai";
import { IoHammerOutline } from "react-icons/io5";

const Intro = ({ scrollIntoProjects }) => {
    return (
        <Wrapper>
            <div className="intro-text">
                <div className="greeting">
                    <img src={Wave} alt="waving hand emoji" />
                    <p>Hello there!</p>
                </div>
                <p className="name">
                    I'm{" "}
                    <span className="highlight-color">
                        Jonn Denzel V. Ramos
                    </span>
                </p>
                <p className="short-description">
                    I design & develop attractive, functional websites.
                </p>
                <div className="button-group">
                    <a
                        className="intro-button github"
                        onClick={scrollIntoProjects}
                    >
                        Projects
                        <IoHammerOutline className="button-icon" size={16} />
                    </a>
                    <a
                        className="intro-button resume"
                        href="mailto:jonndenzelramos@gmail.com"
                    >
                        Resume
                        <AiOutlineFileText className="button-icon" size={16} />
                    </a>
                </div>
            </div>
            <div className="image-container">
                <img src={Me} alt="portfolio image" />
            </div>
        </Wrapper>
    );
};

export default Intro;
