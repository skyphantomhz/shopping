/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/feature/login/login_screen'
import RegisterScreen from './src/feature/register/register_screen'
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
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
