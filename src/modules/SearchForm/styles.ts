import { styled } from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 72px 0 48px 0;
  width: 100%;

  header {
    display: flex;
    justify-content: space-between;
    
    h3 {
      color: ${props => props.theme["base-subtitle"]};
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 700;
    }

    span {
      color: ${props => props.theme["base-span"]};
    }
  }
`
