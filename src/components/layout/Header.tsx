import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { LogoIcon, MoonIcon, SunIcon } from './Icons';
import MobileNavbar from './MobileNavbar';
import Navbar from './Navbar';

const Header: React.FC = () => {
  const { id, toggleTheme } = useContext(ThemeContext);
  const [icon, setIcon] = useState<JSX.Element>();

  useEffect(() => {
    setIcon(() => (id === 'light' ? <MoonIcon /> : <SunIcon />));
  }, [id]);

  return (
    <StyledHeader>
      <StyledContainer>
        <Link href='/' passHref>
          <a className='logo'>
            <LogoIcon strokeColor='#EEEEEE' height={35} width={35} />
            Next Blog
          </a>
        </Link>
        <NavContainer>
          <button className='themeToggler' onClick={() => toggleTheme()}>
            {icon}
          </button>
          <Navbar>
            <Link href='/'>Inicio</Link>
            <Link href='/posts'>Posts</Link>
            <Link href='/sobre'>Sobre</Link>
            <Link href='/contato'>Contato</Link>
          </Navbar>
          <MobileNavbar>
            <Link href='/'>Inicio</Link>
            <Link href='/posts'>Posts</Link>
            <Link href='/sobre'>Sobre</Link>
            <Link href='/contato'>Contato</Link>
          </MobileNavbar>
        </NavContainer>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 20px;

  a {
    color: #eeeeee;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a.logo {
    font-size: larger;
  }
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  button.themeToggler {
    width: 25px;
    height: 25px;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  max-width: 1280px;
`;
