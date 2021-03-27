import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

// Pages
import SignIn from '../pages/SignIn';

const App = createStackNavigator();

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
    </App.Navigator>
  );
};

export default AppRoutes;
