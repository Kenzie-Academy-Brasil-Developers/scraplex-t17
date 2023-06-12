import { Link } from "react-router-dom";

export const Header = () => {
   return (
      <header>
         <span>Exemplo</span>
         <nav>
            {/* Para rotas internas (criadas pelo REACT ROUTER DOM em minha aplicação), utilizarei Link */}
            <Link to="/">Home</Link>
            <Link to="/scraplist">Scraplist</Link>
            <Link to="/scraplist/add">Adicionar scrap</Link>
            {/* Para redirecionamentos externos utilizarei a áncora padrão */}
            <a href="https://www.google.com.br" target="_blank">
               Google
            </a>
         </nav>
      </header>
   );
};
