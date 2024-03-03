import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../AppText';

const CardKeyValue = ({chave, value, style}) => {
  return (
    <View style={[styles.container, style]}>
      <AppText>{chave}</AppText>
      <AppText variant="bold">{value}</AppText>
    </View>
  );
};

export default CardKeyValue;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', justifyContent: 'space-between'},
});
