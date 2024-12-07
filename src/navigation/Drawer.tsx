import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Navigator from './Navigator';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return <DrawerContent />;
      }}
      screenOptions={{
        drawerStyle: {
          width: 200,
        },
        overlayColor: 'transparent',
        headerShown: false
      }}
      >
      <Drawer.Screen name="Navigator">
        {(props) => <Navigator {...props} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};
