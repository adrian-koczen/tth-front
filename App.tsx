import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
// Higher order components
import AuthorizationCheck from 'authorization/Authorization';
// Redux
import {Provider} from 'react-redux';
import {store} from 'redux/store/store';
// Local storage
import mmkvFlipper from 'rn-mmkv-storage-flipper';
import {MMKVLoader} from 'react-native-mmkv-storage';

export const MMKV = new MMKVLoader()
  .withInstanceID('storage')
  .withEncryption()
  .initialize();

mmkvFlipper(MMKV);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthorizationCheck>
          <Text>App content</Text>
        </AuthorizationCheck>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
