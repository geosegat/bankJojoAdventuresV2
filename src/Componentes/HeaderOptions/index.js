import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconButton from '../IconButton';
import AppText from '../AppText';

const HeaderOptions = ({
  label,
  onPressLeft,
  onPressRight,
  showColorIconRight = '#fff',
  iconRightName,
  style,
  isDisabledHome,
}) => {
  return (
    <View style={[styles.contianerHeader, style]}>
      <View style={styles.flexBack}>
        <IconButton
          onPress={onPressLeft}
          iconName={'arrow-left'}
          width={25}
          height={25}
          color={'#ef801d'}
        />
      </View>
      <AppText style={styles.styleText} size="xlarge" variant="bold">
        {label}
      </AppText>

      <IconButton
        isDisabled={isDisabledHome}
        onPress={onPressRight}
        iconName={iconRightName}
        width={25}
        height={25}
        color={showColorIconRight}
      />
    </View>
  );
};

export default HeaderOptions;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', padding: 20},
  contianerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
