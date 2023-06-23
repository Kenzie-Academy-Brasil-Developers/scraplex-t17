import { AddScrapForm } from "../../components/AddScrapForm";
import { Header } from "../../components/Header";
import { StyledContainer } from "../../styles/grid";
import { StyledTitleOne } from "../../styles/typography";
import { StyledAddScrapPage } from "./style";

export const AddScrapPage = () => {
   return (
      <StyledAddScrapPage>
         <Header buttonTo="/scraplist" buttonText="Voltar" />
         <div>
            <StyledContainer maxWidth={500}>
               <StyledTitleOne fontSize="md" textAlign="center">Deixe uma scrap</StyledTitleOne>
               <AddScrapForm />
            </StyledContainer>
         </div>
      </StyledAddScrapPage>
   );
};
