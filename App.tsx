import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthorizationCheck from 'authorization/Authorization';
import {Provider} from 'react-redux';
import {store, persistor} from 'redux/store/store';
import mmkvFlipper from 'rn-mmkv-storage-flipper';
import {MMKVLoader} from 'react-native-mmkv-storage';
import {PersistGate} from 'redux-persist/integration/react';
import Logout from 'views/Profile/Logout/Logout';

export const MMKV = new MMKVLoader()
  .withInstanceID('storage')
  .withEncryption()
  .initialize();

mmkvFlipper(MMKV);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <AuthorizationCheck>
            <Logout />
          </AuthorizationCheck>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
