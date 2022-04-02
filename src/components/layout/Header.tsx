import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import * as Styled from './styled/Header.styled';
import { ThemeContext } from 'styled-components';
import { LogoIcon, MoonIcon, SunIcon } from './Icons';
import MobileNavbar from './navigation/MobileNavbar';
import Navbar from './navigation/Navbar';

const Header: React.FC = () => {
  const { id, toggleTheme } = useContext(ThemeContext);
  const [icon, setIcon] = useState<JSX.Element>();

  useEffect(() => {
    setIcon(() => (id === 'light' ? <MoonIcon /> : <SunIcon />));
  }, [id]);

  return (
    <Styled.Header>
      <Styled.Container>
        <Link href='/' passHref>
          <a className='logo'>
            <LogoIcon strokeColor='#EEEEEE' height={35} width={35} />
            Next Blog
          </a>
        </Link>
        <Styled.NavContainer>
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
        </Styled.NavContainer>
      </Styled.Container>
    </Styled.Header>
  );
};

export default Header;
