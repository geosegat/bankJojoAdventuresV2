import {
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';

import React, {useEffect, useState} from 'react';
import AppText from '../../Componentes/AppText';
import IconButton from '../../Componentes/IconButton';
import CardBalance from '../../Componentes/CardBalance';
import QuickAccessCard from '../../Componentes/QuickAccessCard';
import Cardshortcut from '../../Componentes/CardShortcut';
import axios from 'axios';
import formatCurrency from '../../utils/formatCurrency';
import {useFocusEffect} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {setBalance} from '../../../store/slices/balanceSlice';

const ScreenExtractAccount = ({navigation}) => {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.balance.balance);
  const [showBalance, setShowBalance] = useState(false);
  const cpf = useSelector(state => state.cpf.cpf);
  const token = useSelector(state => state.token.token);
  console.log(token);

  const onPress = () => {
    Alert.alert('Você ta no Bank Jojo Adventures!!!');
  };

  const onPressShowBalance = () => {
    setShowBalance(prevShowBalance => !prevShowBalance);
  };

  const onPressMoney = () => {
    console.log('faz nada');
  };

  const onPressGlobal = () => {
    Alert.alert('Conta global ainda não disponivel.');
  };

  const onPressSendPix = () => {
    navigation.navigate('ScreenSendPix');
  };

  const onPressProfile = () => {
    navigation.navigate('ScreenAuthenticateCPF');
  };

  const fetchBalance = async () => {
    try {
      const response = await axios.get(
        'http://10.0.0.158:3000/account/balance',
        {
          headers: {Authorization: token},
          params: {
            cpf: cpf,
          },
        },
      );
      dispatch(setBalance(response.data.data.balance));
    } catch (error) {
      console.error('Ocorreu um erro:', error);
    }
  };

  useEffect(() => {
    fetchBalance();
  }, [token, cpf]);

  useFocusEffect(() => {
    fetchBalance();
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.containerImgENameBank}>
          <IconButton
            onPress={onPress}
            style={styles.image}
            iconName={'jojo'}
          />
          <AppText color="#ff7a01" size="xxhuge" variant="bold">
            JoJo
          </AppText>
        </View>
        <View style={styles.containerIcons}>
          <IconButton
            iconName={'eye-closed'}
            width={25}
            height={25}
            color={'gray'}
            onPress={onPressShowBalance}
          />
          <IconButton
            iconName={'search'}
            width={25}
            height={25}
            color={'gray'}
            style={styles.marginLeftIcon}
          />
          <IconButton
            onPress={onPressProfile}
            iconName={'profile'}
            width={30}
            height={30}
            color={'gray'}
            style={styles.marginLeftIcon}
          />
        </View>
      </View>
      <View style={styles.containerOptionTipoConta}>
        <QuickAccessCard
          style={styles.containerIconCardBrasil}
          iconName={'brasil'}
          label={'Brasil'}
        />
        <QuickAccessCard
          style={styles.containerIconCardGlobal}
          onPress={onPressGlobal}
          color={'#303ca0'}
          iconName={'global'}
          label={'Global'}
        />
      </View>

      <CardBalance
        onPressPix={onPressSendPix}
        style={styles.marginBottom}
        onPress={onPressMoney}
        balance={showBalance ? formatCurrency(balance) : '****'}
      />
      <View style={styles.contianerCardShortcut}>
        <Cardshortcut iconName={'invest'} label={'Investir'} />
        <Cardshortcut iconName={'recarga'} label={'Recarga'} />
        <Cardshortcut iconName={'shopping'} label={'Shopping'} />
        <Cardshortcut iconName={'mais'} label={'Mostrar Mais'} />
      </View>
      <TouchableOpacity style={styles.containerCardAnuncio}>
        <IconButton iconName={'anuncio'} style={{width: 360, height: 170}} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.containerCardAnuncio}>
        <IconButton iconName={'anuncio'} style={{width: 360, height: 170}} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.containerCardAnuncio}>
        <IconButton iconName={'anuncio'} style={{width: 360, height: 170}} />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ScreenExtractAccount;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, backgroundColor: '#f5f7fb'},
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  containerImgENameBank: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerOptionTipoConta: {flexDirection: 'row', marginBottom: 20},
  containerIconCardBrasil: {backgroundColor: '#fff', marginRight: 10},
  containerIconCardGlobal: {backgroundColor: '#f5f7fb'},
  image: {width: 55, height: 55, marginRight: 5},
  marginLeftIcon: {marginLeft: 15},
  marginBottom: {marginBottom: 20},
  containerCardAnuncio: {
    alignItems: 'center',
    borderRadius: 20,
    padding: 15,
    backgroundColor: '#eaeaeb',
    marginBottom: 50,
  },
  contianerCardShortcut: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
});
