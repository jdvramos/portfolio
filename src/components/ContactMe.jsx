import Wrapper from "../assets/wrappers/ContactMe";
import { RiMailSendLine } from "react-icons/ri";

const ContactMe = () => {
    return (
        <Wrapper>
            <h2 className="contact-primary-title">contact me</h2>
            <span className="contact-secondary-title">
                Let's make something great!
            </span>
            <p className="contact-description">
                If you have a project in mind that requires creativity and
                expertise, I'm here to help. Let's collaborate and make
                something great together! You can reach me at my email
                <span className="email-address">
                    {" "}
                    jonndenzelramos@gmail.com
                </span>
                , and let's start transforming ideas into reality.
            </p>
            <a
                className="contact-me-button"
                href="mailto:jonndenzelramos@gmail.com"
            >
                Get in contact
                <RiMailSendLine className="button-icon" size={18} />
            </a>
        </Wrapper>
    );
};

export default ContactMe;
