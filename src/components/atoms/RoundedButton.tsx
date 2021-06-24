import { chakra } from '@chakra-ui/system';
import React, { ReactElement, ReactNode } from 'react';

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
      height={height}
      border="2px solid #fff"
      borderRadius={height / 2}
      onClick={onClick}
      minWidth="100px"
      color="#fff"
      marginX="8px">
      {children}
    </chakra.button>
  );
}
