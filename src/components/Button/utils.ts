import {StyleProp, TextStyle, ViewStyle} from 'react-native';

import {ButtonType} from '@components/Button/types';
import {colors} from '@components/Styles/colors';

export const getStyle = (type: ButtonType) => {
  const style: StyleProp<ViewStyle> = {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.PRIMARY.NORMAL,
    paddingVertical: 16,
    borderWidth: 0,
  };
  if (type === 'Solid-Long') {
    style.borderRadius = 12;
    style.paddingHorizontal = 12;
  } else if (type === 'Solid-Long-White') {
    style.borderRadius = 12;
    style.paddingHorizontal = 12;
    style.backgroundColor = colors.WHITE;
  } else if (type === 'Solid-LongRound') {
    style.borderRadius = 28;
    style.paddingHorizontal = 12;
  } else if (type === 'Solid-Short-Confirm') {
    style.borderRadius = 12;
    style.paddingHorizontal = 8;
  } else if (type === 'Solid-Short-Cancel') {
    style.borderRadius = 12;
    style.paddingHorizontal = 8;
    style.backgroundColor = colors.LIGHT_GREY3;
  } else if (type === 'Solid-ShortRound-Confirm') {
    style.borderRadius = 28;
    style.paddingHorizontal = 8;
  } else if (type === 'Solid-ShortRound-Cancel') {
    style.borderRadius = 28;
    style.paddingHorizontal = 8;
    style.backgroundColor = colors.LIGHT_GREY1;
  }
  return style;
};

export const getLabelStyle = (type: ButtonType, disabled?: boolean) => {
  const style: StyleProp<TextStyle> = {
    color: colors.WHITE,
    fontSize: 16,
    fontWeight: '700',
    opacity: disabled ? 0.2 : 1,
  };
  if (type === 'Solid-Long') {
  } else if (type === 'Solid-Long-White') {
    style.color = colors.DARK_GREY4;
  } else if (type === 'Solid-ShortRound-Cancel') {
    style.color = colors.WHITE;
  }
  return style;
};
