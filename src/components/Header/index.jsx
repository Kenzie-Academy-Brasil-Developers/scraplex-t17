import { StyledButton, StyledLink } from "../../styles/buttons";
import { Link } from "react-router-dom";
import logo from "../../assets/scraplex.svg";
import { StyledContainer } from "../../styles/grid";
import { StyledHeader } from "./style";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const Header = ({ buttonTo, buttonText }) => {
   const { user, userLogout } = useContext(UserContext);

   return (
      <StyledHeader>
         <StyledContainer>
            <div className="flexBox">
               <Link to="/">
                  <img className="logo" src={logo} alt="Logo do Scraplex" />
               </Link>
               <nav>
                  {user ? (
                     <>
                        <div>
                           <p>{user.name}</p>
                           <p>{user.email}</p>
                        </div>
                        <StyledLink
                           to={buttonTo ? buttonTo : "/scraplist/add"}
                           buttonstyle="solid"
                           buttonsize="md"
                        >
                           {buttonText ? buttonText : "Deixar scrap"}
                        </StyledLink>
                        <StyledButton onClick={userLogout}>Sair</StyledButton>
                     </>
                  ) : (
                     <>
                        <StyledLink
                           to="/"
                           buttonstyle="solid"
                           buttonsize="md"
                        >
                           Entrar
                        </StyledLink>
                     </>
                  )}
               </nav>
            </div>
         </StyledContainer>
      </StyledHeader>
   );
};
