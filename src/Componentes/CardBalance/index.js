import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import AppText from '../AppText';
import IconButton from '../IconButton';
import QuickAccessCard from '../QuickAccessCard';

const CardBalance = ({balance, onPress, style, onPressPix}) => {
  return (
    <View style={[styles.containerCardBalance, style]}>
      <View style={styles.paddingBalance}>
        <AppText style={styles.styleHeaderBalance} color="#6f6f70" size="large">
          Conta Digital
        </AppText>
        <View style={styles.containerBalanceExtract}>
          <View style={styles.containerbalance}>
            <AppText size="xxxlarge" variant="bold">
              R$
            </AppText>
            <AppText size="xxlarge" variant="bold" style={styles.marginBalance}>
              {balance}
            </AppText>
          </View>
          <IconButton
            iconName={'seta-direita'}
            width={25}
            height={25}
            color={'#6b6a6d'}
            onPress={onPress}
          />
        </View>
      </View>
      <View style={styles.containerQuickCard}>
        <QuickAccessCard onPress={onPressPix} label={'Pix'} iconName={'pix'} />
        <QuickAccessCard label={'Pagar'} iconName={'boleto'} />
        <QuickAccessCard label={'Cartões'} iconName={'credit-card'} />
      </View>
    </View>
  );
};

export default CardBalance;

const styles = StyleSheet.create({
  containerCardBalance: {
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 1,
  },
  containerbalance: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  containerBalanceExtract: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  styleHeaderBalance: {marginBottom: 15},
  containerQuickCard: {
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  marginBalance: {marginLeft: 5},
  paddingBalance: {paddingHorizontal: 15, paddingVertical: 15},
});
