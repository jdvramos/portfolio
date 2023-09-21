import Wrapper from "../assets/wrappers/Intro";
import Wave from "/waving-hand.png";
import Me from "/my-image.jpg";
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
                    I&apos;m{" "}
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
                        href="https://drive.google.com/file/d/1AueYBivlNWZiO4xdCoPdKmBJIs7CeCAo/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
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
