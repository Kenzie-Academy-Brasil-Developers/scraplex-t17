import { StyledFieldBox, StyledInput, StyledLabel } from "../../styles/form";
import { StyledParagraph } from "../../styles/typography";
import { forwardRef } from "react";

export const Input = forwardRef(({ label, error, ...rest }, ref) => {
   return (
      <StyledFieldBox>
         <StyledLabel>{label}</StyledLabel>
         <StyledInput ref={ref} {...rest} error={error ? true : false} />
         {error ? (
            <StyledParagraph fontColor="red">{error.message}</StyledParagraph>
         ) : null}
      </StyledFieldBox>
   );
});
