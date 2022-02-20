import { NextPage } from 'next';
import React from 'react';
import Layout from '../components/Layout';

const Page404: NextPage = () => {
  return (
    <Layout title='404 | Página não encontrada'>Página não existe.</Layout>
  );
};

export default Page404;
