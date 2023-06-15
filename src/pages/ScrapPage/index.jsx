import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { StyledButton, StyledLink } from "../../styles/buttons";
import { StyledContainer } from "../../styles/grid";
import { StyledParagraph, StyledTitleTwo } from "../../styles/typography";
import { MdArrowBack } from "react-icons/md";
import { StyledScrapPageCard } from "./style";

export const ScrapPage = () => {
   const { id } = useParams();
   const [scrap, setScrap] = useState(null);

   const navigate = useNavigate();

   useEffect(() => {
      const loadScrap = async () => {
         try {
            const { data } = await api.get(`/scraps/${id}`);
            setScrap(data);
         } catch (error) {
            console.log(error);
            navigate("/scraplist");
         }
      };
      loadScrap();
   }, []);

   return (
      <>
         <Header />
         <div>
            <StyledContainer>
               {scrap ? (
                  <div>
                     <StyledLink to="/scraplist" buttonstyle="link">
                        <MdArrowBack /> voltar
                     </StyledLink>
                     <StyledScrapPageCard>
                        <StyledTitleTwo fontSize="md">
                           Scrap de: {scrap.author}
                        </StyledTitleTwo>
                        <StyledParagraph>{scrap.content}</StyledParagraph>
                     </StyledScrapPageCard>
                  </div>
               ) : (
                  <StyledParagraph>Carregando...</StyledParagraph>
               )}
            </StyledContainer>
         </div>
      </>
   );
};
