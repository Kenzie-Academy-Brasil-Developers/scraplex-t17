import { StyledLink } from "../../styles/buttons";
import { Link } from "react-router-dom";
import logo from "../../assets/scraplex.svg";
import { StyledContainer } from "../../styles/grid";
import { StyledHeader } from "./style";

export const Header = ({ buttonTo, buttonText }) => {
   return (
      <StyledHeader>
         <StyledContainer>
            <div className="flexBox">
               <Link to="/">
                  <img className="logo" src={logo} alt="Logo do Scraplex" />
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
            </div>
         </StyledContainer>
      </StyledHeader>
   );
};
