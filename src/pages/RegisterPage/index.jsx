import { RegisterForm } from "../../components/RegisterForm";
import { StyledLink } from "../../styles/buttons";
import { StyledContainer } from "../../styles/grid";

export const RegisterPage = () => {
   return (
      <main>
         <StyledContainer>
            <StyledLink to="/">Voltar</StyledLink>
            <RegisterForm />
         </StyledContainer>
      </main>
   );
};
