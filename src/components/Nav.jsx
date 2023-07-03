import Wrapper from "../assets/wrappers/Nav";

const Nav = ({ navRef }) => {
    return (
        <Wrapper ref={navRef}>
            <a className="website-logo" href="#">
                JDVR
            </a>
        </Wrapper>
    );
};

export default Nav;
