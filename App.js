import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';

import MainStack from './src/navigation/mainStack';
import store from './src/redux/store';

const App = () => {
  
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
};

export default App;
