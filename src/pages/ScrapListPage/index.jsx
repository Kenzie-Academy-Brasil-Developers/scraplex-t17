import { ScrapList } from "../../components/ScrapList";
import { Header } from "../../components/Header";
import { StyledContainer } from "../../styles/grid";
import { StyledTitleOne } from "../../styles/typography";
import { useContext } from "react";
import { ScrapContext } from "../../providers/ScrapContext";

export const ScrapListPage = () => {
   return (
      <>
         <Header />
         <div>
            <StyledContainer>
               <StyledTitleOne fontSize="lg">Lista de scraps</StyledTitleOne>
               <ScrapList />
            </StyledContainer>
         </div>
      </>
   );
};
