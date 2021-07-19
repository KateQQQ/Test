import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppContent} from './src/AppContent';
import {colors} from './src/components/colors';

const App = () => {
  return (
    <View style={styles.root}>
      <AppContent />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.grey,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
