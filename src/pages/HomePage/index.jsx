import { StyledLink } from "../../styles/buttons"

export const HomePage = () => {
    return(
        <div>
            <h1>Home Page</h1>
            <StyledLink to="/scraplist" buttonStyle="outline" buttonSize="lg">Acessar scraplex</StyledLink>     
        </div>
    )
}