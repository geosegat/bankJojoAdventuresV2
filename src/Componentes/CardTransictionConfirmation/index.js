import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AppText from '../AppText';
import CardKeyValue from '../CardKeyValue';

const CardTransictionConfirmation = ({
  header,
  nome,
  cpf,
  banco,
  chavePix,
  style,
}) => {
  function formatarCPFMascarado(numeroCPF) {
    const numeroLimpo = numeroCPF.replace(/\D/g, '');
    return numeroLimpo.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '***.$2.$3-**');
  }

  return (
    <View style={styles.container}>
      <AppText style={styles.marginBottom} variant="bold" size="xlarge">
        {header}
      </AppText>
      <CardKeyValue style={styles.marginBottom} chave={'Nome'} value={nome} />
      <CardKeyValue
        style={styles.marginBottom}
        chave={'CPF/CNPJ'}
        value={formatarCPFMascarado(cpf)}
      />
      <CardKeyValue
        style={styles.marginBottom}
        chave={'Instituição'}
        value={banco}
      />
      <CardKeyValue
        style={styles.marginBottom}
        chave={'Chave pix'}
        value={chavePix}
      />

      <TouchableOpacity>
        <AppText variant="bold" size="large" color="#f17b0c">
          Adicionar mensagem
        </AppText>
      </TouchableOpacity>

      <View style={styles.caixa} />
    </View>
  );
};

export default CardTransictionConfirmation;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1.5,
    borderStyle: 'dotted',
    borderColor: '#dddddd',
  },
  marginBottom: {marginBottom: 15},
  caixa: {height: 35},
});
