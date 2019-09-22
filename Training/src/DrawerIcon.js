import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const DrawerIcon = (props) => {
  const { toggleDrawer } = props;

  return (
    <TouchableOpacity style={styles.menuIcon} onPress={toggleDrawer}>
      <Text>MENU</Text>
    </TouchableOpacity>
  );
};

export default DrawerIcon;

const styles = StyleSheet.create({
  menuIcon: {
   paddingLeft: 10,
  },
});
