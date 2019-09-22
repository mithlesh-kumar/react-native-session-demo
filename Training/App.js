import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import MainScreenStack from './src/MainScreenStack';
import NotificationStack from './src/NotificationStack';

const MyDrawerNavigator = createDrawerNavigator({
  Home: {  screen: MainScreenStack },
  Notification: { screen: NotificationStack },
});

export default createAppContainer(MyDrawerNavigator);
