import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Header from './layout/Header';

const StyledContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 100vw;
`;

interface LayoutProps {
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <StyledContainer>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main>{children}</main>
    </StyledContainer>
  );
};

export default Layout;
