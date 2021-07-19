import React from 'react';
import {ModalContent} from '../ModalContent';
import {View} from 'react-native';

export interface ModalProps {
  quantity: number;
  isVisible?: boolean;
  toggleModal?: () => void;
}

export default ({quantity, toggleModal, isVisible}: ModalProps) => {
  return (
    <View>
      <ModalContent
        isVisible={isVisible}
        quantity={quantity}
        toggleModal={toggleModal}
      />
    </View>
  );
};
