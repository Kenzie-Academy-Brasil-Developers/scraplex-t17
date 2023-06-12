import { Route, Routes } from "react-router-dom";
import { AddScrapPage } from "../pages/AddScrapPage";
import { HomePage } from "../pages/HomePage";
import { ScrapListPage } from "../pages/ScrapListPage";
import { ScrapPage } from "../pages/ScrapPage";

export const RoutesMain = () => {
   return (
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/scraplist" element={<ScrapListPage />} />
         <Route path="/scraplist/add" element={<AddScrapPage />} />
         <Route path="/scraplist/scrap" element={<ScrapPage />} />
      </Routes>
   );
};
