import { Link } from "react-router-dom";
import { StyledLink } from "../../styles/buttons";

export const Header = () => {
   return (
      <header>
         <span>Exemplo</span>
         <nav>
            {/* Para rotas internas (criadas pelo REACT ROUTER DOM em minha aplicação), utilizarei Link */}
            <StyledLink to="/scraplist/add" buttonStyle="solid" buttonSize="md">
               Deixar scrap
            </StyledLink>
         </nav>
      </header>
   );
};
