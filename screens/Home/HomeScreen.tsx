import {Button, Text, View} from "react-native";
import * as React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeNavScreen} from "../../navigation/Bottom/HomeNavScreen";
import LoginScreen from "../auth/LoginScreen";


// @ts-ignore
export function HomeScreen({}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
        {/*<Button title="Première page" onPress={() => navigation.popToTop()} />
      <Button title="Retour" onPress={() => navigation.goBack()} />*/}

    </View>
  );


}

