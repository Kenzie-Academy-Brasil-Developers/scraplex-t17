import { StyledLink } from "../../styles/buttons";
import logo from "../../assets/scraplex.svg";
import { StyledContainer } from "../../styles/grid";

export const HomePage = () => {
   return (
      <div>
         <StyledContainer>
            <img src={logo} alt="Logo do Scraplex" />
            <StyledLink to="/scraplist" buttonStyle="outline" buttonSize="lg">
               Acessar scraplex
            </StyledLink>
         </StyledContainer>
      </div>
   );
};
