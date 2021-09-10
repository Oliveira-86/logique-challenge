import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinksShorted from '../screens/main/LinksShorted';
import ShortingLinkScreen from '../screens/main/ShortingLinkScreen';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Settings" component={LinksShorted} />
      <Tab.Screen name="Home" component={ShortingLinkScreen} />
    </Tab.Navigator>
  );
};

export default Navigation;