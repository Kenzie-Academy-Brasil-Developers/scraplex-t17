import { StyledParagraph } from "../../../styles/typography"

export const ScrapCard = ({scrap}) => {
    return (
        <li>
            <StyledParagraph>
                <strong>{scrap.author}</strong>
                {scrap.email}
            </StyledParagraph>
            <p>{scrap.content}</p>
        </li>
    )
}