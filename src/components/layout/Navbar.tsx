import React from 'react';
import Link from 'next/link';
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

export const Navbar: React.FC = () => {
  return (
    <StyledNav>
      <Link href='/'>Inicio</Link>
      <Link href='/posts'>Posts</Link>
      <Link href='/sobre'>Sobre</Link>
      <Link href='/contato'>Contato</Link>
    </StyledNav>
  );
};

export default Navbar;
