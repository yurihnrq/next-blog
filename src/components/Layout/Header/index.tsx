import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import * as Styled from './styled';
import { LogoIcon, MoonIcon, SunIcon } from '../Icons';
import Navbar from '../Navbar';
import useThemeContext from '../../../hooks/useThemeContext';

const Header: React.FC = () => {
  const { id, toggleTheme } = useThemeContext();
  const [themeIcon, setThemeIcon] = useState<JSX.Element>();

  useEffect(() => {
    setThemeIcon(id === 'light' ? <MoonIcon /> : <SunIcon />);
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
            {themeIcon}
          </button>
          <Navbar>
            <Link href='/'>Inicio</Link>
            <Link href='/posts'>Posts</Link>
            <Link href='/sobre'>Sobre</Link>
            <Link href='/contato'>Contato</Link>
          </Navbar>
        </Styled.NavContainer>
      </Styled.Container>
    </Styled.Header>
  );
};

export default Header;
