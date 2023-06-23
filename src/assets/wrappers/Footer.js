import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 20px;
    width: var(--width);
    margin: 0 auto;
    margin-top: 7rem;

    .footer-socials-container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;

        .social-link {
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--bodyColor);
            transition: all 0.3s ease;

            &:hover {
                color: var(--headingColor);
            }
        }
    }

    .footer-text {
        font-family: var(--headingFont);
        margin-top: 1.2rem;
        margin-bottom: 1.8rem;
        font-size: 1.2rem;
    }

    @media (max-width: 750px) {
        width: 100%;
    }
`;

export default Wrapper;
