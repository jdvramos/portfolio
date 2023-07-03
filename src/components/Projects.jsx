import Wrapper from "../assets/wrappers/Projects";
import TalkingDreamsBanner from "../assets/images/talking-dreams-banner.PNG";
import PlantaBanner from "../assets/images/planta-banner.PNG";
import PorfolioBanner from "../assets/images/portfolio-banner.PNG";
import { FaGithub } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";

const Projects = ({ projectsRef, scrollIntoNav }) => {
  return (
    <Wrapper ref={projectsRef}>
      <h2 className="section-title">projects</h2>
      <div className="projects-container">
        <div className="project-item highlighted-project">
          <div className="project-image">
            <img src={TalkingDreamsBanner} alt="" />
          </div>
          <span className="project-title">Talking Dreams</span>
          <p className="project-details">
            Talking Dreams is an interactive chat platform that enables seamless
            communication with your friends, allowing you to exchange messages
            in real-time.
          </p>
          <span className="feature-title">Main Features:</span>
          <ul className="app-features">
            <li>
              Real-time communication and instant notifications using Socket.IO.
            </li>
            <li>Ability to send and receive friend requests.</li>
            <li>Seamless sharing of images.</li>
            <li>Visibility of active friends.</li>
            <li>Indication when a friend is currently typing a message.</li>
            <li>Fully responsive design for optimal usage across devices.</li>
            <li>Secure authentication with JWT refresh and access tokens.</li>
          </ul>
          <div className="button-group">
            <a
              className="external-link"
              href="https://talking-dreams-frontend.onrender.com"
              target="_blank"
            >
              <IoGlobeOutline size={21} />
            </a>
            <a
              className="external-link"
              href="https://github.com/jdvramos/talking-dreams-frontend"
              target="_blank"
            >
              <FaGithub size={21} />
            </a>
          </div>
        </div>
        <div className="project-item">
          <div className="project-image">
            <img src={PlantaBanner} alt="" />
          </div>
          <span className="project-title">Planta</span>
          <p className="project-details">
            Clone of Planta website. Made using HTML, CSS, and JavaScript.
          </p>
          <div className="button-group">
            <a
              className="external-link"
              href="https://planta-clone.netlify.app/"
              target="_blank"
            >
              <IoGlobeOutline size={21} />
            </a>
            <a
              className="external-link"
              href="https://github.com/jdvramos/planta-clone"
              target="_blank"
            >
              <FaGithub size={21} />
            </a>
          </div>
        </div>
        <div className="project-item">
          <div className="project-image">
            <img src={PorfolioBanner} alt="" />
          </div>
          <span className="project-title">Portfolio</span>
          <p className="project-details one-liner">
            Made using styled-components.
          </p>
          <div className="button-group">
            <a className="external-link" onClick={scrollIntoNav}>
              <IoGlobeOutline size={21} />
            </a>
            <a
              className="external-link"
              href="https://github.com/jdvramos/portfolio"
              target="_blank"
            >
              <FaGithub size={21} />
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Projects;
