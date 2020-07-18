import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../components/screens/login/Login';
import { Home } from '../components/screens/home/Home';

export const Router = () => {

    const Stack = createStackNavigator();

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='Login'
                    screenOptions={{
                        headerTitleAlign: 'center',
                        gestureEnabled: false
                    }}>
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name='Home' component={Home} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};
