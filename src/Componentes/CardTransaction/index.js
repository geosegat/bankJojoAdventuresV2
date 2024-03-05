import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AppText from '../AppText';
import IconButton from '../IconButton';

const CardTransaction = ({
  iconName,
  label,
  style,
  width = 25,
  height = 25,
  onPress,
  color = '#f29b49',
  fontSize = 'normal',
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <View style={styles.containerImgLabel}>
        <IconButton
          onPress={onPress}
          isDisabled
          iconName={iconName}
          width={width}
          height={height}
          color={color}
        />
        <AppText style={styles.marginLeft} size={fontSize} variant="bold">
          {label}
        </AppText>
      </View>

      <IconButton
        isDisabled
        iconName={'seta-direita'}
        width={20}
        height={20}
        color={'#fd7c09'}
      />
    </TouchableOpacity>
  );
};

export default CardTransaction;

const styles = StyleSheet.create({
  container: {
    borderColor: '#e1e1e3',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
  },
  containerImgLabel: {flexDirection: 'row', flex: 1, alignItems: 'center'},
  marginLeft: {marginLeft: 15},
});
