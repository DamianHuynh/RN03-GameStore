import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  DetailScreen,
  StreamScreen,
  ProfileScreen,
} from '../screens';
import {screenName} from '../utils/constant';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RootNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={screenName.home} component={HomeScreen} />
      <Tab.Screen name={screenName.stream} component={StreamScreen} />
      <Tab.Screen name={screenName.profile} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default RootNavigation;
