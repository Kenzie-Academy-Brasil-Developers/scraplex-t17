import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { StyledButton } from "../../styles/buttons";
import { StyledInput, StyledLabel, StyledTextarea } from "../../styles/form";
import { StyledForm } from "./style";

export const AddScrapForm = ({setScrapList}) => {
    const { register, handleSubmit, reset } = useForm();

    const navigate = useNavigate();

    const createScrap = async (formData) => {
        try {
            const {data} = await api.post('/scraps', formData);
            
            setScrapList((scrapList) => [...scrapList, data]);
            navigate("/scraplist");
        } catch (error) {
            console.log(error);
        }
    }

    const submit = async (formData) => {
        await createScrap(formData);
        reset();
    }

    return(
        <StyledForm onSubmit={handleSubmit(submit)}>
            <StyledLabel>Seu nome</StyledLabel>
            <StyledInput type="text" {...register("author")} />
            <StyledLabel>Seu e-mail</StyledLabel>
            <StyledInput type="text" {...register("email")} />
            <StyledLabel>Sua mensagem</StyledLabel>
            <StyledTextarea {...register("content")}></StyledTextarea>            
            <StyledButton buttonStyle="solid" buttonSize="md">Enviar</StyledButton>
        </StyledForm>
    )
}

/*
<select {...register("choice")}>
    <option value="">Escolha</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
</select>
*/            