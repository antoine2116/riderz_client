import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./screens/auth/LoginScreen";
import {HomeNavScreen} from "./navigation/Bottom/HomeNavScreen";
import {ProfilScreen} from "./screens/Profil/ProfilScreen";
import {HomeScreen} from "./screens/Home/HomeScreen";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ConditionScreen from './screens/auth/ConditionScreen';
import PolitiqueScreen from './screens/auth/PolitiqueScreen';
import RegisterScreen from './screens/auth/RegisterScreen';

// @ts-ignore
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  // @ts-ignore
    return (
      <Stack.Navigator>
        <Tab.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
        <Tab.Screen name="HomeNav" component={HomeNavScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Tab.Screen name="Detail" component={ProfilScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Condition" component={ConditionScreen} />
        <Tab.Screen name="Politique" component={PolitiqueScreen} />
        <Tab.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default App;
