import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage';
import {Platform,NativeModules} from 'react-native';
import url from 'url';

// onde host é o ip da sua maquina
const { hostname } = url.parse(NativeModules.SourceCode.scriptURL);
if (__DEV__) {
  const tron = Reactotron.configure(
    Platform.OS === 'ios' ? null : {host: hostname}
  )
    .setAsyncStorageHandler(AsyncStorage)
    .configure()
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();
  console.tron = tron;
  tron.clear();
}