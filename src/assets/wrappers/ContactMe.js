import styled from "styled-components";

const Wrapper = styled.div`
    padding: 0 20px;
    width: var(--width);
    margin: 0 auto;
    margin-top: 32px;

    .contact-primary-title {
        color: var(--headingColor);
        font-size: 1.6rem;
        font-weight: 500;
        margin-bottom: 1.8rem;
    }

    .contact-secondary-title {
        font-family: var(--headingFont);
        font-size: 3rem;
        font-weight: 700;
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
    }

    .contact-description {
        margin-top: 8px;
        text-align: justify;
        margin-bottom: 5rem;

        .email-address {
            color: var(--headingColor);
            font-weight: 600;
        }
    }

    .contact-me-button {
        margin: 0 auto;
        width: 170px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 12px 24px;
        background-color: transparent;
        color: var(--headingColor);
        font-size: 1.4rem;
        font-weight: 500;
        text-decoration: none;
        border: 2px solid rgba(8, 135, 61, 0.5);
        border-radius: 4px;
        transition: all 0.3s ease;
        cursor: pointer;
        letter-spacing: 0;

        &:hover {
            box-shadow: 0px 0px 10px 3px rgba(8, 135, 61, 0.4);
        }
    }

    @media (max-width: 750px) {
        width: 100%;

        .contact-secondary-title {
            font-size: 2.5rem;
        }
    }
`;

export default Wrapper;
