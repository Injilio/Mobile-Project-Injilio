import React from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import { StyleSheet, Text, View } from 'react-native';
import ComponentScreen from './screens/Component';
import FriendScreen from './screens/Friend';
import HomeScreen from './screens/Home';
import ImageScreen from './screens/Image';
import CounterScreen from './screens/Counter';

const navigator = createStackNavigator({
  Component: ComponentScreen,
  Friend: FriendScreen,
  Home: HomeScreen,
  Image: ImageScreen,
  Counter: CounterScreen
},{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerTitle: 'App Mobile Programming',
    headerStyle: {
      backgroundColor: 'blue'
    }
  }
});

export default createAppContainer(navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
