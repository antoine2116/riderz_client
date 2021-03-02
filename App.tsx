import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet,View,Button,TextInput,TouchableOpacity,Text} from "react-native";


import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();



    let state = {
      username: '',
      password: ''
    }



  function _userLog(user: any) {
    state.username = user;
  }


  function _passwordLog(password: any) {
    state.password = password;
  }


  function _mdpOublie() {
    console.log('mot de passe oublié !');

  }


  function _connexion() {
    var user = state.username;
    var password = state.password;
    console.log(user);
    console.log(password);
    if (user == 't' && password == 't'){
      console.log('connecté');
    }else{
      console.log('mauvais mdp');
    }
  }


  return (
    <View style={styles.main_container}>
      <View style={styles.viewInputs}>
        <Text style={styles.textLogin}>Adresse mail</Text>
        <TextInput onChangeText={(text) => _userLog(text)} style={styles.textinput} placeholder='...'/>
        <Text style={styles.textLogin}>Mot de passe</Text>
        <TextInput onChangeText={(text) => _passwordLog(text)} style={styles.textinput} placeholder='...'/>
        <TouchableOpacity
          onPress={_mdpOublie}
        >
          <Text style={styles.textOublie}>Mot de passe oublié ?</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex : 2}}>
        <Text style={[styles.text]}>En utilisant RiderZ vous confirmez être en accord avec nos
          <Text style={[styles.textUnderLine]}> conditions d’utilisation</Text>
          et notre
          <Text style={[styles.textUnderLine]}> politique de confidentialité</Text>
        </Text>

        <TouchableOpacity
          style={[styles.textinput, styles.buttonValide]}
          onPress={() => _connexion()}
        >
          <Text style={styles.textButton}>Se connecter</Text>
        </TouchableOpacity>
      </View>
    </View>

  )

}

const styles = StyleSheet.create({
  main_container: {
    marginTop: 20,
    paddingLeft : 30,
    paddingRight: 30,
    flex : 1
  },
  textinput: {
    paddingLeft: 80,
    paddingRight: 80,
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    backgroundColor:'#FBFBFB',
    borderRadius : 10
  },
  viewInputs: {
    flex: 8,
    justifyContent: 'center',

  },
  buttonValide: {

    backgroundColor: '#2E2E41',

  },
  textLogin : {
    marginBottom: 5,
    marginTop : 10

  },
  textButton : {
    color : '#FFFFFF',
    textAlign : 'center'
  }
  ,
  textOublie : {
    marginTop: 5,
    fontSize: 11,
    textAlign: 'right',
    textDecorationLine: 'underline',
  },
  text : {
    fontSize: 11,
  },
  textUnderLine : {
    textDecorationLine: 'underline',
  }

})

