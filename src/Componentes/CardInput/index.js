import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import IconButton from '../IconButton';

const CardInput = ({
  placaholderColor,
  style,
  placeholderLabel,
  showPasswordIcon,
  securePass,
  onPressShowIcon,
  onChangeText,
  value,
  maxLength,
  showIconX,
  onPressShowX,
  styleTextInput,
}) => {
  return (
    <View style={[styles.containerCard, style]}>
      <TextInput
        maxLength={maxLength}
        value={value}
        onChangeText={onChangeText}
        keyboardType="numeric"
        secureTextEntry={securePass}
        placeholderTextColor={placaholderColor}
        placeholder={placeholderLabel}
        style={[styles.containerTextInput, styleTextInput]}
      />
      {showPasswordIcon && (
        <View style={styles.paddingInterno}>
          <IconButton
            onPress={onPressShowIcon}
            iconName={'eye-closed'}
            width={20}
            height={20}
            color={'#fd7b01'}
          />
        </View>
      )}
      {showIconX && (
        <View style={styles.paddingInterno}>
          <IconButton
            onPress={onPressShowX}
            color={'#fd7b01'}
            iconName={'delete'}
            width={20}
            height={20}
          />
        </View>
      )}
    </View>
  );
};

export default CardInput;

const styles = StyleSheet.create({
  containerCard: {
    borderRadius: 10,
    backgroundColor: '#f4f6fb',
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerTextInput: {
    fontWeight: 'bold',
    color: '#323333',
    flex: 1,
    padding: 15,
  },
  paddingInterno: {padding: 15},
});
