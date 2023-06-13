import { AddScrapForm } from "../../components/AddScrapForm"

export const AddScrapPage = ({setScrapList}) => {
    return(
        <div>
            <h1>Add Scrap Page</h1>
            <AddScrapForm setScrapList={setScrapList} />
        </div>
    )
}