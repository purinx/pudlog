import React, { ReactElement }from 'react';
import Head from 'next/head';
import { chakra } from '@chakra-ui/react';

import { Header } from '../components/atoms/Header';
import { COLORS } from '../styles/constants';
import { PageContainer } from '../components/atoms/PageContainer';
import { Profile } from '../components/presenters/Profile';

export default function Index(): ReactElement {
  return (
    <chakra.div height="100vw" bgColor={COLORS.green}>
      <Head>
        <title>Pudlog</title>
      </Head>
      <Header />
      <PageContainer>
        <Profile />
      </PageContainer>
    </chakra.div>
  );
}
