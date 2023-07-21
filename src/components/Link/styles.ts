import { styled } from "styled-components";

export const Container = styled.a`
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  color: ${props => props.theme["blue"]};
  border-bottom: 1px solid transparent;

  text-decoration: none;

  &:hover {
    cursor: pointer;
    border-bottom: 1px solid ${props => props.theme["blue"]};
  }
`