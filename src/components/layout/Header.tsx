import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import styled, { ThemeContext } from 'styled-components'; 

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
  }
`;

const MoonIcon: JSX.Element = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    stroke='#FFFFFF'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
    />
  </svg>
);

const SunIcon: JSX.Element = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    stroke='#FFFFFF'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
    />
  </svg>
);

const Header: React.FC = () => {
  const { id, toggleTheme } = useContext(ThemeContext);
  const [icon, setIcon] = useState<JSX.Element | null>(null);

  useEffect(() => {
    setIcon(() => (id === 'light' ? MoonIcon : SunIcon));
  }, [id]);

  return (
    <StyledHeader>
      <Link href='/'>Hello World 🌎👋🏻</Link>
      <button onClick={() => toggleTheme()}>{icon}</button>
    </StyledHeader>
  );
};

export default Header;
