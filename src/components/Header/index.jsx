import { StyledLink } from "../../styles/buttons";
import { Link } from "react-router-dom";
import logo from "../../assets/scraplex.svg";
import { StyledContainer } from "../../styles/grid";

export const Header = ({ buttonTo, buttonText }) => {
   return (
      <header>
         <StyledContainer>
            <Link to="/">
               <img src={logo} alt="Logo do Scraplex" />
            </Link>
            <nav>
               <StyledLink
                  to={buttonTo ? buttonTo : "/scraplist/add"}
                  buttonstyle="solid"
                  buttonsize="md"
               >
                  {buttonText ? buttonText : "Deixar scrap"}
               </StyledLink>
            </nav>
         </StyledContainer>
      </header>
   );
};
