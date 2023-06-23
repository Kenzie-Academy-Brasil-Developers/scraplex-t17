import { ScrapCard } from "./ScrapCard";
import { produce } from "immer";
import { StyledScrapList } from "./style";
import { useContext } from "react";
import { ScrapContext } from "../../providers/ScrapContext";

export const ScrapList = () => {
   /*
    produce(baseState, draft => {
    draft[1].done = true
    draft.push({title: "Tweet about it"})
})
    */
   const { scrapList } = useContext(ScrapContext)

   const reversedList = produce(scrapList, draft => {
    draft.reverse();
   });

   return (
      <StyledScrapList>
         {reversedList.map((scrap) => (
            <ScrapCard key={scrap.id} scrap={scrap} />
         ))}
      </StyledScrapList>
   );
};
