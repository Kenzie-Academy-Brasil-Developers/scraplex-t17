import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const ScrapContext = createContext({});

export const ScrapProvider = ({ children }) => {
   const [scrapList, setScrapList] = useState([]);

   const { user } = useContext(UserContext);

   const navigate = useNavigate();

   useEffect(() => {
      const loadScraps = async () => {
         try {
            const { data } = await api.get("/scraps");
            setScrapList(data);
         } catch (error) {
            console.log(error);
         }
      };
      loadScraps();
   }, []);

   const createScrap = async (formData, setLoading) => {
      try {
         setLoading(true);
         const newData = { ...formData, author: user.name, email: user.email };
         const token = localStorage.getItem("@TOKEN");
         const { data } = await api.post("/scraps", newData, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         setScrapList((scrapList) => [...scrapList, data]);
         navigate("/scraplist");
      } catch (error) {
         console.log(error);
      } finally {
         setLoading(false);
      }
   };

   const deleteScrap = async (scrapId) => {
      try {
         const token = localStorage.getItem("@TOKEN");
         await api.delete(`/scraps/${scrapId}`, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });

         setScrapList((scrapList) => scrapList.filter((scrap) => scrap.id !== scrapId));
      } catch (error) {
         console.log(error);
      }
   };

   const editScrap = async (formData, scrapId) => {
      try {
         const token = localStorage.getItem("@TOKEN");
         
         const { data } = await api.patch(`/scraps/${scrapId}`, formData, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });

         setScrapList((scrapList) => scrapList.map(scrap => {
            if(scrap.id === scrapId){
               return data;
            } else {
               return scrap;
            }
         }))
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <ScrapContext.Provider value={{ scrapList, createScrap, deleteScrap }}>
         {children}
      </ScrapContext.Provider>
   );
};
