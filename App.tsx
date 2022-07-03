import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
// Views
import Authorization from 'views/Authorization/Authorization';

const App = () => {
  return (
    <TouchableWithoutFeedback>
      <Authorization />
    </TouchableWithoutFeedback>
  );
};

export default App;
