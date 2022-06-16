import styled from 'styled-components';

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 65px;

  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;

  span {
    font-size: small;
  }
`;
