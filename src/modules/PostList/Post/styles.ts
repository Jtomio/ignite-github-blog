import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 20px;
  background-color: ${props => props.theme["base-post"]};
  padding: 32px;
  border-radius: 10px;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid ${props => props.theme["base-label"]};
  }

  header {
    display: flex;
    justify-content: space-between;
    
    h4 {
      color: ${props => props.theme["base-title"]};
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 700;
      margin-right: 16px;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;

      @media(max-width: 700px) {
        font-size: 1rem;
        -webkit-line-clamp: 3;
      } 
    }

    span {
      color: ${props => props.theme["base-span"]};
      font-size: 0.875rem;
      white-space: nowrap;
      line-height: 28px;

      @media(max-width: 400px) {
        display: none;
      } 
    }
  }

  main {
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      color: ${props => props.theme["base-text"]};
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  }

  @media(max-width: 300px) {
    margin: 0;
    border: none;
  }

  @media(max-width: 930px) {
    width: 92.5vw;
  }

  @media(max-width: 500px) {
    width: 85vw;
  } 

  @media(max-width: 400px) {
    width: 80vw;
  } 
`

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`
