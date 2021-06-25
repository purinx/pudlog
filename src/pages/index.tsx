import React, { ReactElement }from 'react';
import Head from 'next/head';
import { chakra } from '@chakra-ui/react';

import { Header } from '../components/atoms/Header';
import { COLORS } from '../styles/constants';

export default function Index(): ReactElement {
  return (
    <chakra.div height="100vw" bgColor={COLORS.yellow}>
      <Head>
        <title>Pudlog</title>
      </Head>
      <Header />
    </chakra.div>
  );
}
