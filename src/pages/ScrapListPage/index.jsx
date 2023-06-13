import { ScrapList } from "../../components/ScrapList";
import { Header } from "../../components/Header";

export const ScrapListPage = ({ scrapList }) => {
   return (
      <>
         <Header />
         <div>
            <h1>Scrap List Page</h1>
            <ScrapList scrapList={scrapList} />
         </div>
      </>
   );
};
