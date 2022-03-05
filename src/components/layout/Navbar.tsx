import React from 'react';
import styled from 'styled-components';

interface NavbarProps {
  children: JSX.Element[];
}

export const Navbar = ({ children }: NavbarProps): JSX.Element => {
  return <StyledNav>{children}</StyledNav>;
};

export default Navbar;
const StyledNav = styled.nav`
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
