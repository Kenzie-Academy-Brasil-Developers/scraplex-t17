import { StyledParagraph } from "../../../styles/typography";
import { MdOutlineVisibility } from "react-icons/md";
import { Link } from "react-router-dom";
import { StyledScrapCard } from "./style";

export const ScrapCard = ({ scrap }) => {
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
      </StyledScrapCard>
   );
};
