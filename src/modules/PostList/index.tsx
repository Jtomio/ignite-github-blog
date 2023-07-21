import { useFormContext } from "react-hook-form";
import { useContextSelector } from "use-context-selector";
import { LoadingIndicator } from "../../components/LoadingIndicator";
import { PostsContext } from "../../contexts/PostsContext";
import { Post } from "./Post";
import { Container } from "./styles";

export function PostList() {
  const posts = useContextSelector(PostsContext, (context) => (
    context.posts
  ));

  const form = useFormContext();

  return (
    <Container>
      {form.formState.isSubmitting ? (
        <LoadingIndicator />
      ) : (
        posts?.map((post) => (
          <Post key={post.id} postDetails={post} />
        ))
      )
      }
    </Container>
  )
}