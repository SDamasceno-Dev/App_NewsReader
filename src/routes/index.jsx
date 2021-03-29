// React Imports
import React from 'react';
import { Image, Button } from 'react-native';

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
        component={ListNews}
        options={{
          headerShown: true,
          headerLeft: () => null,
          headerRight: () => <Button title="Info" color="#336699" />,
          headerTitle: <LogoMini />,
          backgroundColor: '#fff',
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
      <App.Screen
        name="AddEditNews"
        component={AddEditNews}
        options={{
          headerShown: true,
          headerTitle: <LogoMini />,
          headerBackTitleVisible: false,
        }}
      />
    </App.Navigator>
  );
};

export default AppRoutes;
