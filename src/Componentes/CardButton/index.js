import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AppText from '../AppText';

const CardButton = ({
  style,
  label,
  onPress,
  disabled,
  colorLabel,
  disabledLoading = true,
  timeLoading = 1000,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = () => {
    if (disabledLoading) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        onPress();
      }, timeLoading);
    } else {
      onPress();
    }
  };

  return (
    <View>
      <TouchableOpacity
        disabled={disabled}
        onPress={handlePress}
        style={[styles.containerCard, style]}>
        {disabledLoading ? (
          <AppText variant="bold" size="large" color={colorLabel}>
            {isLoading ? (
              <ActivityIndicator size={'small'} color={'white'} />
            ) : (
              label
            )}
          </AppText>
        ) : (
          <AppText variant="bold" size="large" color={colorLabel}>
            {label}
          </AppText>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CardButton;

const styles = StyleSheet.create({
  containerCard: {
    borderRadius: 8,
    backgroundColor: '#ff7a01',
    padding: 15,
    alignItems: 'center',
  },
});
