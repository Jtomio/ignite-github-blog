import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PostContent } from "../../modules/PostContent";
import { PostSummary } from "../../modules/PostSummary";
import { PostType } from "../../types/PostType";
import { Container } from "./styles";

export function Post() {
  const location = useLocation();

  const post = location.state as PostType;

  useEffect(() => {
    document.title = post.title
  }, [post]);

  return (
    <Container>
      <header>
        <PostSummary
          posterUsername={post.user.login}
          {...post}
        />
      </header>

      <main>
        <PostContent postContent={post.body} />
      </main>
    </Container>
  )
}