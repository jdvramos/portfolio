import styled from "styled-components";

const Wrapper = styled.div`
    padding: 0 20px;
    width: var(--width);
    margin: 0 auto;
    padding-top: 32px;

    .section-title {
        color: var(--headingColor);
        font-size: 1.6rem;
        font-weight: 500;
    }

    .projects-container {
        display: grid;
        gap: 4rem;
        grid-template-columns: repeat(2, 1fr);
    }

    .project-item {
        border: 2px solid var(--headingColor);
        padding-bottom: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
    }

    .project-image {
        width: 100%;
        border-radius: 0px;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
        height: 160px;
        margin-bottom: 5px;

        img {
            border-radius: inherit;
            height: 100%;
        }
    }

    .project-title {
        font-size: 1.8rem;
        font-weight: 500;
        font-family: var(--headingFont);
        letter-spacing: 1px;
    }

    .project-details {
        font-size: 1.4rem;
        padding: 0 20px;
        margin-bottom: 0;
        text-align: center;
    }

    .one-liner {
        margin-bottom: 28px;
    }

    .button-group {
        align-self: flex-end;
        margin-right: 20px;
        display: flex;
        gap: 12px;
        align-items: center;
        justify-content: center;
        padding: 10px 0;

        .external-link {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: var(--bodyColor);
            transition: all 0.3s ease;

            &:hover {
                color: var(--headingColor);
            }
        }
    }

    .highlighted-project {
        border: 2px solid var(--headingColor);
        border-radius: 10px;
        grid-column: 1 / -1;
        box-shadow: 0px 0px 10px 3px rgba(8, 135, 61, 0.6);

        .project-image {
            max-width: 100%;
            border-radius: 0px;
            border-top-right-radius: 8px;
            border-top-left-radius: 8px;
            height: 180px;

            img {
                border-radius: inherit;
                height: 100%;
            }
        }

        .project-title {
            margin: 10px 0;
        }

        .project-details {
            margin-bottom: 1.6rem;
        }

        .feature-title {
            font-size: 1.4rem;
            padding: 0 20px;
            align-self: flex-start;
        }

        .app-features {
            font-size: 1.4rem;
            padding: 0 20px;
            margin-left: 20px;
            align-self: flex-start;
        }
    }

    @media (max-width: 750px) {
        width: 100%;

        .projects-container {
            grid-template-columns: 1fr;
        }

        .one-liner {
            margin-bottom: 0;
        }
    }
`;

export default Wrapper;
