import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import { Register } from '../pages/Register';
import { Dashboard } from '../pages/Dashboard';
import { theme } from '../global/styles/theme';

const Bottom = createBottomTabNavigator();

const TabsRoutes: FC = () => {

  return (
    <Bottom.Navigator tabBarOptions={{
      activeTintColor: theme.colors.secondary,
      inactiveTintColor: theme.colors.text,
      labelPosition: "beside-icon",
      labelStyle: {
        fontFamily: theme.fonts.medium,
        fontSize: 14
      },
      style: {
        height: 64,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        shadowColor: theme.colors.title,
      }
    }}>
      <Bottom.Screen 
        name="Listagem" 
        component={Dashboard} 
        options={{
          tabBarIcon: (({ size, color }) => (
            <Feather size={size} color={color} name="list" />
          ))
        }}
      />
      <Bottom.Screen 
        name="Register" 
        component={Register} 
        options={{
          tabBarIcon: (({ size, color }) => (
            <Feather size={size} color={color} name="dollar-sign" />
          ))
        }}
      />
    </Bottom.Navigator>
  );

}

export { TabsRoutes };