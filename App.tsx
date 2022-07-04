import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// Higher order components
import AuthorizationCheck from 'hoc/Authorization';
// Redux
import {Provider} from 'react-redux';
import {store} from 'redux/store/store';
// Views
import AuthorizationView from 'views/Authorization/Authorization';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthorizationCheck>
          <AuthorizationView />
        </AuthorizationCheck>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
