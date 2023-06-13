import styled, { css } from "styled-components";

export const TitleStyles = css`
    font-family: var(--font-primary);
    color: var(--color-black);
    line-height: 1.6;
    font-weight: 800;

    ${({fontSize}) => {
        switch(fontSize){
            case "lg":
                return css`
                    font-size: 2.125rem;
                `
            case "md":
                return css`
                    font-size: 2rem;
                `
        }
    }}
  
`

export const StyledTitleOne = styled.h1`
    ${TitleStyles};
`

export const StyledTitleTwo = styled.h2`
    ${TitleStyles};
`

export const StyledTitleThree = styled.h3`
    ${TitleStyles};
`

export const StyledParagraph = styled.p`
    font-family: var(--font-primary);
    color: var(--color-black);
    line-height: 1.6;
    font-weight: 400;

    strong{
        font-weight: 800;
    }

    ${({fontSize}) => {
        switch(fontSize){            
            case "lg":
                return css`
                    font-size: 1.5rem;                    
                `
            default: 
                return css`
                    font-size: 1.125rem;
                `    
        }
    }}
`