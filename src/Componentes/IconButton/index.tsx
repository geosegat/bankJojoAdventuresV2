import {StyleSheet, TouchableOpacity, Image, ImageStyle} from 'react-native';
import React from 'react';
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

interface IconButtonProps {
  iconName: string;
  width: number | string;
  height: number | string;
  color: string;
  onPress: () => void;
  style: ImageStyle;
  isDisabled?: boolean;
}

type RenderOption = {[key in string]: React.ReactElement};

const IconButton = ({
  iconName,
  width,
  height,
  color,
  onPress,
  style,
  isDisabled,
}: IconButtonProps) => {
  const renderOption: RenderOption = {
    jojo: (
      <Image
        style={style}
        source={{
          uri: 'https://cdn.icon-icons.com/icons2/1715/PNG/512/2730373-fruits-inkcontober-juicy-orange-smile_112692.png',
        }}
      />
    ),
    'eye-closed': <SvgEye width={width} height={height} color={color} />,
    search: <SvgSearch width={width} height={height} color={color} />,
    profile: <SvgProfile width={width} height={height} color={color} />,
    'seta-direita': (
      <SvgSetaDireita width={width} height={height} color={color} />
    ),
    pix: <SvgPix width={width} height={height} color={color} />,
    boleto: <SvgBoleto width={width} height={height} color={color} />,
    'credit-card': (
      <SvgCreditCard width={width} height={height} color={color} />
    ),
    brasil: (
      <Image
        style={[styles.image, style]}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/3909/3909370.png',
        }}
      />
    ),
    global: <SvgGlobal width={width} height={height} color={color} />,
    anuncio: (
      <Image source={require('../../../svgs/anuncio.jpg')} style={style} />
    ),
    invest: <SvgInvest width={width} height={height} color={color} />,
    recarga: <SvgRecarga width={width} height={height} color={color} />,
    shopping: <SvgShopping width={width} height={height} color={color} />,
    mais: <SvgMais width={width} height={height} color={color} />,
    'arrow-left': <SvgArrowLeft width={width} height={height} color={color} />,
    question: <SvgQuestion width={width} height={height} color={color} />,
    pagar: <SvgPagar width={width} height={height} color={color} />,
    qrcode: <SvgQrcode width={width} height={height} color={color} />,
    key: <SvgKey width={width} height={height} color={color} />,
    extrato: <SvgExtrato width={width} height={height} color={color} />,
    pagamento: <SvgPagamento width={width} height={height} color={color} />,
    heart: <SvgHeart width={width} height={height} color={color} />,
    ajustes: <SvgAjustes width={width} height={height} color={color} />,

    home: <SvgHome width={width} height={height} color={color} />,
    contato: <SvgContato width={width} height={height} color={color} />,
    delete: <SvgDelete width={width} height={height} color={color} />,
    check: <SvgCheck width={width} height={height} color={color} />,
    teste: (
      <Image
        style={[styles.image, style]}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/3472/3472620.png',
        }}
      />
    ),
  };

  return (
    <TouchableOpacity disabled={isDisabled} onPress={onPress} style={style}>
      {renderOption[iconName]}
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  image: {width: 20, height: 20},
  image2: {width: 50, height: 50},
});
