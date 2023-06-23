import { useContext } from "react";
import { useForm } from "react-hook-form"
import { UserContext } from "../../providers/UserContext";
import { StyledButton } from "../../styles/buttons";
import { Input } from "../Input";

export const LoginForm = () => {
    const { register, handleSubmit } = useForm();

    const { userLogin } = useContext(UserContext);

    const submit = (formData) => {
        userLogin(formData);
    }

    return(
        <form onSubmit={handleSubmit(submit)}>
            <Input type="email" label="E-mail" {...register("email")} />
            <Input type="password" label="Senha" {...register("password")} />
            <StyledButton type="submit" buttonstyle="solid" buttonsize="md">Entrar</StyledButton>
        </form>
    )
}