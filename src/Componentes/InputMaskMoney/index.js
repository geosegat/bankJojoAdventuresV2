import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import SimpleMaskMoney from 'simple-mask-money';
import AppText from '../AppText';

const InputMaskMoney = ({style, onChangeValor, styleInput}) => {
  const [inputValue, setInputValue] = useState('0,00');

  useEffect(() => {
    SimpleMaskMoney.args = {
      allowNegative: false,
      negativeSignAfter: false,
      prefix: '',
      suffix: '',
      fixed: true,
      fractionDigits: 2,
      decimalSeparator: ',',
      thousandsSeparator: '.',
    };
  }, []);

  const handleChangeSaldo = text => {
    const novoValor = SimpleMaskMoney.formatToMask(text || 0);
    setInputValue(novoValor);
    onChangeValor(novoValor);
  };
  return (
    <View style={[styles.container, style]}>
      <AppText variant="bold" size="xxlarge">
        R$
      </AppText>
      <TextInput
        style={styleInput}
        value={inputValue}
        keyboardType="numeric"
        onChangeText={handleChangeSaldo}
      />
    </View>
  );
};

export default InputMaskMoney;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderColor: '#b7b6ba',
  },
});
