import styled from "styled-components";

const Wrapper = styled.nav`
    display: flex;
    align-items: center;
    padding: 0 20px;
    width: var(--width);
    height: 75px;
    margin: 0 auto;
    font-family: var(--headingFont);

    .website-logo {
        text-shadow: 0 0 10px var(--headingColor);
        color: var(--headingColor);
        font-size: 2rem;
    }

    @media (max-width: 750px) {
        width: 100%;
    }
`;

export default Wrapper;
