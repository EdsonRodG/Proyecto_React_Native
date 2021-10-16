/*
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//copiado
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//pantallas importadas
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';


import {StripeProvider} from "@stripe/stripe-react-native";
import StripeApp from './src/StripeApp';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
<StripeProvider 
publishableKey = "pk_test_51JkaJUD7vVeyMzF6rq1ksPm8cGYic0JUD50nLri4LophKnIC7az4jFVFW16fWIAoRmk3m40yl4BPFPVKOVeDBRxw005PSfKywt"> 
    </StripeProvider> 
      <Stack.Navigator>
      <Stack.Screen options= {{headerShown: false}} name="Login" component={LoginScreen} /> 
      <Stack.Screen name="ClientHome" component={HomeScreen} /> 
      <Stack.Screen name="Register" component={RegisterScreen} /> 
      <Stack.Screen name="Stripe" component={StripeApp} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//expo install firebase