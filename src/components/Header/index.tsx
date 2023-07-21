import { useNavigate } from "react-router-dom";
import EffectLeft from "../../assets/images/effect-left.svg";
import EffectRight from "../../assets/images/effect-right.svg";
import GithubBlogLogo from "../../assets/images/logo.svg";
import {
  Container,
  Logo
} from "./styles";

export function Header() {
  const navigate = useNavigate();

  function handleLogoClick() {
    navigate("/");
  }

  return (
    <Container>
      <img src={EffectLeft} alt="" />
      <Logo src={GithubBlogLogo} alt="Github Logo" onClick={handleLogoClick} />
      <img src={EffectRight} alt="" />
    </Container>
  )
}