import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableNativeFeedback,
} from 'react-native';
import React from 'react';
import IconButton from '../IconButton';
import AppText from '../AppText';

const CardMoreActions = ({
  disabled,
  iconName,
  label,
  style,
  width = 25,
  height = 25,
  color = '#f97e09',
  colorButton = '#fef3e6',
}) => {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        disabled={disabled}
        style={[styles.containerButton, {backgroundColor: colorButton}]}>
        <IconButton
          isDisabled
          iconName={iconName}
          width={width}
          height={height}
          color={color}
        />
      </TouchableOpacity>
      <AppText variant="bold" style={styles.labelText}>
        {label}
      </AppText>
    </View>
  );
};

export default CardMoreActions;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  containerButton: {
    backgroundColor: '#fef3e6',
    borderRadius: 50,
    padding: 15,
    marginBottom: 12,
  },
  labelText: {maxWidth: 60, textAlign: 'center'},
});
