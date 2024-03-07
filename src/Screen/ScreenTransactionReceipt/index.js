import {StyleSheet, ScrollView, View, Alert} from 'react-native';
import React from 'react';
import HeaderOptions from '../../Componentes/HeaderOptions';
import IconButton from '../../Componentes/IconButton';
import AppText from '../../Componentes/AppText';
import CardInfoTransiction from '../../Componentes/CardInfoTransiction';
import CardTransactionStatement from '../../Componentes/CardTransactionStatement';
import CardButton from '../../Componentes/CardButton';
import formatCurrency from '../../utils/formatCurrency';

const ScreenTransactionReceipt = ({navigation}) => {
  const {
    userReceivedPixData,
    creditUserCpf,
    debitUserCpf,
    transferDatetime,
    transferValue,
    transferId,
  } = transferApiResponse;

  console.log(userReceivedPixData);
  const onPressBack = () => {
    navigation.navigate('ScreenSelectValuePix');
  };
  const onPresshome = () => {
    navigation.navigate('ScreenExtractAccount');
  };
  const onPressGoNewPix = () => {
    navigation.navigate('ScreenSelectPix');
  };
  return (
    <ScrollView style={styles.container}>
      <HeaderOptions
        onPressRight={onPresshome}
        onPressLeft={onPressBack}
        label={'Comprovante'}
        iconRightName={'home'}
        showColorIconRight="#f07303"
      />
      <View style={styles.caixa} />
      <View style={styles.containerPixValue}>
        <IconButton
          isDisabled
          iconName={'teste'}
          style={styles.containerCheckImg}
          color={'green'}
        />
        <AppText size="huge" variant="bold">
          Pix enviado
        </AppText>
        <AppText size="huge" variant="bold">
          R$ {formatCurrency(transferValue)}
        </AppText>
        <View style={styles.caixa} />
      </View>
      <CardInfoTransiction
        header={'Sobre a transação'}
        date={'Quarta, 24/01/2024'}
        horario={'18h16'}
        idTrans={transferId}
      />
      <View style={styles.marginBottom} />

      <CardTransactionStatement
        nome={'Nome de quem recebeu aqui'}
        cpf={'158789489484'}
        banco={'Bco C6 S.A.'}
        header={'Quem recebeu'}
      />
      <View style={styles.marginBottom} />

      <CardTransactionStatement
        nome={'Nome de quem pagou aqui'}
        cpf={'158789489484'}
        banco={'Bco C6 S.A.'}
        header={'Quem pagou'}
      />
      <View style={styles.marginBottom2} />

      <CardButton
        onPress={() => {
          Alert.alert('Não disponivel!');
        }}
        style={styles.marginBottom2}
        colorLabel={'#fff'}
        label={'Compartilhar comprovante'}
      />
      <CardButton
        onPress={onPressGoNewPix}
        style={styles.containerButtonNewPix}
        colorLabel={'#ff7a01'}
        label={'Realizar novo Pix'}
      />
      <View style={styles.caixa} />
    </ScrollView>
  );
};

export default ScreenTransactionReceipt;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  containerCheckImg: {
    width: 65,
    height: 65,
    marginBottom: 20,
  },
  caixa: {height: 35},
  marginBottom: {marginBottom: 20},
  marginBottom2: {marginBottom: 10},
  containerPixValue: {
    marginBottom: 25,
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderStyle: 'dotted',
    borderColor: '#dddddd',
  },
  containerButtonNewPix: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ff7a01',
  },
});
