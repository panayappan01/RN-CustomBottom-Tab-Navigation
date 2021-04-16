import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ChatScreen from '../screens/ChatScreen';
import FindScreen from '../screens/FindScreen';
import HomeScreen from '../screens/HomeScreen';
import PostScreen from '../screens/PostScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}
    onPress={onPress}>
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#e32f45',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#fff',
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <IonIcons
                name="ios-home-outline"
                size={25}
                color={focused ? '#e32f45' : '#748c94'}
              />
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 12,
                }}>
                HOME
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Find"
        component={FindScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <IonIcons
                name="ios-search-outline"
                size={25}
                color={focused ? '#e32f45' : '#748c94'}
              />
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 12,
                }}>
                FIND
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={PostScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <IonIcons name="ios-add" size={35} color="#fff" />
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <IonIcons
                name="ios-settings-outline"
                size={25}
                color={focused ? '#e32f45' : '#748c94'}
              />
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 12,
                }}>
                SETTINGS
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <IonIcons
                name="ios-chatbox-ellipses-outline"
                size={25}
                color={focused ? '#e32f45' : '#748c94'}
              />
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 12,
                }}>
                CHAT
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 15,
  },
});

export default Tabs;
