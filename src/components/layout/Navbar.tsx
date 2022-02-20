import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  a {
    margin: 0 5px;
    font-size: medium;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

interface NavbarProps {
  children: JSX.Element[];
}

export const Navbar = ({ children }: NavbarProps): JSX.Element => {
  return <StyledNav>{children}</StyledNav>;
};

export default Navbar;
