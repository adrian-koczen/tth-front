import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
// Redux
import {AppDispatch} from 'redux/store/store';
import {setAuthorized} from 'redux/slices/authorization';
// Views
import Signin from 'views/Authorization/Signin/Signin';
import EmailVerify from 'views/Authorization/EmailVerify/EmailVerify';
// Storage
import {MMKV} from 'App';
import {useMMKVStorage} from 'react-native-mmkv-storage';

interface Props {
  children: React.ReactElement;
  isAuthorized?: Boolean;
  dispatch?: AppDispatch;
}

const AuthorizationCheck = ({
  children,
  isAuthorized,
  errors,
  dispatch,
}: Props) => {
  const [authToken] = useMMKVStorage<string>('auth-token', MMKV);

  useEffect(() => {
    authorizeRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authToken]);

  const authorizeRequest = () => {
    if (authToken === 'correct-token') {
      console.log('User authorized');
      dispatch && dispatch(setAuthorized(true));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.errorContainer}>
        {errors &&
          errors.map(error => {
            return <Text key={error.id}>{error.message}</Text>;
          })}
      </View>
      {!isAuthorized && <EmailVerify />}
      {isAuthorized && children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorContainer: {
    position: 'absolute',
    zIndex: 999,
    top: 0,
  },
});

const mapStateToProps = (state: any) => ({
  isAuthorized: state.authorization.authorized,
  errors: state.errors,
});

export default connect(mapStateToProps, null)(AuthorizationCheck);
