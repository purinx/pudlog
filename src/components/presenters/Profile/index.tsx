import { Grid, GridItem } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/system';
import React, { ReactElement } from 'react';
import { COLORS } from '../../../styles/constants';
import { Strong, Title } from '../../atoms/typography';

export function Profile(): ReactElement {
  return (
    <chakra.div
      bgImage="/pudding.png"
      bgRepeat="cover"
      width="80%"
      maxWidth="800px"
      height="600px"
      margin="auto"
      backgroundSize="cover"
      padding="40px"
      color={COLORS.white}
    >
      <Title marginBottom="30px">プリン</Title>
      <Grid
        templateColumns="140px 1fr"
        templateRows="repeat(auto-fill, 40px)"
      >
        <GridItem>職域</GridItem><Strong>フロントエンドエンジニア</Strong>
        <GridItem>好きな食べ物</GridItem><Strong>プリン</Strong>
      </Grid>
    </chakra.div>
  );
}
