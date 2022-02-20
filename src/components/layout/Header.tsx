import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 20px;
`;

const Header: React.FC = () => {
  return <StyledHeader>Hello World 🌎👋🏻</StyledHeader>;
};

export default Header;
