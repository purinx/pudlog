import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Header } from './Header';

/* eslint-disable */

export default {
  title: 'Header',
  argTypes: {},
};

export const Component = () => {
  return (
    <ChakraProvider>
      <Header />
    </ChakraProvider>
  );
}
