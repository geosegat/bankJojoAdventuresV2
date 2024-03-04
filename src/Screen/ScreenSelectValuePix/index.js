import {StyleSheet, ScrollView, View, TextInput, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderOptions from '../../Componentes/HeaderOptions';
import AppText from '../../Componentes/AppText';
import IconButton from '../../Componentes/IconButton';
import InputMaskMoney from '../../Componentes/InputMaskMoney';
import CardButton from '../../Componentes/CardButton';
import formatCurrency from '../../utils/formatCurrency';
import {useSelector} from 'react-redux';

const ScreenSelectValuePix = ({navigation}) => {
  const balance = useSelector(state => state.balance.balance);
  const userReceived = useSelector(
    state => state.cpfPixReceived.namePixReceived,
  );
  const [showBalance, setShowBalance] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);
  const [buttonColor, setButtonColor] = useState('#dedfe4');
  const [labelColor, setLabelColor] = useState('#b7b8bc');
  const [pixValue, setPixValue] = useState(0);

  const onPressShowBalance = () => {
    setShowBalance(prevShowBalance => !prevShowBalance);
  };

  const onPresshome = () => {
    navigation.navigate('ScreenExtractAccount');
  };
  const onPressBack = () => {
    navigation.navigate('ScreenSelectPix');
  };

  const onPressReviewPix = () => {
    if (
      parseFloat(formatCurrency(balance).replace(/\./g, '').replace(',', '.')) >
      parseFloat(pixValue.replace(/\./g, '').replace(',', '.'))
    ) {
      navigation.navigate('ScreenPixReview');
    } else {
      Alert.alert('Saldo insuficiente!');
    }
  };

  const onChangeText = text => {
    setPixValue(text);
    console.log(text);
    if (pixValue === '0,00') {
      setButtonColor('#dedfe4');
      setLabelColor('#b7b8bc');
      setDisabledButton(true);
    } else {
      setButtonColor('#ff7a01');
      setLabelColor('#fff');
      setDisabledButton(false);
    }
  };
  return (
    <View style={styles.container}>
      <HeaderOptions
        onPressLeft={onPressBack}
        onPressRight={onPresshome}
        iconRightName={'home'}
        showColorIconRight="#ef801d"
        label={'Valor a pagar'}
        style={styles.containerHeader}
      />
      <View style={styles.containerBalance}>
        <AppText color="#7d7c7e" variant="semiBold" style={styles.flexBalance}>
          Saldo em conta
        </AppText>
        <View style={styles.containerBalanceIcon}>
          <AppText variant="bold">
            R$ {showBalance ? formatCurrency(balance) : '*****'}
          </AppText>
          <IconButton
            style={styles.leftIcon}
            onPress={onPressShowBalance}
            iconName={'eye-closed'}
            color={'orange'}
            width={25}
            height={25}
          />
        </View>
      </View>
      <View style={styles.cardValueInputUser}>
        <InputMaskMoney
          onChangeValor={onChangeText}
          styleInput={styles.styleInput}
          style={styles.styleMargin}
        />
        <AppText style={styles.styleMargin2}>Pagar para</AppText>
        <AppText variant="bold">{userReceived}</AppText>
      </View>
      <CardButton
        disabledLoading={false}
        onPress={onPressReviewPix}
        disabled={disabledButton}
        colorLabel={labelColor}
        label={'Continuar'}
        style={{backgroundColor: buttonColor}}
      />
    </View>
  );
};

export default ScreenSelectValuePix;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  containerHeader: {marginBottom: 30},
  containerBalance: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#dedfde',
    padding: 15,
    marginBottom: 20,
  },
  flexBalance: {flex: 1},
  leftIcon: {marginLeft: 10},
  containerBalanceIcon: {flexDirection: 'row', alignItems: 'center'},
  styleInput: {
    color: '#fe7b04',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 5,
  },
  cardValueInputUser: {alignItems: 'center', flex: 1},
  styleMargin: {marginBottom: 15},
  styleMargin2: {marginBottom: 8},
});
