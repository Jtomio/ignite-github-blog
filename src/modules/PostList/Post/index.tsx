import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";
import { useNavigate } from "react-router-dom";
import { PostType } from "../../../types/PostType";
import { Button, Container } from "./styles";

interface PostProps {
  postDetails: PostType;
}

export function Post({ postDetails }: PostProps) {
  const navigate = useNavigate();

  function handlePostClick() {
    navigate("/post", {
      state: postDetails
    });
  }

  return (
    <Button onClick={handlePostClick}>
      <Container>
        <header>
          <h4>
            {postDetails.title}
          </h4>

          <span>
            {formatDistanceToNow(new Date(postDetails.created_at), {
              addSuffix: true,
              locale: enUS
            })}
          </span>
        </header>

        <main>
          <p>
            {postDetails.body}
          </p>
        </main>
      </Container>
    </Button>
  )
}