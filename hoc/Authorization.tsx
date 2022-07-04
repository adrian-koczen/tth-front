import React, {useEffect} from 'react';

interface Props {
  children: React.ReactElement;
}

const AuthorizationCheck = ({children}: Props) => {
  useEffect(() => {
    console.log('AUTH');
  }, []);
  return children;
};

export default AuthorizationCheck;
