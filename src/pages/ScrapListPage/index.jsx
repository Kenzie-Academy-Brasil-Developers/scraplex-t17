import { ScrapList } from "../../components/ScrapList";
import { Header } from "../../components/Header";
import { StyledContainer } from "../../styles/grid";
import { StyledTitleOne } from "../../styles/typography";

export const ScrapListPage = ({ scrapList }) => {
   return (
      <>
         <Header />
         <div>
            <StyledContainer>
               <StyledTitleOne fontSize="lg">Lista de scraps</StyledTitleOne>
               <ScrapList scrapList={scrapList} />
            </StyledContainer>
         </div>
      </>
   );
};
