import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AddScrapPage } from "../pages/AddScrapPage";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { ScrapListPage } from "../pages/ScrapListPage";
import { ScrapPage } from "../pages/ScrapPage";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const RoutesMain = () => {
   return (
      <Routes>
         { /* <Route path="/" element={<Navigate to="/rotaqueeuquero" />} /> */ }
         <Route element={<PublicRoutes />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
         </Route>

         <Route path="/scraplist" element={<ScrapListPage />} />
         <Route path="/scraplist/scrap/:id" element={<ScrapPage />} />
         <Route element={<ProtectedRoutes />}>
            <Route path="/scraplist/add" element={<AddScrapPage />} />
         </Route>
      </Routes>
   );
};
