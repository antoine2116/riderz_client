import {Button, Text, View} from "react-native";
import * as React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeNavScreen} from "../../navigation/Bottom/HomeNavScreen";
import LoginScreen from "../auth/LoginScreen";


// @ts-ignore
export function NotificationScreen({}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Notification Screen</Text>
    </View>
  );


}

