import React from 'react';
import * as Styled from './styled/Navbar.styled';

export const Navbar: React.FC = ({ children }) => {
  return <Styled.Nav>{children}</Styled.Nav>;
};

export default Navbar;
