import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconButton from '../IconButton';
import AppText from '../AppText';

const CardCheckFavorite = ({style}) => {
  return (
    <View style={[styles.container, style]}>
      <IconButton iconName={'heart'} width={25} height={25} color={'#121212'} />
      <View style={{marginLeft: 8}}>
        <AppText style={{marginBottom: 3}} size="large" variant="bold">
          Chave já favoritada
        </AppText>
        <AppText>Usuario teste</AppText>
      </View>
    </View>
  );
};

export default CardCheckFavorite;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
