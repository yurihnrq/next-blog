import Head from 'next/head';
import React from 'react';
import * as Styled from './styled/Layout.styled';
import Header from './layout/Header';
import Footer from './layout/Footer';

interface LayoutProps {
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <Styled.Container>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Styled.Main>{children}</Styled.Main>
      <Footer />
    </Styled.Container>
  );
};

export default Layout;
