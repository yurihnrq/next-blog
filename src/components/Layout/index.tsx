import Head from 'next/head';
import React from 'react';
import * as Styled from './styled';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
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
