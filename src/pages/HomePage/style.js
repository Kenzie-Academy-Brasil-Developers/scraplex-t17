import styled from "styled-components";

export const StyledHomePage = styled.div`
    .flexBox{
        display: flex;
        align-items: center;
        justify-content: center;

        flex-direction: column;
        gap: 2.5rem;

        min-height: calc(100vh - 2rem);

        img{
            max-width: 80%;
        }
    }
`