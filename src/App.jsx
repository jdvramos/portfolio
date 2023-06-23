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
    const targetRef = useRef(null);

    const scrollIntoProjects = () => {
        targetRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <Wrapper>
            <Nav />
            <Intro scrollIntoProjects={scrollIntoProjects} />
            <AboutMe />
            <TechStack />
            <Projects targetRef={targetRef} />
            <ContactMe />
            <Footer />
        </Wrapper>
    );
};

export default App;
