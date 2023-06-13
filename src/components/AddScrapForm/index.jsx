import { useState } from "react"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { StyledButton } from "../../styles/buttons";
import { StyledForm } from "./style";

export const AddScrapForm = ({setScrapList}) => {
    const { register, handleSubmit, reset } = useForm();

    //Para se utilizar dentro de lógicas
    const navigate = useNavigate();

    const createScrap = async (formData) => {
        try {
            //Atualizo back-end
            const {data} = await api.post('/scraps', formData);
            
            //Atualização de estado
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
            <label>Seu nome</label>
            <input type="text" {...register("author")} />
            <label>Seu e-mail</label>
            <input type="text" {...register("email")} />
            <label>Sua mensagem</label>
            <textarea {...register("content")}></textarea>            
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