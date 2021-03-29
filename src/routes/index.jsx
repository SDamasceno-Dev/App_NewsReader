// React Imports
import React from 'react';
import { Image, TouchableOpacity, Text } from 'react-native';

// React Navigation Imports
import { createStackNavigator } from '@react-navigation/stack';

// Pages Imports
import SignIn from '../pages/SignIn';
import ListNews from '../pages/ListNews';
import ReadNews from '../pages/ReadNews';
import AddEditNews from '../pages/AddEditNews';

// Assets Imports
import LogoMiniImg from '../assets/NewsReaderMini.png';
import ReadNewsIcon from '../components/CustomIcon';

// Styles imports
import { BtnExit } from './styles';

const App = createStackNavigator();

// Some assets components
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
        options={({ navigation }) => ({
          headerShown: true,
          headerLeft: () => null,
          headerRight: () => (
            <BtnExit
              onPress={() => {
                navigation.navigate('SignIn');
              }}
            >
              <ReadNewsIcon name="sign-out-solid" size={25} color="#022c64" />
            </BtnExit>
          ),
          headerTitle: <LogoMini />,
          headerTitleAlign: 'center',
          backgroundColor: '#fff',
        })}
      />
      <App.Screen
        name="ReadNews"
        component={ReadNews}
        options={({ navigation }) => ({
          headerRight: () => (
            <BtnExit
              onPress={() => {
                navigation.navigate('SignIn');
              }}
            >
              <ReadNewsIcon name="sign-out-solid" size={25} color="#022c64" />
            </BtnExit>
          ),
          headerShown: true,
          headerTitle: <LogoMini />,
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
        })}
      />
      <App.Screen
        name="AddEditNews"
        component={AddEditNews}
        options={({ navigation }) => ({
          headerRight: () => (
            <BtnExit
              onPress={() => {
                navigation.navigate('SignIn');
              }}
            >
              <ReadNewsIcon name="sign-out-solid" size={25} color="#022c64" />
            </BtnExit>
          ),
          headerShown: true,
          headerTitle: <LogoMini />,
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
        })}
      />
    </App.Navigator>
  );
};

export default AppRoutes;
