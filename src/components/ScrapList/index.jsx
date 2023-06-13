import { ScrapCard } from "./ScrapCard"

export const ScrapList = ({scrapList}) => {
    return(
        <ul>
            {scrapList.map(scrap => (
                <ScrapCard key={scrap.id} scrap={scrap} />
            ))}
        </ul>
    )
}