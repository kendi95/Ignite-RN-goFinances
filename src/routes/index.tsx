import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { TabsRoutes } from './tabs.routes';

const StackNav = createStackNavigator();

const Routes: FC = () => {

  return (
    <NavigationContainer>
      <StackNav.Navigator headerMode="none">
        <StackNav.Screen name="App" component={TabsRoutes} />
      </StackNav.Navigator>
    </NavigationContainer>
  );

}

export { Routes };