import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatScreen from './src/chat';
import Home from './src/home';

const Stack = createNativeStackNavigator();



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
       <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Chat" component={ChatScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;