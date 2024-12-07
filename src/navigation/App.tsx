import React from 'react';
import Drawer from './Drawer';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
      <SafeAreaProvider >
          <Drawer />
      </SafeAreaProvider>
  );
};

export default App;
