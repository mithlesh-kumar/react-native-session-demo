import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    const { navigation: { goBack } } = this.props;
    return (
      <View style={styles.container}>
        <Button title="Go Back" onPress={() => goBack()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});