import { Link } from "react-router-dom"
import styled, { css } from "styled-components"

export const ButtonStyles = css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;

    font-family: var(--font-primary);
    font-size: 1.125rem;
    font-weight: 800;
    /*  font-weight: ${({fontWeight}) => fontWeight}; */
    border-radius: 255px;

    transition: .4s;

    &:disabled{
        cursor: not-allowed;
        opacity: .5;
    }

    ${({buttonsize}) => {
        switch(buttonsize){
            case "lg":
                return css`
                    padding: 0 1.5rem;
                    height: 3.75rem;
                `
            case "md":
                return css`
                    padding: 0 1.2rem;
                    height: 3.125rem;
                `    
        }
    }}

    ${({buttonstyle}) => {
        switch(buttonstyle){
            case "solid":
                return css`
                    background: var(--color-primary);
                    color: var(--color-white);

                    &:hover{
                        filter: brightness(1.15);
                    }
                `
            
            case "outline":
                return css`
                    border: 1px solid var(--color-primary);
                    color: var(--color-primary);

                    &:hover{
                        background: var(--color-primary);
                        color: var(--color-white);
                    }
                `
            
            case "link":
                return css`
                    color: var(--color-primary);

                    &:hover{
                        text-decoration: underline;
                    }
                `
        }
    }}

`

export const StyledButton = styled.button`
    ${ButtonStyles};
`

export const StyledLink = styled(Link)`
    ${ButtonStyles};
`