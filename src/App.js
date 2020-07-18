import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { Router } from './navigation/Router';
import { Provider } from 'react-redux';
import { Store } from './redux/Store';

export const App = () => {

  return (
    <Provider store={Store}>
      <StatusBar backgroundColor='white' barStyle="dark-content" />
      <Router />
    </Provider>
  );
};
