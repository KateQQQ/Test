import {TypographyText} from '../components/Typography';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../components/colors';
import {Button} from '../components/Button';

export interface ModalProps {
  quantity: number;
  toggleModal?: () => void;
  isVisible?: boolean;
}

export default ({quantity, isVisible, toggleModal}: ModalProps) => {
  const disabledSend = () => quantity < 10;

  return (
    <View style={isVisible ? styles.root : [styles.root, styles.visibility]}>
      <TypographyText
        style={styles.text}
        title="Для использования приложения Вам необходимо пригласить 10 моделей по реферальной ссылке:"
      />
      <TypographyText
        style={styles.text}
        textColor="blue"
        title="igma.com/file/JDUQvAkaKn08htWOS76Nsk/IModels?node-id=816%3A1922"
      />
      <TypographyText
        style={styles.text}
        title={`Кол-во зарегистрированных по  \n Вашей ссылке: ${quantity} / 10`}
      />
      <Button
        disabled={disabledSend()}
        style={styles.button}
        onPress={toggleModal}
        color={quantity < 10 ? 'lightGrey' : 'red'}
        title={quantity < 10 ? 'Не выполнено' : 'Выполнено'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginHorizontal: 5,
    backgroundColor: colors.white,
    paddingVertical: 29,
    paddingHorizontal: 16,
    borderRadius: 15,
    alignItems: 'center',
  },
  visibility: {
    display: 'none',
  },
  text: {
    textAlign: 'center',
    paddingBottom: 22,
  },
  button: {
    minWidth: '100%',
    marginHorizontal: 10,
  },
  disabled: {
    backgroundColor: colors.lightGrey,
  },
});
