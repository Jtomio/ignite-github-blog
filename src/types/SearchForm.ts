import { z } from "zod";
import { searchFormSchema } from "../schemas/searchFormSchema";

export type SearchFormInputs = z.infer<typeof searchFormSchema>;
