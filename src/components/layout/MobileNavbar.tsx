import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { CloseIcon, MenuIcon } from './Icons';

interface MobileNavbarProps {
  children: JSX.Element[];
}

export const MobileNavbar = ({ children }: MobileNavbarProps): JSX.Element => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    setVisible(prevState => !prevState);
  }, []);

  useEffect(() => {
    setVisible(false);
  }, []);

  return (
    <>
      <StyledNavToggler onClick={() => toggleVisibility()}>
        {visible ? <CloseIcon /> : <MenuIcon />}
      </StyledNavToggler>
      <StyledMobileNavbar className={visible ? 'active' : ''}>
        {children}
      </StyledMobileNavbar>
    </>
  );
};

export default MobileNavbar;

const StyledNavToggler = styled.button`
  display: none;
  height: 30px;
  width: 30px;
  @media (max-width: 768px) {
    display: block;
  }
`;

const StyledMobileNavbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-items: end;
  align-items: flex-end;
  opacity: 0;

  position: absolute;
  z-index: -1;
  right: 0;
  top: 75px;

  padding-right: 20px;
  width: 0px;
  height: calc(100vh - 75px);
  min-height: fit-content;

  transition: all ease-in-out 0.25s;
  &.active {
    opacity: 1;
    z-index: 9999;
    width: 100vw;
  }

  a {
    margin: 10px 0;
    font-size: large;
  }
`;
