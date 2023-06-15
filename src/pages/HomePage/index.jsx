import { StyledLink } from "../../styles/buttons";
import logo from "../../assets/scraplex.svg";
import { StyledContainer } from "../../styles/grid";
import { StyledHomePage } from "./style";

export const HomePage = () => {
   return (
      <StyledHomePage>
         <StyledContainer>
            <div className="flexBox">
               <img src={logo} alt="Logo do Scraplex" />
               <StyledLink to="/scraplist" buttonstyle="outline" buttonsize="lg">
                  Acessar scraplex
               </StyledLink>
            </div>
         </StyledContainer>
      </StyledHomePage>
   );
};
