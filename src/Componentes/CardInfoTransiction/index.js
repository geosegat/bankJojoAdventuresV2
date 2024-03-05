import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AppText from '../AppText';
import CardKeyValue from '../CardKeyValue';

const CardInfoTransiction = ({header, date, horario, idTrans, style}) => {
  return (
    <View style={[styles.container, style]}>
      <AppText style={styles.marginBottom} variant="bold" size="xlarge">
        {header}
      </AppText>
      <CardKeyValue
        style={styles.marginBottom}
        chave={'Data de pagamento'}
        value={date}
      />
      <CardKeyValue
        style={styles.marginBottom}
        chave={'Horário'}
        value={horario}
      />
      <CardKeyValue
        style={styles.styleId}
        chave={'ID da transação'}
        value={idTrans}
      />

      <View style={styles.caixa} />
    </View>
  );
};

export default CardInfoTransiction;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1.5,
    borderStyle: 'dotted',
    borderColor: '#dddddd',
  },
  marginBottom: {marginBottom: 15},
  styleId: {flexDirection: 'column', marginBottom: 20},
  caixa: {height: 15},
});
