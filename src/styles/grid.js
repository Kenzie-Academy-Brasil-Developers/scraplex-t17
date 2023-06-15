import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 100%;
    max-width: ${({maxWidth}) => maxWidth ? maxWidth : 1200}px;
    margin: 0 auto;
    padding: 1rem;
`