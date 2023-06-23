import Wrapper from "../assets/wrappers/Footer";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <Wrapper>
            <div className="footer-socials-container">
                <a
                    className="social-link"
                    href="https://github.com/jdvramos"
                    target="_blank"
                >
                    <FaGithub size={20} />
                </a>
                <a
                    className="social-link"
                    href="https://www.linkedin.com/in/jonn-denzel-ramos/"
                    target="_blank"
                >
                    <FaLinkedin size={20} />
                </a>
                <a
                    className="social-link"
                    href="https://www.facebook.com/jdvramos"
                    target="_blank"
                >
                    <FaFacebook size={20} />
                </a>
            </div>
            <p className="footer-text">
                &copy; 2023 Jonn Denzel V. Ramos. All Rights Reserved.
            </p>
        </Wrapper>
    );
};

export default Footer;
