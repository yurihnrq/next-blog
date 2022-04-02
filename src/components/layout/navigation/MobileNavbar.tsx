import React, { useCallback, useEffect, useState } from 'react';
import * as Styled from './styled/MobileNavbar.styled';
import { CloseIcon, MenuIcon } from '../Icons';

export const MobileNavbar: React.FC = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    setVisible(prevState => !prevState);
  }, []);

  return (
    <>
      <Styled.NavToggler onClick={() => toggleVisibility()}>
        {visible ? <CloseIcon /> : <MenuIcon />}
      </Styled.NavToggler>
      <Styled.MobileNavbar isOpen={visible}>{children}</Styled.MobileNavbar>
    </>
  );
};

export default MobileNavbar;
