import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {AppDispatch, persistor} from 'redux/store/store';
import {setAuthorized} from 'redux/slices/authorization';
import {connect} from 'react-redux';

interface Props {
  dispatch?: AppDispatch;
}

const Logout = ({dispatch}: Props) => {
  const logoutUser = () => {
    dispatch && dispatch(setAuthorized(false));
    persistor.purge();
  };

  return (
    <TouchableWithoutFeedback onPress={() => logoutUser()}>
      <View style={styles.container}>
        <Text>Logout</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'red',
    alignItems: 'center',
  },
});

export default connect(null, null)(Logout);
