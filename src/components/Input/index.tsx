import { useFormContext } from "react-hook-form";
import { SearchFormInputs } from "../../types/SearchForm";
import { Container } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fieldName: keyof SearchFormInputs;
}

export function Input({ fieldName, ...htmlInputAttributes }: InputProps) {
  const form = useFormContext<SearchFormInputs>();

  return (
    <Container
      {...htmlInputAttributes}
      {...form.register(fieldName)}
    />
  )
}