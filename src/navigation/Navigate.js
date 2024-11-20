import {NavigationContainer} from '@react-navigation/native';
import React from 'react'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Provider as PaperProvider,} from 'react-native-paper';
import LoginScreen from './../screens/login/login.js';
import SignUpScreen from '../screens/signUp/signUp.js';
import RecoverPasswordScreen from '../screens/recoverPassword/recoverPassword.js';
import ProfileScreen from "../screens/userProfile/userProfile.js";

export default function Navigation() {
  return (
    <PaperProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
    </PaperProvider>
  );
}
const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
      <Stack.Navigator initialRouteName='login' mode="modal" headerMode="none">
          <Stack.Screen name="userProfile" component={ProfileScreen} options={{headerShown:false}} />
          <Stack.Screen name="login" component={LoginScreen} options={{headerShown:false}} />
          <Stack.Screen name="signUp" component={SignUpScreen} options={{headerShown:false}} />
          <Stack.Screen name="recoverPassword" component={RecoverPasswordScreen} options={{headerShown:false}} />
      </Stack.Navigator>
  );
}