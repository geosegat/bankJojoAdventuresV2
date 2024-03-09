import {StyleSheet, View, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderOptions from '../../Componentes/HeaderOptions';
import AppText from '../../Componentes/AppText';
import IconButton from '../../Componentes/IconButton';
import CardButton from '../../Componentes/CardButton';
import CardCheckFavorite from '../../Componentes/CardCheckFavorite';
import CardTransictionConfirmation from '../../Componentes/CardTransictionConfirmation';
import axios from 'axios';
import formatCurrency from '../../utils/formatCurrency';
import {useSelector} from 'react-redux';

const ScreenPixReview = ({navigation}) => {
  const balance = useSelector(state => state.balance.balance);

  const [showBalance, setShowBalance] = useState(false);
  const [userReceivedPixData, setuserReceivedPixData] = useState('');

  const onPressShowBalance = () => {
    setShowBalance(prevShowBalance => !prevShowBalance);
  };

  const onPresshome = () => {
    navigation.navigate('ScreenExtractAccount');
  };
  const onPressBack = () => {
    navigation.navigate('ScreenSelectValuePix');
  };

  const onPressScreenTransactionReceipt = async () => {
    try {
      const valueAsNumber = parseFloat(
        pixValue.replace(/\./g, '').replace(',', '.'),
      );

      const response = await axios.post(
        'http://10.0.0.158:3000/account/transfer/pix',
        {pixKey: pixKey, transferValue: valueAsNumber},
        {headers: {Authorization: token}},
      );

      navigation.navigate('ScreenTransactionReceipt');
    } catch (error) {
      console.log('Deu erro:', error);
      Alert.alert('Pix não enviado, tente novamente!');
    }
  };

  useEffect(() => {
    const fetchAccountData = async () => {
      try {
        const response = await axios.get('http://10.0.0.158:3000/account/', {
          headers: {Authorization: token},
          params: {
            cpf: userPixReceiver.cpf,
          },
        });

        setuserReceivedPixData(response.data);
        console.log(userReceivedPixData.data.bank);
      } catch (error) {
        console.log('Deu erro ', error);
      }
    };

    fetchAccountData();
  }, []);

  return (
    <View style={styles.container}>
      <HeaderOptions
        onPressLeft={onPressBack}
        onPressRight={onPresshome}
        iconRightName={'home'}
        showColorIconRight="#ef801d"
        label={'Revisão'}
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
            color={''}
            width={25}
            height={25}
          />
        </View>
      </View>
      <View style={styles.flex}>
        <View style={styles.cardValueInputUser}>
          <View style={styles.styleIcon$}>
            <IconButton
              isDisabled
              iconName={'pagar'}
              width={30}
              height={30}
              color={'#15171b'}
            />
          </View>

          <AppText size="huge" variant="bold">{`R$ ${'oie1'}`}</AppText>
          <AppText style={styles.styleMargin2}>{'oie2'} </AppText>
        </View>
        <CardTransictionConfirmation
          header={'Quem vai receber'}
          nome={'nome'}
          cpf={'cpf'}
          banco={'userReceivedPixData.data.bank'}
          chavePix={'chave pix'}
        />
        <View style={styles.linhaDivisora} />
        <CardCheckFavorite style={styles.contCheck} />
        <View style={styles.borderBottomWidth} />
      </View>

      <CardButton
        timeLoading={2500}
        onPress={() => {
          onPressScreenTransactionReceipt();
        }}
        colorLabel={'#fff'}
        label={`Pagar R$ ${'0'}`}
      />
    </View>
  );
};

export default ScreenPixReview;

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
  styleIcon$: {
    backgroundColor: '#f5f7fb',
    borderRadius: 50,
    padding: 15,
    marginBottom: 15,
  },
  cardValueInputUser: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderStyle: 'dotted',
    marginBottom: 20,
    borderColor: '#dddddd',
  },
  styleMargin: {marginBottom: 15},
  styleMargin2: {marginBottom: 20},
  flex: {flex: 1},
  linhaDivisora: {height: 25},
  contCheck: {marginBottom: 25},
  borderBottomWidth: {
    borderBottomWidth: 1.5,
    borderStyle: 'dotted',
    borderColor: '#dddddd',
  },
});
