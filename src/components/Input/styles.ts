import { styled } from "styled-components";

export const Container = styled.input`
  width: 100%;
  border-radius: 6px;
  border: 1px solid ${props => props.theme["base-border"]};
  background: ${props => props.theme["base-input"]};
  padding: 12px 16px;
  color: ${props => props.theme["base-text"]};
  font-size: 1rem;
  
  &::placeholder {
    color: ${props => props.theme["base-label"]};
  }

  &:focus {
    border: 1px solid ${props => props.theme["blue"]};
  }
`
