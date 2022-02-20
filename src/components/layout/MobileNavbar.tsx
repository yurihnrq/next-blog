import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { CloseIcon, MenuIcon } from './Icons';

const StyledNavToggler = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

interface StyledMobileNavbarProps {
  visible: boolean;
}

const StyledMobileNavbar = styled.nav<StyledMobileNavbarProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  flex-direction: column;
  justify-items: end;
  align-items: flex-end;

  position: absolute;
  left: 0;
  top: 0;

  padding-right: 20px;
  width: 100vw;
  height: 100vh;

  a {
    margin: 10px 0;
    font-size: medium;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 75px;
`;

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
        <MenuIcon height={25} width={25} />
      </StyledNavToggler>
      <StyledMobileNavbar visible={visible}>
        <StyledDiv>
          <button onClick={() => toggleVisibility()}>
            <CloseIcon height={25} width={25} />
          </button>
        </StyledDiv>
        {children}
      </StyledMobileNavbar>
    </>
  );
};

export default MobileNavbar;
