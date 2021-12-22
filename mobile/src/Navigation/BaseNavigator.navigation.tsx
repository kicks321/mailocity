import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BaseNavigatorScreenParams } from '@Types';
import { SignInScreen, SignUpScreen } from '@Views';

const Stack = createNativeStackNavigator<BaseNavigatorScreenParams>();

const BaseNavigator: React.FunctionComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default BaseNavigator;
