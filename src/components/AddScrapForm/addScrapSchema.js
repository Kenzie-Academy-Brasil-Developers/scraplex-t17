import { z } from "zod";

//Um schema para cada formulário

export const addScrapSchema = z.object({
   author: z
      .string()
      .nonempty("O nome é obrigatório.")
      .min(2, "O nome precisa conter pelo menos 2 carácteres"),
   email: z
      .string()
      .nonempty("O e-mail é obrigatório")
      .email("O e-mail fornecido é inválido."),
   content: z
      .string()
      .nonempty("A mensagem é obrigatória")
      .min(10, "A mensagem precisa conter pelo menos 10 caracteres."),
});

// .regex(/(?=.*?[A-Z])/, "O nome precisa conter uma letra maiúscula")
