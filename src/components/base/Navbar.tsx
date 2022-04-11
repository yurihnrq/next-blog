import React, { useCallback, useState } from 'react';
import * as Styled from './styled/Navgation.styled';
import { CloseIcon, MenuIcon } from './Icons';

const Navigation: React.FC = ({ children }) => {
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

export default Navigation;
