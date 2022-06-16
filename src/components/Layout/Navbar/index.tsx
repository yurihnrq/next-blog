import React, { useCallback, useState } from 'react';
import * as Styled from './styled';
import { CloseIcon, MenuIcon } from '../Icons';

interface INavbar {
  children: React.ReactNode;
}

const Navbar: React.FC<INavbar> = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility: React.MouseEventHandler = useCallback(() => {
    setVisible(prevState => !prevState);
  }, []);

  return (
    <>
      <Styled.Nav>{children}</Styled.Nav>
      <Styled.NavToggler onClick={toggleVisibility}>
        {visible ? <CloseIcon /> : <MenuIcon />}
      </Styled.NavToggler>
      <Styled.MobileNav isOpen={visible}>{children}</Styled.MobileNav>
    </>
  );
};

export default Navbar;
