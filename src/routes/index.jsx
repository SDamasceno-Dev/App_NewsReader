// React Imports
import React from 'react';
import { Image } from 'react-native';

// REact Navigation Imports
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Pages Imports
import SignIn from '../pages/SignIn';
import ListNews from '../pages/ListNews';
import ReadNews from '../pages/ReadNews';
import AddEditNews from '../pages/AddEditNews';

// Assets Imports
import LogoMiniImg from '../assets/NewsReaderMini.png';

const App = createStackNavigator();
const TabBottomNav = createBottomTabNavigator();

const LogoMini = () => {
  return <Image source={LogoMiniImg} />;
};

const AppRoutes = () => {
  return (
    <App.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: '#fff' },
      }}
    >
      <App.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <App.Screen
        name="ListNews"
        component={TabBottomMenu}
        options={{
          headerShown: true,
          headerLeft: () => null,
          headerTitle: <LogoMini />,
        }}
      />
      <App.Screen
        name="ReadNews"
        component={ReadNews}
        options={{
          headerShown: true,
          headerTitle: <LogoMini />,
          headerBackTitleVisible: false,
        }}
      />
      {/* <App.Screen
        name="AddEditNews"
        component={AddEditNews}
        options={{
          headerShown: true,
          headerTitle: <LogoMini />,
          headerBackTitleVisible: false,
        }}
      /> */}
    </App.Navigator>
  );
};

const TabBottomMenu = () => {
  return (
    <TabBottomNav.Navigator
      tabBarOptions={{
        activeTintColor: '#022c64',
        inactiveTintColor: 'gray',
        keyboardHidesTabBar: false,
      }}
    >
      <TabBottomNav.Screen
        name="ListNews"
        component={ListNews}
        options={{
          headerShown: true,
          headerLeft: () => null,
          headerTitle: <LogoMini />,
          backgroundColor: '#fff',
        }}
      />
      <TabBottomNav.Screen
        name="AddEditNews"
        component={AddEditNews}
        options={{
          headerShown: true,
          headerTitle: <LogoMini />,
          headerBackTitleVisible: false,
        }}
      />
    </TabBottomNav.Navigator>
  );
};

export default AppRoutes;
