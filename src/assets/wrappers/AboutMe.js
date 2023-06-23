import styled from "styled-components";

const Wrapper = styled.div`
    /* background-color: #c9a5a5; */
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    width: var(--width);
    margin: 0 auto;
    margin-top: 32px;

    .section-title {
        color: var(--headingColor);
        font-size: 1.6rem;
        font-weight: 500;
    }

    .about-me-body {
        text-indent: 25px;
        text-align: justify;
    }

    @media (max-width: 750px) {
        width: 100%;
    }
`;

export default Wrapper;
