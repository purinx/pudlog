import { chakra } from '@chakra-ui/system';
import React, { ReactElement, ReactNode } from 'react';
import { SHADOW_HOVER } from '../../styles/constants';

type Props = {
  children: ReactNode;
  onClick: () => void;
  bgColor?: string;
  height?: number;
};

export function RoundedButton({
  children,
  onClick,
  bgColor = 'rgba(0,0,0,0.0)',
  height = 32
}: Props): ReactElement {
  return (
    <chakra.button
      bgColor={bgColor}
      height={`${height}px`}
      border="2px solid #fff"
      borderRadius={`${height / 2}px`}
      onClick={onClick}
      minWidth="100px"
      color="#fff"
      marginX="8px"
      _hover={{
        boxShadow: SHADOW_HOVER,
        bgColor: 'rgba(0,0,0,0.04)'
      }}>
      {children}
    </chakra.button>
  );
}
