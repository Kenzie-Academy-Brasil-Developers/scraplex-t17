import { z } from "zod";

//Um schema para cada formulário

export const addScrapSchema = z.object({
   content: z
      .string()
      .nonempty("A mensagem é obrigatória")
      .min(10, "A mensagem precisa conter pelo menos 10 caracteres."),
});

// .regex(/(?=.*?[A-Z])/, "O nome precisa conter uma letra maiúscula")
