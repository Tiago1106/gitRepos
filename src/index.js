import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import Routes from './routes';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar />
      <Routes />
    </Provider>
  );
}