import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Button} from '../components/Button';
import {Modal} from '../Modal';

export default () => {
  const [isCompleteModalVisible, setCompleteModalVisible] = useState(false);
  const [isUncompleteModalVisible, setUncompleteModalVisible] = useState(false);

  const toggleCompleteModal = () => {
    setCompleteModalVisible(!isCompleteModalVisible);
  };
  const toggleUncompleteModal = () => {
    setUncompleteModalVisible(!isUncompleteModalVisible);
  };
  return (
    <>
      <Button
        title="Выполнено"
        onPress={toggleCompleteModal}
        style={
          isCompleteModalVisible || isUncompleteModalVisible
            ? styles.hide
            : styles.button
        }
      />
      <Button
        title="Не выполнено"
        onPress={toggleUncompleteModal}
        style={
          isUncompleteModalVisible || isCompleteModalVisible
            ? styles.hide
            : styles.button
        }
      />
      <Modal
        quantity={10}
        isVisible={isCompleteModalVisible}
        toggleModal={toggleCompleteModal}
      />
      <Modal
        quantity={3}
        isVisible={isUncompleteModalVisible}
        toggleModal={toggleUncompleteModal}
      />
    </>
  );
};

const styles = StyleSheet.create({
  hide: {
    display: 'none',
  },
  button: {
    marginVertical: 15,
    width: 200,
  },
});
