import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
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

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <span>App desenvolvido por Yuri Henrique B. Maciel</span>
    </StyledFooter>
  );
};

export default Footer;
