import React from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {AppDispatch} from 'redux/store/store';
import Errors from 'views/Errors/Errors';
import AuthorizationNavigator from 'navigators/Authorization/AuthorizationNavigator';

interface Props {
  children: React.ReactElement | React.ReactElement[];
  isAuthorized?: boolean;
  errors?: {
    id: number;
    message: string;
  }[];
  dispatch?: AppDispatch;
}

const AuthorizationCheck = ({children, isAuthorized, errors}: Props) => {
  return (
    <View style={styles.container}>
      {errors && <Errors errors={errors} />}
      {!isAuthorized && <AuthorizationNavigator />}
      {isAuthorized && children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = (state: any) => ({
  isAuthorized: state.authorization.authorized,
  errors: state.errors,
});

export default connect(mapStateToProps, null)(AuthorizationCheck);
