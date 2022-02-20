import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { LogoIcon, MoonIcon, SunIcon } from '../Icons';

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 20px;
  button {
    width: 25px;
    height: 25px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  a {
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: larger;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  a {
    margin: 0 5px;
    font-size: medium;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const Header: React.FC = () => {
  const { id, toggleTheme } = useContext(ThemeContext);
  const [icon, setIcon] = useState<JSX.Element | null>(null);

  useEffect(() => {
    setIcon(() => (id === 'light' ? <MoonIcon /> : <SunIcon />));
  }, [id]);

  return (
    <StyledHeader>
      <Link href='/' passHref>
        <a>
          <LogoIcon height={35} width={35} />
          Next Blog
        </a>
      </Link>
      <StyledContainer>
        <button onClick={() => toggleTheme()}>{icon}</button>
        <StyledNav>
          <Link href='/'>Inicio</Link>
          <Link href='/'>Posts</Link>
          <Link href='/'>Sobre</Link>
          <Link href='/'>Contato</Link>
        </StyledNav>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
