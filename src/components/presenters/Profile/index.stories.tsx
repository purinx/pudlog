import { ChakraProvider } from '@chakra-ui/react';
import { Profile } from '.';

/* eslint-disable */
export default { title: 'Profile' };

export const Component = () => {
  return (
    <ChakraProvider>
      <Profile />
    </ChakraProvider>
  );
}
