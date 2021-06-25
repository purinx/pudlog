import { chakra } from '@chakra-ui/system';
import React, { ReactNode, ReactElement } from 'react';

type Props = {
  children: ReactNode;
};

export function PageContainer({ children }: Props): ReactElement {
  return (
    <chakra.div
      className="PageContainer"
      position="relative"
      width="calc(100vw - 200px)"
      height="calc(100vh - 52px)"
      margin="auto"
      paddingY="40px"
    >
      {children}
    </chakra.div>
  );
}
