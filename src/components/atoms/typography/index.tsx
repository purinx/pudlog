import React, { ReactElement, ReactNode } from 'react';

import { ChakraProps, Text } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
} & ChakraProps;

export function Title({ children, ...styles }: Props): ReactElement {
  return (
    <Text fontSize={32} fontWeight="bold" {...styles}>
      {children}
    </Text>
  );
}

export function Subtitle({ children, ...styles }: Props): ReactElement {
  return (
    <Text fontSize={24} fontWeight="bold" marginBottom="24px" {...styles}>
      {children}
    </Text>
  );
}

export function Strong({ children, ...styles }: Props): ReactElement {
  return (
    <Text fontSize={18} fontWeight="bold" {...styles}>
      {children}
    </Text>
  );
}

export function Medium({ children, ...styles }: Props): ReactElement {
  return (
    <Text fontSize={18} {...styles}>
      {children}
    </Text>
  );
}

export function Small({ children, ...styles }: Props): ReactElement {
  return (
    <Text fontSize={12} {...styles}>
      {children}
    </Text>
  );
}
