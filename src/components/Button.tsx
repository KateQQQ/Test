import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {Color, colors} from './colors';
import {TypographyProps, TypographyText} from './Typography';

export interface ButtonProps extends TouchableOpacityProps {
  color?: Color;
  textColor?: Color;
  title?: string;
  textProps?: Omit<TypographyProps, 'title'>;
}

export const Button = (props: ButtonProps) => {
  const {
    title,
    color = 'red',
    textColor = 'white',
    style,
    textProps,
    disabled,
    ...rest
  } = props;
  const wrapperStyles = [styles.button, {backgroundColor: colors[color]}];

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      delayPressIn={0}
      style={[wrapperStyles, style]}
      disabled={disabled}
      {...rest}>
      {title && (
        <TypographyText
          textColor={disabled ? 'darkGrey' : textColor}
          size={16}
          title={title}
          {...textProps}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    minHeight: 48,
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
