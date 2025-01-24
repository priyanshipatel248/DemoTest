import React from 'react';

import {Provider} from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootContainer from './rootContainer';
import {store, persistor} from './src/redux/store';
const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootContainer />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
