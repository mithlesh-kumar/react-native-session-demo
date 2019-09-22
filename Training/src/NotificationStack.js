import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import NotificationScreen from './NotificationScreen';
import DrawerIcon from './DrawerIcon';

const NotificationStack = createStackNavigator({
    NotificationScreen: { screen: NotificationScreen },
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    headerLeft: <DrawerIcon toggleDrawer={navigation.toggleDrawer} />,
  }),
});

export default NotificationStack;