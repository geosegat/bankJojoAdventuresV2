import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';

import SvgQuestion from '../../../svgs/question.svg';
import SvgProfile from '../../../svgs/profile.svg';
import SvgSearch from '../../../svgs/search.svg';
import SvgEye from '../../../svgs/eye-closed.svg';
import SvgSetaDireita from '../../../svgs/seta-direita.svg';
import SvgPix from '../../../svgs/pix.svg';
import SvgCreditCard from '../../../svgs/credit-card.svg';
import SvgBoleto from '../../../svgs/boleto.svg';
import SvgGlobal from '../../../svgs/global.svg';
import SvgInvest from '../../../svgs/invest.svg';
import SvgRecarga from '../../../svgs/recarga.svg';
import SvgShopping from '../../../svgs/shopping.svg';
import SvgMais from '../../../svgs/mais.svg';
import SvgArrowLeft from '../../../svgs/arrow-left.svg';
import SvgPagar from '../../../svgs/pagar.svg';
import SvgQrcode from '../../../svgs/qrcode.svg';
import SvgKey from '../../../svgs/key.svg';
import SvgExtrato from '../../../svgs/extrato.svg';
import SvgPagamento from '../../../svgs/pagamento.svg';
import SvgHeart from '../../../svgs/heart.svg';
import SvgAjustes from '../../../svgs/ajustes.svg';
import SvgHome from '../../../svgs/home.svg';
import SvgContato from '../../../svgs/contato.svg';
import SvgDelete from '../../../svgs/x.svg';
import SvgCheck from '../../../svgs/check.svg';

const IconButton = ({
  iconName,
  width,
  height,
  color,
  onPress,
  style,
  isDisabled,
}) => {
  let iconComponent;

  switch (iconName) {
    case 'jojo':
      iconComponent = (
        <Image
          style={style}
          source={{
            uri: 'https://cdn.icon-icons.com/icons2/1715/PNG/512/2730373-fruits-inkcontober-juicy-orange-smile_112692.png',
          }}
        />
      );
      break;
    case 'eye-closed':
      iconComponent = <SvgEye width={width} height={height} color={color} />;
      break;
    case 'search':
      iconComponent = <SvgSearch width={width} height={height} color={color} />;
      break;
    case 'profile':
      iconComponent = (
        <SvgProfile width={width} height={height} color={color} />
      );
      break;
    case 'seta-direita':
      iconComponent = (
        <SvgSetaDireita width={width} height={height} color={color} />
      );
      break;
    case 'pix':
      iconComponent = <SvgPix width={width} height={height} color={color} />;
      break;
    case 'boleto':
      iconComponent = <SvgBoleto width={width} height={height} color={color} />;
      break;
    case 'credit-card':
      iconComponent = (
        <SvgCreditCard width={width} height={height} color={color} />
      );
      break;
    case 'brasil':
      iconComponent = (
        <Image
          style={[styles.image, style]}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3909/3909370.png',
          }}
        />
      );
      break;
    case 'global':
      iconComponent = <SvgGlobal width={width} height={height} color={color} />;
      break;
    case 'anuncio':
      iconComponent = (
        <Image source={require('../../../svgs/anuncio.jpg')} style={style} />
      );
      break;
    case 'invest':
      iconComponent = <SvgInvest width={width} height={height} color={color} />;
      break;
    case 'recarga':
      iconComponent = (
        <SvgRecarga width={width} height={height} color={color} />
      );
      break;
    case 'shopping':
      iconComponent = (
        <SvgShopping width={width} height={height} color={color} />
      );
      break;
    case 'mais':
      iconComponent = <SvgMais width={width} height={height} color={color} />;
      break;
    case 'arrow-left':
      iconComponent = (
        <SvgArrowLeft width={width} height={height} color={color} />
      );
      break;
    case 'question':
      iconComponent = (
        <SvgQuestion width={width} height={height} color={color} />
      );
      break;
    case 'pagar':
      iconComponent = <SvgPagar width={width} height={height} color={color} />;
      break;
    case 'qrcode':
      iconComponent = <SvgQrcode width={width} height={height} color={color} />;
      break;
    case 'key':
      iconComponent = <SvgKey width={width} height={height} color={color} />;
      break;
    case 'extrato':
      iconComponent = (
        <SvgExtrato width={width} height={height} color={color} />
      );
      break;
    case 'pagamento':
      iconComponent = (
        <SvgPagamento width={width} height={height} color={color} />
      );
      break;
    case 'heart':
      iconComponent = <SvgHeart width={width} height={height} color={color} />;
      break;
    case 'ajustes':
      iconComponent = (
        <SvgAjustes width={width} height={height} color={color} />
      );
      break;
    case 'home':
      iconComponent = <SvgHome width={width} height={height} color={color} />;
      break;
    case 'contato':
      iconComponent = (
        <SvgContato width={width} height={height} color={color} />
      );
      break;
    case 'delete':
      iconComponent = <SvgDelete width={width} height={height} color={color} />;
      break;
    case 'check':
      iconComponent = <SvgCheck width={width} height={height} color={color} />;
      break;
    case 'teste':
      iconComponent = (
        <Image
          style={[styles.image, style]}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3472/3472620.png',
          }}
        />
      );
      break;
    default:
      iconComponent = null;
      break;
  }

  return (
    <TouchableOpacity disabled={isDisabled} onPress={onPress} style={style}>
      {iconComponent}
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  image: {width: 20, height: 20},
  image2: {width: 50, height: 50},
});
