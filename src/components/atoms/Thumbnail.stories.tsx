import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { Thumbnail } from './Thumbnail';

/* eslint-disable */
export default {
  title: 'Thumbnail'
}

export const Component = () => {
  return (
    <ChakraProvider>
      <Thumbnail />
    </ChakraProvider>
  )
}
