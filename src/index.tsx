import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './core/screens/Home';
import store from './core/redux/store';

export default function App() {
  return (
    <Provider store={store}>
    <SafeAreaView style={styles.container}>
      <Home/>
    </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
