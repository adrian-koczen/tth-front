import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signin from 'views/Authorization/Signin/Signin';
import EmailVerify from 'views/Authorization/EmailVerify/EmailVerify';

const Stack = createNativeStackNavigator();

const AuthorizationNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="signin"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="signin" component={Signin} />
      <Stack.Screen name="emailVerify" component={EmailVerify} />
    </Stack.Navigator>
  );
};

export default AuthorizationNavigator;
