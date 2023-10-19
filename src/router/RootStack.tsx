import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootState } from '../redux/store';

import Login from '../pages/Authentication/Login';
import Register from '../pages/Authentication/Register';
import MainStack from '../router/MainStack';


const Stack = createNativeStackNavigator();

const RootStack = () =>{
   

    return(
       <NavigationContainer>
            <Stack.Navigator
             initialRouteName="MainStack"
             screenOptions={{headerShown:false}} > 
            <Stack.Screen name="MainStack" component={MainStack}/>
            <Stack.Screen name="LoginPage" component={Login} />
            <Stack.Screen name="RegisterPage" component={Register} /> 
            
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootStack;