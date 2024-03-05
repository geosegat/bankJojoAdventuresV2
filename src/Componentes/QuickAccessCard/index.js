import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import IconButton from '../IconButton';
import AppText from '../AppText';

const QuickAccessCard = ({iconName, label, style, color, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <IconButton
        isDisabled
        iconName={iconName}
        width={20}
        height={20}
        color={color ?? 'black'}
      />
      <AppText style={{marginLeft: 8}} variant="bold">
        {label}
      </AppText>
    </TouchableOpacity>
  );
};

export default QuickAccessCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f2f3',
    padding: 15,
    borderRadius: 50,
  },
});
