import { useFormContext } from "react-hook-form";
import { useContextSelector } from "use-context-selector";
import { Input } from "../../components/Input";
import { PostsContext } from "../../contexts/PostsContext";
import { SearchFormInputs } from "../../types/SearchForm";
import { Container } from "./styles";

export function SearchForm() {
  const form = useFormContext<SearchFormInputs>();
  const { posts, fetchPosts } = useContextSelector(PostsContext, (context) => (
    context
  ));

  const numberOfPosts = posts.length;

  async function handleSearchPosts(data: SearchFormInputs) {
    await fetchPosts(data.query);
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <Container onSubmit={form.handleSubmit(handleSearchPosts)}>
      <header>
        <h3>
          Posts
        </h3>

        <span>
          {numberOfPosts > 1 ? `${numberOfPosts} posts` : `${numberOfPosts} post`}
        </span>
      </header>

      <main>
        <Input
          placeholder="Search content"
          fieldName="query"
        />
      </main>
    </Container>
  )
}
