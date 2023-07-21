import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { PostList } from "../../modules/PostList";
import { ProfileSummary } from "../../modules/ProfileSummary";
import { SearchForm } from "../../modules/SearchForm";
import { searchFormSchema } from "../../schemas/searchFormSchema";
import { SearchFormInputs } from "../../types/SearchForm";
import { Container } from "./styles";

export function Home() {
  const form = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      query: ""
    },
  });

  return (
    <FormProvider {...form}>
      <Container>
        <ProfileSummary />
        <SearchForm />
        <PostList />
      </Container >
    </FormProvider>
  )
}