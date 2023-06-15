import { forwardRef } from "react";
import { StyledFieldBox, StyledLabel, StyledTextarea } from "../../styles/form";
import { StyledParagraph } from "../../styles/typography";

export const Textarea = forwardRef(({label, error, ...rest}, ref) => {
   return (
      <StyledFieldBox>
         <StyledLabel>{label}</StyledLabel>
         <StyledTextarea ref={ref} {...rest} error={error ? true : false}></StyledTextarea>
         {error ? (
            <StyledParagraph fontColor="red">{error.message}</StyledParagraph>
         ) : null}
      </StyledFieldBox>
   );
});
