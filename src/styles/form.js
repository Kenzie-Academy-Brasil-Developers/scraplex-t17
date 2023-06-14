import styled, { css } from "styled-components"

export const InputGeneralStyles = css`
    font-family: var(--font-primary);
    font-size: 1rem;
    color: var(--color-black);

 
    background: var(--color-white);
`

export const StyledInput = styled.input`
    ${InputGeneralStyles};
    height: 3.5rem;
    padding: 0 1rem;
`

export const StyledTextarea = styled.textarea`
    ${InputGeneralStyles};
    resize: none;
    padding: 1rem;
    height: 12.5rem;
`

export const StyledLabel = styled.label`
    font-family: var(--font-primary);
    font-size: 1rem;
    font-weight: 800;
`