import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Header from './layout/Header';
import Footer from './layout/Footer';

const StyledContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  position: relative;
`;

const StyledMain = styled.main`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  margin-bottom: 65px;
  position: relative;
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
      <StyledMain>{children}</StyledMain>
      <Footer />
    </StyledContainer>
  );
};

export default Layout;
