import {Alert, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import AppText from '../../Componentes/AppText';
import CardInput from '../../Componentes/CardInput';
import CardTransaction from '../../Componentes/CardTransaction';
import CardButton from '../../Componentes/CardButton';
import Clipboard from '@react-native-clipboard/clipboard';
import HeaderOptions from '../../Componentes/HeaderOptions';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {
  setCpfPixReceived,
  setNamePixReceived,
} from '../../../store/slices/cpfPixReceivedSlice';

const ScreenSelectPix = ({navigation}) => {
  const dispatch = useDispatch();

  const [buttonColor, setButtonColor] = useState('#dedfe4');
  const [labelColor, setLabelColor] = useState('#b7b8bc');
  const [textInput, setTextInput] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [showIconX, setShowIconX] = useState(false);

  const onPressBack = () => {
    navigation.navigate('ScreenSendPix');
  };

  const onPressScreenPixReview = () => {
    navigation.navigate('ScreenSelectValuePix');
  };

  const handleColorChange = text => {
    setTextInput(text);
    if (text.length > 0) {
      setButtonColor('#ff7a01');
      setLabelColor('#fff');
      setIsDisabled(false);
      setShowIconX(true);
    } else {
      setButtonColor('#dedfe4');
      setLabelColor('#b7b8bc');
      setIsDisabled(true);
      setShowIconX(false);
    }
  };

  const onPressDeleteText = () => {
    setTextInput('');
    setButtonColor('#dedfe4');
    setLabelColor('#b7b8bc');
    setIsDisabled(true);
    setShowIconX(false);
  };

  const handlePasteFromClipboard = async () => {
    const content = await Clipboard.getString();
    setTextInput(content);
    setButtonColor('#ff7a01');
    setLabelColor('#fff');
    setIsDisabled(false);
    setShowIconX(true);
  };

  return (
    <View style={styles.container}>
      <HeaderOptions onPressLeft={onPressBack} label={'Pagar com chave'} />
      <View style={styles.caixaVazia} />
      <View style={styles.containerKeyPasteKey}>
        <AppText variant="bold" size="xlarge">
          Chave
        </AppText>
        <TouchableOpacity onPress={handlePasteFromClipboard}>
          <AppText color="#ea8325" variant="bold">
            Colar chave
          </AppText>
        </TouchableOpacity>
      </View>

      <CardInput
        value={textInput}
        onPressShowX={onPressDeleteText}
        showIconX={showIconX}
        onChangeText={handleColorChange}
        style={styles.marginBottom}
        maxLength={11}
        placeholderLabel={'CPF, CNPJ, celular ou e-mail'}
      />
      <View style={styles.caixaFlex}>
        <CardTransaction
          style={styles.containerCardTransicion}
          iconName={'heart'}
          color="black"
          label={'Meus favoritos'}
        />
        <CardTransaction
          iconName={'contato'}
          color="black"
          label={'Lista de contatos'}
        />
      </View>

      <CardButton
        onPress={onPressScreenPixReview}
        disabled={isDisabled}
        colorLabel={labelColor}
        style={{backgroundColor: buttonColor}}
        label={'Continuar'}
      />
    </View>
  );
};

export default ScreenSelectPix;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', padding: 20},
  contianerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  styleText: {justifyContent: 'center'},
  containerKeyPasteKey: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  caixaFlex: {flex: 1},
  caixaVazia: {height: 50},
  containerCardTransicion: {borderBottomWidth: 1},
  marginBottom: {marginBottom: 25},
});
