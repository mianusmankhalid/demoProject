import React, { Component } from 'react';
import { Button } from 'react-native';

export default class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Profile',
    headerTitleStyle: {
        flex: 1,
        textAlign: 'center',
      },
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go back to Home"
        onPress={() =>
          navigate('Home')
        }
      />
    );
  }
}
