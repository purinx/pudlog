import React, { ReactElement, ReactNode } from 'react';

import { Text } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
};

export function Title({ children }: Props): ReactElement {
  return (
    <Text fontSize={32} fontWeight="bold">
      {children}
    </Text>
  );
}

export function Subtitle({ children }: Props): ReactElement {
  return (
    <Text fontSize={24} fontWeight="bold">
      {children}
    </Text>
  );
}

export function Strong({ children }: Props): ReactElement {
  return (
    <Text fontSize={18} fontWeight="bold">
      {children}
    </Text>
  );
}

export function Medium({ children }: Props): ReactElement {
  return (
    <Text fontSize={18}>
      {children}
    </Text>
  );
}

export function Small({ children }: Props): ReactElement {
  return (
    <Text fontSize={12}>
      {children}
    </Text>
  );
}
