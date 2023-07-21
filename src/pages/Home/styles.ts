import { styled } from "styled-components";

export const Container = styled.main`
  max-width: 54rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: -5.5rem auto;

  @media(max-width: 930px) {
    margin: -5.5rem 2rem;
  }
`
