import Wrapper from "./assets/wrappers/App";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import { useRef } from "react";

const App = () => {
    const navRef = useRef(null);
    const projectsRef = useRef(null);

    const scrollIntoProjects = () => {
        projectsRef.current.scrollIntoView({ behavior: "smooth" });
    };

    const scrollIntoNav = () => {
        navRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <Wrapper>
            <Nav navRef={navRef} />
            <Intro scrollIntoProjects={scrollIntoProjects} />
            <AboutMe />
            <TechStack />
            <Projects projectsRef={projectsRef} scrollIntoNav={scrollIntoNav} />
            <ContactMe />
            <Footer />
        </Wrapper>
    );
};

export default App;
