import styled from 'styled-components';

export const NavToggler = styled.button`
  display: none;
  height: 30px;
  width: 30px;
  @media (max-width: 768px) {
    display: block;
  }
`;

interface MobileNavbarProps {
  isOpen: boolean;
}

export const MobileNavbar = styled.nav<MobileNavbarProps>`
  width: ${({ isOpen }) => (isOpen ? '100vw' : 0)};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  z-index: ${({ isOpen }) => (isOpen ? 9999 : -1)};

  background-color: ${({ theme }) => theme.colors.primary};
  transition: all ease-in-out 0.25s;

  display: flex;
  flex-direction: column;
  justify-items: end;
  align-items: flex-end;

  position: absolute;
  right: 0;
  top: 75px;

  padding-right: 20px;
  height: calc(100vh - 75px);
  min-height: fit-content;

  a {
    margin: 10px 0;
    font-size: large;
  }
`;
