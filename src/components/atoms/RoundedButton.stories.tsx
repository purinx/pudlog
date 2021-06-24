import React from 'react';
import { chakra, ChakraProvider } from '@chakra-ui/react';

import { RoundedButton } from './RoundedButton';
import { COLORS } from '../../styles/constants';
/* eslint-disable */

export default {
  title: 'RoundedButton',
  argTypes: {}
}

export const Component = () => {
  return (
    <ChakraProvider>
      <chakra.div
        bgColor={COLORS.yellow}
        minHeight="100px"
        padding="20px"
        width="100%">
        <chakra.div bgColor='rgba(0,0,0,0.1)' height="47px" width="100%" padding="7px">
          <RoundedButton onClick={() => { }}>
              Click Me
          </RoundedButton>
        </chakra.div>
      </chakra.div>
    </ChakraProvider>
  )
}
