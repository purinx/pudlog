import React, { ReactElement } from 'react';

import { chakra } from '@chakra-ui/react';
import { Strong, Title } from './typography';
import { RoundedButton } from './RoundedButton';

export function Header(): ReactElement {
  return (
    <chakra.div
      className="Header"
      position="fixed"
      display="flex"
      justifyContent="space-between"
      bgColor="rgba(0,0,0,0.1)"
      height="52px"
      color="#fff"
      width="100%"
      paddingX="20px">
      <chakra.div className="Header-right">
        <Title>Pudlog</Title>
      </chakra.div>
      <chakra.div
        className="Header-left"
        display="flex"
        alignItems="center"
        width="280px"
        justifyContent="space-evenly">
        <RoundedButton onClick={() => {}}>
          <Strong>Menu1</Strong>
        </RoundedButton>
        <RoundedButton onClick={() => {}}>
          <Strong>Menu2</Strong>
        </RoundedButton>
      </chakra.div>
    </chakra.div>
  );
}
