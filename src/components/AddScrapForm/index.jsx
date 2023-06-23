import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "../../styles/buttons";
import { StyledForm } from "./style";
import { zodResolver } from "@hookform/resolvers/zod";
import { addScrapSchema } from "./addScrapSchema";
import { Input } from "../Input";
import { Textarea } from "../Texarea";
import { useContext, useState } from "react";
import { ScrapContext } from "../../providers/ScrapContext";

export const AddScrapForm = () => {
   const [loading, setLoading] = useState(false);

   const { createScrap } = useContext(ScrapContext);

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm({
      resolver: zodResolver(addScrapSchema),
   });

   const submit = async (formData) => {
      await createScrap(formData, setLoading);
      reset();
   };

   return (
      <StyledForm onSubmit={handleSubmit(submit)} noValidate>
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
