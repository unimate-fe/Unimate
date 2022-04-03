import {FunctionComponent} from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {typos, TypoType} from '../../Components/Typo/type';
import {colors} from '../../../src/Components/_styles/colors';

interface TypoProps extends TextProps {
  type: TypoType;
}

const Typo: FunctionComponent<TypoProps> = ({type, style, ...rest}) => {
  return (
    <Text
      style={[type ? typos[type] : undefined, styles.text, style]}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.BLACK,
  },
});

export default Typo;
