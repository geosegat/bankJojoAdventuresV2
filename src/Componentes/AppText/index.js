import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AppText = ({
  variant = 'normal',
  size = 'normal',
  color = '#333',
  children,
  style,
  numberOfLines,
}) => {
  const sizes = {
    small: 12,
    normal: 14,
    large: 16,
    xlarge: 18,
    xxlarge: 20,
    xxxlarge: 22,
    huge: 24,
    xhuge: 28,
    xxhuge: 36,
    super: 50,
  };
  const variants = {
    normal: 'normal',
    medium: '300',
    semiBold: '500',
    bold: '700',
  };
  const styles = StyleSheet.create({
    text: {fontSize: sizes[size], fontWeight: variants[variant], color},
  });

  return (
    <Text numberOfLines={numberOfLines} style={[styles.text, style]}>
      {children}
    </Text>
  );
};

export default AppText;
