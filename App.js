import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Tabs from './navigation/tabs';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
