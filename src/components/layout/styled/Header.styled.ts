import styled from 'styled-components';

export const Header = styled.header`
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

export const NavContainer = styled.div`
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

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  max-width: 1280px;
`;
