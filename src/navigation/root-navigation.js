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
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {COLORS} from '../themes/styles';
import {View, StyleSheet} from 'react-native';
import {createNavigationContainerRef} from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export const navigationRef = createNavigationContainerRef();

export const navigate = (name, params) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};

const screenOptions = ({route}) => {
  return {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      backgroundColor: COLORS.lightBack,
      borderTopColor: COLORS.lightBack,
    },
    tabBarIcon: ({focused}) => {
      let iconName;
      const backgroundColor = focused ? COLORS.lightPurple : 'transparent';
      if (route.name === screenName.HomeTab) {
        iconName = 'home';
      } else if (route.name === screenName.stream) {
        iconName = 'game-controller';
      } else {
        iconName = 'user';
      }
      return (
        <View style={[styles.tabItem, {backgroundColor}]}>
          <EntypoIcon name={iconName} color={COLORS.white} size={22} />
        </View>
      );
    },
  };
};

const RootStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false, presentation: 'modal'}}>
    <Stack.Screen name={screenName.home} component={RootTab} />
    <Stack.Screen name={screenName.detail} component={DetailScreen} />
  </Stack.Navigator>
);

const RootTab = () => (
  <Tab.Navigator screenOptions={screenOptions}>
    <Tab.Screen name={screenName.HomeTab} component={HomeScreen} />
    <Tab.Screen name={screenName.stream} component={StreamScreen} />
    <Tab.Screen name={screenName.profile} component={ProfileScreen} />
  </Tab.Navigator>
);

const RootNavigation = () => {
  return <RootStack />;
};

export default RootNavigation;

const styles = StyleSheet.create({
  tabItem: {
    width: '50%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});
