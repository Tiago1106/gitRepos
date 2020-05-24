import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './pages/Home';
import Repositories from './pages/Repositories';
import RepositoryDetails from './pages/RepositoryDetails';
import {setNavigator} from './services/navigation';

const Stack = createStackNavigator();

export const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export default function Routes() {
  return (
    <NavigationContainer ref={setNavigator}>
      <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false 
        }}
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} options={{}} />
        <Stack.Screen name="Repositories" component={Repositories} />
        <Stack.Screen name="RepositoryDetails" component={RepositoryDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
