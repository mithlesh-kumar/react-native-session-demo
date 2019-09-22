import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const { navigation: { navigate } } = this.props;
    return (
      <View style={styles.container}>
        <Button
          title="Go to Profile"
          onPress={() => navigate('ProfileScreen')}
        />
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