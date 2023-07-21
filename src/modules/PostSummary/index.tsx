import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";
import arrowUpRightFromSquareSolidIcon from "../../assets/icons/arrow-up-right-from-square-solid.svg";
import calendarDaySolidIcon from "../../assets/icons/calendar-day-solid.svg";
import chevronLeftSolidIcon from "../../assets/icons/chevron-left-solid.svg";
import commentSolidIcon from "../../assets/icons/comment-solid.svg";
import githubIcon from "../../assets/icons/github.svg";
import { Box } from "../../components/Box";
import { Link } from "../../components/Link";
import { ContentContainer } from "./styles";

interface PostSummaryProps {
  title: string;
  posterUsername: string;
  comments: number;
  created_at: string;
  html_url: string;
}

export function PostSummary({ title, posterUsername, comments, html_url, created_at }: PostSummaryProps) {

  return (
    <Box>
      <ContentContainer>
        <header>
          <Link href="javascript:history.back()">
            <img
              src={chevronLeftSolidIcon}
              alt=""
              width={12}
              height={12}
            />
            Back
          </Link>

          <Link href={html_url} target="_blank">
            See on Github
            <img
              src={arrowUpRightFromSquareSolidIcon}
              alt=""
              width={12}
              height={12}
            />
          </Link>
        </header>

        <main>
          <h1>
            {title}
          </h1>
        </main>

        <footer>
          <span>
            <img
              src={githubIcon}
              alt=""
              width={18}
              height={18}
            />
            <p>{posterUsername}</p>
          </span>

          <span>
            <img
              src={calendarDaySolidIcon}
              alt=""
              width={18}
              height={18}
            />
            {formatDistanceToNow(new Date(created_at), {
              addSuffix: true,
              locale: enUS
            })}
          </span>

          <span>
            <img
              src={commentSolidIcon}
              alt=""
              width={18}
              height={18}
            />
            {comments > 1 ? `${comments} comments` : `${comments} comment`}
          </span>
        </footer>
      </ContentContainer>
    </Box >
  )
}