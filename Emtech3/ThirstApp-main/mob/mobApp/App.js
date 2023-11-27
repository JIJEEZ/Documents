

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './screens/homepage';
import Registration from './screens/registration'; 

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{
            headerShown: false, // Hide the header bar
          }}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{
            headerShown: false, // Hide the header bar
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
