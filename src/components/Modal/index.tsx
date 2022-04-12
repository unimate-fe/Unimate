import React, {FunctionComponent} from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import {colors} from '@components/Styles/colors';

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
}

const CustomModal: FunctionComponent<CustomModalProps> = function CustomModal({
  visible,
  onClose,
  children,
}) {
  return (
    <View style={styles.base}>
      <View style={styles.modalBase}>
        <Modal
          animationType="slide"
          transparent
          onRequestClose={onClose}
          visible={visible}>
          <View style={styles.modalBase}>
            <View style={styles.modalView}>{children}</View>
          </View>
        </Modal>
      </View>
    </View>
  );
};
export default CustomModal;

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: `${colors.WHITE}`,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBase: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  modalView: {
    backgroundColor: `${colors.WHITE}`,
    borderRadius: 20,
    shadowColor: `${colors.BLACK}`,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
