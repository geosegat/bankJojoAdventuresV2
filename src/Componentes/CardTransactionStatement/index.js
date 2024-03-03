import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AppText from '../AppText';
import CardKeyValue from '../CardKeyValue';

const CardTransactionStatement = ({header, nome, cpf, banco, style}) => {
  return (
    <View style={[styles.container, style]}>
      <AppText style={styles.marginBottom} variant="bold" size="xlarge">
        {header}
      </AppText>
      <CardKeyValue style={styles.marginBottom} chave={'Nome'} value={nome} />
      <CardKeyValue
        style={styles.marginBottom}
        chave={'CPF/CNPJ'}
        value={cpf}
      />
      <CardKeyValue
        style={styles.marginBottom}
        chave={'Instituição'}
        value={banco}
      />

      <View style={styles.caixa} />
    </View>
  );
};

export default CardTransactionStatement;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1.5,
    borderStyle: 'dotted',
    borderColor: '#dddddd',
  },
  marginBottom: {marginBottom: 15},

  caixa: {height: 15},
});
