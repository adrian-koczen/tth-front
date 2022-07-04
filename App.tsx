import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// Higher order components
import AuthorizationCheck from 'hoc/Authorization';
// Redux
import {Provider} from 'react-redux';
import {store} from 'redux/store/store';

import {Text} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthorizationCheck>
          <Text>User authorizated xd</Text>
        </AuthorizationCheck>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
