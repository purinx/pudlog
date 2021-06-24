import React from 'react';
import { chakra, ChakraProvider } from '@chakra-ui/react';

import { Medium, Small, Subtitle, Title } from '.';

/* eslint-disable */
export default {
  title: 'Typography',
  argTypes: {}
}

export const Component = () => {
  return (
    <ChakraProvider>
      <chakra.div lineHeight="40px">
        <Title>Title</Title>
        <Subtitle>Subtitle</Subtitle>
        <Medium>Medium</Medium>
        <Small>Small</Small>
      </chakra.div>
    </ChakraProvider>
  )
}
