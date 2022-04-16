import React, {FunctionComponent} from 'react';
import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Icons} from '@assets/icons';

interface Props {
  onPress?: (event: GestureResponderEvent) => void;
}

const HeaderPrev: FunctionComponent<Props> = function HeaderPrev({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={Icons.ARROW_PREV} style={styles.prev} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  prev: {
    width: 24,
    height: 24,
  },
});

export default HeaderPrev;
