import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import DrawerIcon from './DrawerIcon';

const MainScreenStack = createStackNavigator({
    HomeScreen: { screen: HomeScreen },
    ProfileScreen: { screen: ProfileScreen },
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    headerLeft: <DrawerIcon toggleDrawer={navigation.toggleDrawer} />,
  }),
});

export default MainScreenStack;