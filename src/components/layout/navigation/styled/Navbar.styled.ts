import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  a {
    margin: 0 10px;
    font-size: medium;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
