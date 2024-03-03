import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import store from './store/configStore';
import {Provider} from 'react-redux';
import ScreenAuthenticateCPF from './src/Screen/ScreenAuthenticateCPF';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ScreenAuthenticateCPF">
          <Stack.Screen
            name="ScreenAuthenticateCPF"
            component={ScreenAuthenticateCPF}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
