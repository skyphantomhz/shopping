/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Node from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import LockSVG from './src/assets/icons/ic_lock.svg'
import EmailSVG from './src/assets/icons/ic_email.svg'

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { useState } from 'react/cjs/react.production.min';

import InputComponent from './src/component/input'
import ButtonComponent from './src/component/button'

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', position: 'absolute', top: 110, left: 25 }}>
          <Text style={styles.labelTitle}>Sign</Text>
          <Text style={[styles.labelTitle, { color: '#38972E', marginLeft: 10 }]}>IN</Text>
        </View>
        <View style={styles.inputContainer}>
          <InputComponent style={styles.inputEmail} onChangeText={setEmail} value={email} placeholder={"Email"} icon={"at"} keyboardType={"email-address"}>
            <EmailSVG width={24} height={24} />
          </InputComponent>
          <InputComponent style={styles.inputPassword} onChangeText={setPassword} value={password} placeholder={"Password"} icon={"lock"} secureTextEntry={true}>
            <LockSVG width={24} height={24} />
          </InputComponent>
        </View>
        <ButtonComponent title="Sign in"
          onPress={() => { console.log("Clicked") }} style={styles.buttonSignIn} />
        <View style={{ flexDirection: 'row', position: 'absolute', bottom: 0, alignSelf: 'center' }}>
          <Text style={styles.textSignUp}>Don’t have account? </Text>
          <Text style={[styles.textSignUp, { color: '#38972E', marginLeft: 2 }]}>Sign Up</Text>
        </View>
      </View>
    </SafeAreaView >

  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  inputContainer: {
    marginHorizontal: 25,
    flexDirection: 'column',
  },
  inputEmail: {
    marginTop: 34
  },
  inputPassword: {
    marginTop: 34
  },
  labelTitle: {
    fontSize: 40,
    fontWeight: '500',
    color: 'black'
  },
  textSignUp: {
    fontSize: 16,
    fontWeight: '600',
    color: '#828282'
  },
  buttonSignIn: {
    marginHorizontal: 25, bottom: '15%', start: 0, end: 0, position: 'absolute'
  }
});

export default App;
