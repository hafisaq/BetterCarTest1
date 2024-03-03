// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BetterCarRentalScreen from './screens/BetterCarRentalScreen';
import FirstScreen from './screens/FirstScreen';
// import FirstScreen from './path/to/FirstScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={BetterCarRentalScreen}  options={{ headerShown: false }}  />
        <Stack.Screen name="First" component={FirstScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
