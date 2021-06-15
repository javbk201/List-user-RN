import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import UserList from './screens/UserList';
import UserDetailScreen from './screens/UserDetailScreen';
import CreateUserScreen from './screens/CreateUserScreen';

const Stack = createStackNavigator();

function MyStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="UserList"
            component={UserList}
            options={{tittle: 'Users List'}} />
            <Stack.Screen
            name="UserDetailScreen"
            component={UserDetailScreen}
            options={{tittle: 'Users Details'}}/>
            <Stack.Screen
            name="CreateUserScreen"
            component={CreateUserScreen}
            options={{tittle: 'Create Users'}}/>
        </Stack.Navigator>
    );
}

export default function App() {
  return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
