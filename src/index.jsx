import 'react-native-gesture-handler';

// React Imports
import React from 'react';
import { View, StatusBar } from 'react-native';

// Modules Imports
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden translucent />
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;
