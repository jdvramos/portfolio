import styled from "styled-components";

const Wrapper = styled.div`
    /* background-color: #333; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    width: var(--width);
    margin: 0 auto;
    margin-top: 32px;

    .intro-text {
        display: flex;
        flex-direction: column;

        .greeting {
            display: flex;
            align-items: center;
            gap: 10px;

            img {
                width: 25px;
            }

            p {
                font-size: 2rem;
                margin-bottom: 0;
            }
        }

        .name {
            font-size: 2.4rem;
            margin-bottom: 0;

            .highlight-color {
                color: var(--headingColor);
            }
        }

        .short-description {
            font-size: 1.4rem;
            margin-bottom: 10px;
        }

        .button-group {
            display: flex;
            align-items: center;
            gap: 10px;

            .intro-button {
                width: 100px;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                padding: 8px 0;
                background-color: transparent;
                color: var(--bodyColor);
                font-size: 1.2rem;
                font-weight: 500;
                text-decoration: none;
                border: 1px solid var(--bodyColor);
                border-radius: 4px;
                transition: all 0.3s ease;
                cursor: pointer;
                letter-spacing: 0;

                &:hover {
                    box-shadow: 0px 0px 10px 3px rgba(226, 232, 240, 0.4);
                }

                .button-icon {
                    margin-bottom: 2px;
                }
            }
        }
    }

    .image-container {
        width: 186px;
        height: 186px;
        border-radius: 10px;

        img {
            border-radius: inherit;
        }
    }

    @media (max-width: 750px) {
        width: 100%;
        flex-direction: column-reverse;
        gap: 20px;

        .intro-text {
            align-items: center;
        }
    }
`;

export default Wrapper;
