import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {ProfilScreen} from "../../screens/Profil/ProfilScreen";
import LoginScreen from "../../screens/auth/LoginScreen";
import {HomeScreen} from "../../screens/Home/HomeScreen";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {MessageScreen} from "../../screens/Message/MessageScreen";


const Tab = createMaterialBottomTabNavigator();


export function HomeNavScreen({ }) {
  return (
      <Tab.Navigator
          activeColor="#FE5A36"
          inactiveColor="#C8C8C8"
          barStyle={{ backgroundColor: 'white' }}
      >

          <Tab.Screen name="Home" component={HomeScreen} options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home-variant" color={color} size={26} />),
          }} />

          <Tab.Screen name="Message" component={MessageScreen}
                      options={{
                          tabBarLabel: 'Messages',
                          tabBarIcon: ({ color  }) => (
                              <MaterialCommunityIcons name="account-multiple" color={color} size={30} />),
                          tabBarBadge: 3,}}/>

          <Tab.Screen name="Notifications" component={MessageScreen}
                      options={{
                          tabBarLabel: 'Notifications',
                          tabBarIcon: ({ color  }) => (
                              <MaterialCommunityIcons name="bell" color={color} size={30} />),
                          }}/>


          <Tab.Screen name="Detail" component={ProfilScreen}
                      options={{
                          tabBarLabel: 'Profile',
                          tabBarIcon: ({ color  }) => (
                              <MaterialCommunityIcons name="account" color={color} size={30} />),
                          }}/>
      </Tab.Navigator>

  );
}

