import { ScrapCard } from "./ScrapCard";
import { produce } from "immer";
import { StyledScrapList } from "./style";

export const ScrapList = ({ scrapList }) => {
   /*
    produce(baseState, draft => {
    draft[1].done = true
    draft.push({title: "Tweet about it"})
})
    */

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
