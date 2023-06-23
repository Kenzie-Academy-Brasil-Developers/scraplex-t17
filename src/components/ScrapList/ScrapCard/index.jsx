import { StyledParagraph } from "../../../styles/typography";
import { MdOutlineVisibility } from "react-icons/md";
import { Link } from "react-router-dom";
import { StyledScrapCard } from "./style";
import { useContext } from "react";
import { ScrapContext } from "../../../providers/ScrapContext";

export const ScrapCard = ({ scrap }) => {
   const { deleteScrap } = useContext(ScrapContext);

   return (
      <StyledScrapCard>
         <div className="contentBox">
            <StyledParagraph>
               <strong>{scrap.author}</strong> {scrap.email}              
            </StyledParagraph>
            <StyledParagraph>{scrap.content}</StyledParagraph>
         </div>
         <Link to={`/scraplist/scrap/${scrap.id}`}>
            <MdOutlineVisibility size={40} />
         </Link>
         <button onClick={() => deleteScrap(scrap.id)}>Deletar</button>
      </StyledScrapCard>
   );
};
