import styled from "styled-components";

const Wrapper = styled.div`
    padding: 0 20px;
    width: var(--width);
    margin: 0 auto;
    margin-top: 32px;

    .section-title {
        color: var(--headingColor);
        font-size: 1.6rem;
        font-weight: 500;
    }

    .tech-stack-container {
        display: grid;
        gap: 4rem;
        grid-template-columns: repeat(3, 1fr);
    }

    .tech-stack-item {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0.8rem;
        gap: 10px;
    }

    .tech-stack-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;

        img {
            width: 100%;
        }
    }

    .tech-stack-name {
        font-size: 1.4rem;
    }

    @media (max-width: 750px) {
        width: 100%;

        .tech-stack-name {
            margin-left: 0;
        }
    }

    @media (max-width: 550px) {
        .tech-stack-name {
            font-size: 1.2rem;
            text-align: center;
        }
    }

    @media (max-width: 400px) {
        .tech-stack-container {
            gap: 3rem;
        }
    }
`;

export default Wrapper;
