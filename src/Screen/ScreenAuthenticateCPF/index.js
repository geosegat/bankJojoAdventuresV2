import {Alert, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import AppText from '../../Componentes/AppText';
import CardButton from '../../Componentes/CardButton';
import CardInput from '../../Componentes/CardInput';
import {useDispatch} from 'react-redux';
import {setCpf} from '../../../store/slices/cpfSlice';
import IconButton from '../../Componentes/IconButton';
import SvgTeste from '../../../svgs/ajustes.svg';

const ScreenAuthenticateCPF = ({navigation}) => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState('');
  const [colorBackGround, setColorBackGround] = useState('#f4f6fb');
  const [labelMsg, setLabelMsg] = useState('');
  const [colorTextInput, setColorTextInput] = useState('#9f9ea0');
  const [textColor, setColorText] = useState('#323333');
  const [isLoading, setIsLoading] = useState(true);

  function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, ''); // Remove caracteres não numéricos

    if (cpf.length !== 11) {
      return false;
    }

    // Verifica se todos os dígitos são iguais, o que invalida o CPF
    if (/^(\d)\1{10}$/.test(cpf)) {
      return false;
    }

    // Calcula o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = soma % 11;
    let digitoVerificador1 = resto < 2 ? 0 : 11 - resto;

    // Calcula o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = soma % 11;
    let digitoVerificador2 = resto < 2 ? 0 : 11 - resto;

    // Verifica se os dígitos verificadores estão corretos
    if (
      parseInt(cpf.charAt(9)) !== digitoVerificador1 ||
      parseInt(cpf.charAt(10)) !== digitoVerificador2
    ) {
      return false;
    }

    return true;
  }

  const handleOnChangeText = text => {
    const cleanedText = text.replace(/\D/g, '');

    const formattedCPF = cleanedText
      .replace(/\./g, '')
      .replace(/-/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{2})/, '$1-$2');
    setTextInput(formattedCPF);

    if (formattedCPF.length === 0 && labelMsg === 'Cpf invalido') {
      setColorTextInput('#e56e60');
      setLabelMsg('Campo obrigatório');
    } else if (formattedCPF.length > 0 && labelMsg === 'Campo obrigatório') {
      setLabelMsg('Cpf invalido');
    }
  };

  const onPress = () => {
    const usuario = validarCPF(textInput.replace(/\D/g, ''));
    const cpfMock = textInput.replace(/\D/g, '');

    if (usuario) {
      navigation.navigate('ScreenAuthenticatePassword');

      dispatch(setCpf(cpfMock));
      setIsLoading(true);
      setTextInput('');
      setLabelMsg('');
      setColorBackGround('#f4f6fb');
      setColorText('#323333');
      setColorTextInput('#9f9ea0');
      setIsLoading(true);
    } else if (textInput.length === 0) {
      setColorBackGround('#fef1ec');
      setLabelMsg('Campo obrigatório');
      setColorTextInput('#e56e60');
      setColorText('#d16e63');
      console.log('to no 0');
    } else {
      setColorBackGround('#fef1ec');
      setLabelMsg('Cpf invalido');
      setColorText('#d16e63');
      setIsLoading(true);
    }
  };

  const onPressButtonTeste = () => {
    setTextInput('114.988.187-90');
  };

  return (
    <View style={styles.container}>
      <IconButton
        onPress={onPressButtonTeste}
        iconName={'question'}
        width={25}
        height={25}
        color={'#ef801d'}
        style={styles.containerQuestionButton}
      />

      <View style={styles.viewHeaderBank}>
        <AppText size="xhuge" variant="bold">
          Bank Jojo Adventures
        </AppText>
      </View>

      <View>
        <AppText style={styles.marginBottom} color="#7d7d7e" variant="semiBold">
          Utilize seu cpf para fazer login
        </AppText>
        <CardButton disabled label={'CPF'} style={styles.cardButtonStyleCpf} />
      </View>

      <CardInput
        styleTextInput={{color: textColor}}
        placaholderColor={colorTextInput}
        onChangeText={handleOnChangeText}
        maxLength={14}
        value={textInput}
        placeholderLabel={'Digite apenas números'}
        style={[styles.marginBottom, {backgroundColor: colorBackGround}]}
      />
      <View style={styles.styleAviso}>
        <AppText color="#c17063">{labelMsg}</AppText>
      </View>

      <CardButton
        disabledLoading={isLoading}
        onPress={onPress}
        label={'Continuar'}
        colorLabel={'white'}
        style={styles.cardButtonStyleNext}
      />
      <TouchableOpacity style={styles.buttonNewAccount}>
        <AppText color="#" variant="bold">
          Abrir conta completa e gratuitaa
        </AppText>
      </TouchableOpacity>
    </View>
  );
};

export default ScreenAuthenticateCPF;

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
    marginBottom: 20,
    alignItems: 'flex-start',
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
