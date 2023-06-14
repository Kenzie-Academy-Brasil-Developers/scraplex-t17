import { ScrapList } from "../../components/ScrapList";
import { Header } from "../../components/Header";
import { StyledContainer } from "../../styles/grid";

export const ScrapListPage = ({ scrapList }) => {
   return (
      <>
         <Header />
         <div>
            <StyledContainer>
               <h1>Scrap List Page</h1>
               <ScrapList scrapList={scrapList} />
            </StyledContainer>
         </div>
      </>
   );
};
