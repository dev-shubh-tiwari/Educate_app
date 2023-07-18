import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';

import MainStack from './src/navigation/mainStack';
import store from './src/redux/reducer/store';

const App = () => {
  console.log("hello world")
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
};

export default App;
