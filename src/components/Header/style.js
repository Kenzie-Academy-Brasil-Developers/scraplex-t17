import styled from "styled-components";

export const StyledHeader = styled.header`
    .logo{
        max-width: 100px;
    }

    .flexBox{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }

    @media (max-width: 600px){
        .flexBox{
            flex-direction: column;
        }
    }
`