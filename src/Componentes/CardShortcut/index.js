import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import IconButton from '../IconButton';
import AppText from '../AppText';

const Cardshortcut = ({label, iconName}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity style={styles.containerImg}>
        <IconButton
          iconName={iconName}
          width={20}
          height={20}
          color={'black'}
        />
      </TouchableOpacity>
      <AppText size="small">{label}</AppText>
    </View>
  );
};

export default Cardshortcut;

const styles = StyleSheet.create({
  containerImg: {
    backgroundColor: '#fff',
    padding: 22,
    marginBottom: 12,
    borderRadius: 15,
    elevation: 1,
  },
});
