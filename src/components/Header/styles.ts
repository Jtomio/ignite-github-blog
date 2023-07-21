import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme['base-profile']};
  height: 18.5rem;

  @media(max-width: 930px) {
    width: 100%;
    margin: 0;
    justify-content: center;

    img:nth-child(odd) {
      display: none;
    }
  }
`

export const Logo = styled.img`
  cursor: pointer;
  margin-top: -5.5rem;
`
