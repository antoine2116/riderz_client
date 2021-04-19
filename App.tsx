import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./screens/auth/LoginScreen";
import {HomeScreen} from "./screens/HomeScreen";
import {DetailsScreen} from "./screens/DetailsScreen";
import RegisterScreen from "./screens/auth/RegisterScreen";


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{
          title: '',
          headerStyle: {
            backgroundColor: '#FAFAFA',
          }

        }}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailsScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
