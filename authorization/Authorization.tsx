import React, {useEffect} from 'react';
import {connect} from 'react-redux';
// Redux
import {AppDispatch} from 'redux/store/store';
import {setAuthorized} from 'redux/slices/authorization';
// Views
import Signin from 'views/Authorization/Signin/Signin';
// Storage
import {MMKV} from 'App';
import {useMMKVStorage} from 'react-native-mmkv-storage';

interface Props {
  children: React.ReactElement;
  isAuthorized?: Boolean;
  dispatch?: AppDispatch;
}

const AuthorizationCheck = ({children, isAuthorized, dispatch}: Props) => {
  const [authToken] = useMMKVStorage<string>('auth-token', MMKV);

  useEffect(() => {
    console.log('AUTHORIZATION - NEW TOKEN:', authToken);
    authorizeRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authToken]);

  const authorizeRequest = () => {
    if (authToken === 'correct-token') {
      console.log('User authorized');
      dispatch && dispatch(setAuthorized({isAuthorized: true}));
    }
  };

  if (!isAuthorized) {
    return <Signin />;
  }

  return children;
};

const mapStateToProps = (state: any) => ({
  isAuthorized: state.authorization.authorized,
});

export default connect(mapStateToProps, null)(AuthorizationCheck);
