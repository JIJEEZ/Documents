import React, { useState } from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//screens
import Login from './screens/registration';
import Login from './screens/homepage';
import Welcome from './screens/homepage';

const Stack = createStackNavigator();

const RootStack = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ="Login" component ={registration} /> 
        <Stack.Screen name ="Welcome" component ={homepage} /> 
      
      </Stack.Navigator> 
    </NavigationContainer>

  )
}