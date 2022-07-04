import React, {useEffect} from 'react';
import MMKVStorage, {useMMKVStorage} from 'react-native-mmkv-storage';
import {connect} from 'react-redux';
// Views
import AutorizationView from 'views/Authorization/Authorization';

interface Props {
  children: React.ReactElement;
  isAuthorized?: Boolean;
}

const AuthorizationCheck = ({children, isAuthorized}: Props) => {
  const storage = new MMKVStorage.Loader().initialize();
  const [authToken] = useMMKVStorage('auth-token', storage, '');

  useEffect(() => {
    console.log(authToken);
  }, [authToken]);

  if (!isAuthorized) {
    return <AutorizationView />;
  }

  return children;
};

const mapStateToProps = (state: any) => ({
  isAuthorized: state.authorization.authorized,
});

export default connect(mapStateToProps, null)(AuthorizationCheck);
