import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "../../styles/buttons";
import { StyledForm } from "./style";
import { zodResolver } from "@hookform/resolvers/zod";
import { addScrapSchema } from "./addScrapSchema";
import { Input } from "../Input";
import { Textarea } from "../Texarea";
import { api } from "../../services/api";
import { useState } from "react";

export const AddScrapForm = ({ setScrapList }) => {
   const [loading, setLoading] = useState(false);

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm({
      resolver: zodResolver(addScrapSchema),
   });

   const navigate = useNavigate();

   const createScrap = async (formData) => {
      try {
         setLoading(true);
         const { data } = await api.post("/scraps", formData);

         setScrapList((scrapList) => [...scrapList, data]);
         navigate("/scraplist");
      } catch (error) {
         console.log(error);
      } finally {
        setLoading(false);
      }
   };

   const submit = async (formData) => {
      await createScrap(formData);
      reset();
   };

   return (
      <StyledForm onSubmit={handleSubmit(submit)} noValidate>
         <Input
            label="Seu nome"
            type="text"
            {...register("author")}
            error={errors.author}
            disabled={loading}
         />
         <Input
            label="Seu e-mail"
            type="email"
            {...register("email")}
            error={errors.email}
            disabled={loading}
         />
         <Textarea label="Sua mensagem" {...register("content")} error={errors.content} />
         <StyledButton buttonstyle="solid" buttonsize="md" disabled={loading}>
            {loading ? "Enviando..." : "Enviar"}
         </StyledButton>
      </StyledForm>
   );
};

/*
<select {...register("choice")}>
    <option value="">Escolha</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
</select>
*/
