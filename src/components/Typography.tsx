import React from 'react';
import {StyleProp, Text, TextStyle, TextProps, StyleSheet} from 'react-native';
import {Color, colors} from './colors';

export interface TypographyProps extends TextProps {
  textColor?: Color;
  size?: number;
  title?: string | number;
  weight?: 'normal' | 'bold' | 'black';
  transform?: TextStyle['textTransform'];
}

export const TypographyText = (props: TypographyProps) => {
  const {
    title,
    textColor = 'lightBlack',
    size = 17,
    weight = 'normal',
    transform,
    style,
    ...rest
  } = props;
  const textStyles: StyleProp<TextStyle> = [
    {
      color: colors[textColor],
      fontSize: size,
      lineHeight: size * 1,
      textTransform: transform,
    },
    weight === 'bold' && styles.textBold,
    weight === 'black' && styles.textBlack,
  ];

  return (
    <Text style={[textStyles, style]} {...rest}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  textBold: {
    fontFamily: 'PFDinDisplayPro-Bold',
  },
  textBlack: {
    fontFamily: 'PFDinDisplayPro-Black',
  },
});
