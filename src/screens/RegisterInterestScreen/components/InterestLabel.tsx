import {colors} from '@src/components/Styles/colors';
import Typo from '@src/components/Typo';
import React, {FunctionComponent} from 'react';
import {StyleSheet, Pressable, StyleProp, ViewStyle} from 'react-native';

interface InterestLabelProps {
  label: string;
  onPress: () => void;
  selected?: boolean;
  style?: StyleProp<ViewStyle>;
}
const InterestLabel: FunctionComponent<InterestLabelProps> =
  function InterestLabel({label, onPress, selected, style}) {
    return (
      <Pressable
        onPress={onPress}
        style={[
          style,
          styles.base,
          {
            backgroundColor: selected
              ? colors.SECONDARY.NORMAL
              : colors.LIGHT_GREY1,
          },
        ]}>
        <Typo
          type={'Body2'}
          style={[
            {
              color: selected ? colors.WHITE : colors.GREY2,
            },
          ]}>
          {label}
        </Typo>
      </Pressable>
    );
  };

export default InterestLabel;

const styles = StyleSheet.create({
  base: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 24,
    marginBottom: 10,
    marginRight: 6,
  },
});
