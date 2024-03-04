import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import store from './store/configStore';
import {Provider} from 'react-redux';
import ScreenAuthenticateCPF from './src/Screen/ScreenAuthenticateCPF';
import ScreenAuthenticatePassword from './src/Screen/ScreenAuthenticatePassword';
import ScreenExtractAccount from './src/Screen/ScreenExtractAccount';
import ScreenSendPix from './src/Screen/ScreenSendPix';
import ScreenSelectPix from './src/Screen/ScreenSelectPix';
import ScreenSelectValuePix from './src/Screen/ScreenSelectValuePix';
import ScreenPixReview from './src/Screen/ScreenPixReview';
import ScreenTransactionReceipt from './src/Screen/ScreenTransactionReceipt';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ScreenAuthenticateCPF">
          <Stack.Screen
            options={{headerShown: false}}
            name="ScreenAuthenticateCPF"
            component={ScreenAuthenticateCPF}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="ScreenAuthenticatePassword"
            component={ScreenAuthenticatePassword}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="ScreenExtractAccount"
            component={ScreenExtractAccount}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="ScreenSendPix"
            component={ScreenSendPix}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="ScreenSelectPix"
            component={ScreenSelectPix}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="ScreenSelectValuePix"
            component={ScreenSelectValuePix}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="ScreenPixReview"
            component={ScreenPixReview}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="ScreenTransactionReceipt"
            component={ScreenTransactionReceipt}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
