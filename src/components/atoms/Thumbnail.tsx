import React, { ReactElement } from 'react';
import Image from 'next/image';
import { chakra } from '@chakra-ui/system';
import kyomu from '../../../public/kyomu.jpg';

export function Thumbnail(): ReactElement {
  return (
    <chakra.div
      className="Thumbnail"
      position="relative"
      width="800px"
      height="800px"
      maxWidth="800px"
      maxHeight="800px"
      display="flex"
      margin="auto"
      justifyContent="center"
    >
      <Image src={kyomu} alt="kyomu" layout="fill"/>
    </chakra.div>
  );
}
