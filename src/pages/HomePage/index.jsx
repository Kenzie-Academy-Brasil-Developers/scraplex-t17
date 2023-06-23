import { StyledLink } from "../../styles/buttons";
import logo from "../../assets/scraplex.svg";
import { StyledContainer } from "../../styles/grid";
import { StyledHomePage } from "./style";
import { LoginForm } from "../../components/LoginForm";
import { StyledParagraph } from "../../styles/typography";

export const HomePage = () => {
   return (
      <StyledHomePage>
         <StyledContainer>
            <div className="flexBox">
               <img src={logo} alt="Logo do Scraplex" />
               <LoginForm />
               <StyledParagraph>ou</StyledParagraph>
               <StyledLink to="/register" buttonstyle="outline" buttonsize="lg">
                  Cadastre-se
               </StyledLink>
               <StyledLink to="/scraplist" buttonstyle="outline" buttonsize="lg">
                  Acessar scraplex
               </StyledLink>
            </div>
         </StyledContainer>
      </StyledHomePage>
   );
};
