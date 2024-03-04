import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native';
import IconButton from '../../Componentes/IconButton';
import AppText from '../../Componentes/AppText';
import CardTransaction from '../../Componentes/CardTransaction';
import CardMoreActions from '../../Componentes/CardMoreActions';
import HeaderOptions from '../../Componentes/HeaderOptions';

const ScreenSendPix = ({navigation}) => {
  const onPressBack = () => {
    navigation.navigate('ScreenExtractAccount');
  };

  const onPressSelectPix = () => {
    navigation.navigate('ScreenSelectPix');
  };

  return (
    <ScrollView style={styles.container}>
      <HeaderOptions
        label={'Pix'}
        onPressLeft={onPressBack}
        iconRightName={'question'}
        showColorIconRight="#ef801d"
      />
      <View style={styles.caixaVazia} />
      <CardTransaction
        onPress={onPressSelectPix}
        style={styles.containerCardTransictionPay}
        iconName={'pagar'}
        label={'Pagar'}
      />
      <CardTransaction
        style={styles.containerCardTransictionReceber}
        iconName={'qrcode'}
        label={'Receber'}
      />
      <View style={styles.caixaVazia} />

      <AppText size="xlarge" variant="bold">
        Mais ações
      </AppText>
      <View style={styles.marginBottom} />
      <View>
        <FlatList
          data={[
            {label: 'Minhas Chaves', iconName: 'key'},
            {label: 'Extrato', iconName: 'extrato'},
            {label: 'Pix Saque', iconName: 'pagamento'},
            {label: 'Meus Favoritos', iconName: 'heart'},
            {label: 'Meus limites', iconName: 'ajustes'},
          ]}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <CardMoreActions
              style={styles.teste}
              label={item.label}
              iconName={item.iconName}
            />
          )}
        />
      </View>
      <View style={styles.caixaVazia} />
      <TouchableOpacity style={styles.containerCardAnuncio}>
        <IconButton iconName={'anuncio'} style={{width: 330, height: 180}} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.containerCardAnuncio}>
        <IconButton iconName={'anuncio'} style={{width: 330, height: 180}} />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ScreenSendPix;

const styles = StyleSheet.create({
  container: {padding: 20, backgroundColor: '#fff'},
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  caixaVazia: {height: 50},
  containerCardTransictionPay: {borderWidth: 1, marginBottom: 15},
  containerCardTransictionReceber: {borderWidth: 1},

  marginBottom: {marginBottom: 20},
  containerCardAnuncio: {
    alignItems: 'center',
    borderRadius: 20,
    padding: 15,
    backgroundColor: '#eaeaeb',
    marginBottom: 30,
  },
  teste: {marginRight: 20},
});
