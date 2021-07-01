import { Grid, GridItem } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/system';
import React, { ReactElement } from 'react';
import { COLORS, SHADOW_HOVER } from '../../../styles/constants';
import { Strong, Title } from '../../atoms/typography';

export function Profile(): ReactElement {
  return (
    <chakra.div
      bgColor={COLORS.card}
      bgRepeat="cover"
      width="80%"
      maxWidth="800px"
      height="600px"
      margin="auto"
      backgroundSize="cover"
      padding="40px"
      color={COLORS.white}
      boxShadow={SHADOW_HOVER}
      borderRadius="3px"
    >
      <Title marginBottom="30px">プリン</Title>
      <Grid
        templateColumns="140px 1fr"
        templateRows="repeat(auto-fill, 40px)"
        height="100%"
      >
        <GridItem>職域</GridItem><Strong>フロントエンドエンジニア</Strong>
        <GridItem>好きな食べ物</GridItem><Strong>プリン</Strong>
        <GridItem>Twitter</GridItem><Strong>@shi_tzu2</Strong>
      </Grid>
    </chakra.div>
  );
}
