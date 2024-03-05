import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppText from '../AppText';

const CardMockCpf = ({onPressTrocar, mockCpf}) => {
  const formatarCPF = cpf => {
    if (!cpf) return ''; // Verifica se cpf está definido, se não, retorna uma string vazia
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '***.$2.$3-**');
  };

  return (
    <View style={styles.containerCard}>
      <View style={styles.containerCpfMock}>
        <AppText size="large" color="gray" variant="semiBold">
          CPF
        </AppText>
        <AppText size="large" variant="bold">
          {formatarCPF(mockCpf)}
        </AppText>
      </View>
      <TouchableOpacity onPress={onPressTrocar}>
        <AppText color="#ff7a01" variant="bold" size="large">
          Trocar
        </AppText>
      </TouchableOpacity>
    </View>
  );
};

export default CardMockCpf;

const styles = StyleSheet.create({
  containerCard: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#e5e4e5',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
  },
  containerCpfMock: {flex: 1},
});
