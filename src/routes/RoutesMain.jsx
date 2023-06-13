import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AddScrapPage } from "../pages/AddScrapPage";
import { HomePage } from "../pages/HomePage";
import { ScrapListPage } from "../pages/ScrapListPage";
import { ScrapPage } from "../pages/ScrapPage";
import { api } from "../services/api";

export const RoutesMain = () => {
   const [scrapList, setScrapList] = useState([]);

   useEffect(() => {
      const loadScraps = async () => {
         try {
            const {data} = await api.get('/scraps');
            setScrapList(data);
         } catch (error) {
            console.log(error);
         }
      }
      loadScraps();
   }, [])

   return (
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/scraplist" element={<ScrapListPage scrapList={scrapList} />} />
         <Route path="/scraplist/add" element={<AddScrapPage setScrapList={setScrapList} />} />
         <Route path="/scraplist/scrap" element={<ScrapPage />} />
      </Routes>
   );
};
