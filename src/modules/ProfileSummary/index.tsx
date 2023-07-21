import { memo } from "react";
import arrowUpRightFromSquareSolidIcon from "../../assets/icons/arrow-up-right-from-square-solid.svg";
import buildingSolidIcon from "../../assets/icons/building-solid.svg";
import githubIcon from "../../assets/icons/github.svg";
import userGroupSolidIcon from "../../assets/icons/user-group-solid.svg";
import { Box } from "../../components/Box";
import { Link } from "../../components/Link";
import { useUser } from "../../hooks/useUser";
import {
  Avatar,
  ProfileInfoContainer
} from "./styles";

function ProfileSummaryComponent() {
  const user = useUser();

  return (
    <Box>
      <Avatar
        src={user?.avatar_url}
        alt="Profile avatar"
        width={148}
        height={148}
      />

      <ProfileInfoContainer>
        <header>
          <h1>
            {user?.name}
          </h1>

          <Link href={user?.html_url} target="_blank">
            GITHUB
            <img
              src={arrowUpRightFromSquareSolidIcon}
              alt=""
              width={12}
              height={12}
            />
          </Link>
        </header>

        <main>
          <h2>
            {user?.bio}
          </h2>
        </main>

        <footer>
          <div>
            <img
              src={githubIcon}
              alt=""
              width={18}
              height={18}
            />
            <p>{user?.login}</p>
          </div>

          <div>
            <img
              src={buildingSolidIcon}
              alt=""
              width={18}
              height={18}
            />
            <p>{user?.location}</p>
          </div>

          <div>
            <img
              src={userGroupSolidIcon}
              alt=""
              width={18}
              height={18}
            />
            <p>{user?.followers} followers</p>
          </div>
        </footer>
      </ProfileInfoContainer>
    </Box>
  )
}

export const ProfileSummary = memo(ProfileSummaryComponent);
