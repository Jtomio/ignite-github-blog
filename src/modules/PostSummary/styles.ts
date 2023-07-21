import { styled } from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  main {
    margin: 20px 0 8px;

    h1 {
      color: ${props => props.theme["base-title"]};
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 700;
    }
  }

  footer {
    display: flex;
    gap: 32px;

    span {
      display: flex;
      gap: 8px;
      align-items: center;
      color: ${props => props.theme["base-span"]};
    }

    @media(max-width: 930px) {
      align-items: start;
      flex-direction: column;
      gap: 10px;
      margin-top: 16px;
    }
  }
`
