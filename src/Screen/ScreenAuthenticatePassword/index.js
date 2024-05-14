import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppText from '../../Componentes/AppText';
import CardMockCpf from '../../Componentes/CardMockCpf';
import CardButton from '../../Componentes/CardButton';
import CardInput from '../../Componentes/CardInput';
import IconButton from '../../Componentes/IconButton';
import {useSelector, useDispatch} from 'react-redux';
import bancoDeDados from '../../json/bancoDeDados.json';

const ScreenAuthenticatePassword = ({navigation}) => {
  const dispatch = useDispatch();
  const cpf = useSelector(state => state.cpf.cpf);
  console.log('to aqui', cpf);
  const [showPassword, setShowPassword] = useState(true);
  const [labelMsg, setLabelMsg] = useState('');
  const [inputPass, setInputPass] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(undefined);
  useEffect(() => {
    setLoading(true);
  }, []);

  const onPressShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onPressBack = () => {
    navigation.navigate('ScreenAuthenticateCPF');
  };

  const handleOnChangeText = text => {
    setInputPass(text);
  };

  const onPressValidateAccount = () => {
    navigation.navigate('ScreenExtractAccount');
  };

  const onPressButtonTeste = () => {
    setInputPass('123456');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerQuestionButton}>
        <IconButton
          onPress={onPressButtonTeste}
          iconName={'question'}
          width={25}
          height={25}
          color={'#ef801d'}
        />
      </TouchableOpacity>
      <View style={styles.viewHeaderBank}>
        <AppText size="xhuge" variant="bold">
          Bank Jojo Adventures
        </AppText>
      </View>

      <View>
        <AppText style={styles.marginBottom} color="#7d7d7e" variant="semiBold">
          Utilize sua senha para fazer login
        </AppText>
        <CardMockCpf onPressTrocar={onPressBack} mockCpf={cpf} />
      </View>

      <CardInput
        value={inputPass}
        onChangeText={handleOnChangeText}
        placeholderLabel={'Digite sua senha'}
        maxLength={6}
        showPasswordIcon
        securePass={showPassword}
        onPressShowIcon={onPressShowPassword}
        style={styles.cardButtonStyleCpf}
      />
      <View style={styles.styleAviso}>
        <AppText color="#c17063">{labelMsg}</AppText>
      </View>
      <CardButton
        onPress={onPressValidateAccount}
        label={'Entrar'}
        colorLabel={'white'}
        style={styles.cardButtonStyleNext}
      />

      <TouchableOpacity style={styles.buttonNewAccount}>
        <AppText color="#ff7a01" variant="bold">
          Abrir conta completa e gratuita
        </AppText>
      </TouchableOpacity>
    </View>
  );
};

export default ScreenAuthenticatePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefeff',
    padding: 20,
  },
  containerQuestionButton: {alignItems: 'flex-end'},
  viewHeaderBank: {
    backgroundColor: '#ff7a01',
    alignItems: 'center',
    margin: 50,
    borderRadius: 50,
  },
  cardButtonStyleCpf: {
    backgroundColor: '#f4f6fb',
    marginBottom: 5,
  },
  cardButtonStyleNext: {
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonNewAccount: {
    alignItems: 'center',
  },
  marginBottom: {marginBottom: 5},
  styleAviso: {alignItems: 'flex-end', marginBottom: 25},
});
