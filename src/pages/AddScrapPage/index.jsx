import { AddScrapForm } from "../../components/AddScrapForm";
import { Header } from "../../components/Header";
import { StyledContainer } from "../../styles/grid";

export const AddScrapPage = ({ setScrapList }) => {
   return (
      <>
         <Header buttonTo="/scraplist" buttonText="Voltar" />
         <div>
            <StyledContainer>
               <h1>Add Scrap Page</h1>
               <AddScrapForm setScrapList={setScrapList} />
            </StyledContainer>
         </div>
      </>
   );
};
