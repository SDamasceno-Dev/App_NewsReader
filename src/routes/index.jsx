// React Imports
import React from 'react';
import { Image } from 'react-native';

// REact Navigation Imports
import { createStackNavigator } from '@react-navigation/stack';

// Pages Imports
import SignIn from '../pages/SignIn';
import ListNews from '../pages/ListNews';

// Assets Imports
import LogoMiniImg from '../assets/NewsReaderMini.png';

const App = createStackNavigator();
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
          headerTitle: props => <LogoMini {...props} />,
        }}
      />
    </App.Navigator>
  );
};

export default AppRoutes;
