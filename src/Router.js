import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import FlashMessage from 'react-native-flash-message';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import Home from './Pages/BottomPages/Home';
import Profile from './Pages/BottomPages/Profile';
import Login from './Pages/AuthPages/Login';
import Register from './Pages/AuthPages/Register';

import colors from './styles/colors';
import {
  HomeEmpty,
  HomeFull,
  ProfileEmpty,
  ProfileFull,
} from './components/Icons';

const BottomPages = () => {
  return (
    <Tab.Navigator screenOptions={tabBarsOptions}>
      <Tab.Screen name="Home" component={Home} options={HomeOptions} />
      <Tab.Screen name="Profile" component={Profile} options={ProfileOptions} />
    </Tab.Navigator>
  );
};

const AuthPages = () => {
  return (
    <Stack.Navigator screenOptions={authOptions}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="AuthPages" component={AuthPages} />
        <Stack.Screen name="BottomPages" component={BottomPages} />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default Router;

const screenOptions = () => ({
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    height: 50,
    backgroundColor: colors.lightGray,
  },
  gestureDirection: 'horizontal',
  cardStyleInterpolator: ({current, layouts}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
});

const authOptions = () => ({
  headerShown: false,
});

const tabBarsOptions = () => ({
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    height: 50,
    backgroundColor: colors.gray,
  },
});

const HomeOptions = () => ({
  tabBarIcon: ({focused}) => (focused ? <HomeFull /> : <HomeEmpty />),
});

const ProfileOptions = () => ({
  tabBarIcon: ({focused}) => (focused ? <ProfileFull /> : <ProfileEmpty />),
});
