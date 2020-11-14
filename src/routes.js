import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Login from './pages/Login';

const Stack = createStackNavigator();

const Routes = () => (
	<NavigationContainer>
		<Stack.Navigator headerMode="none" initialRouteName="Home">
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Login" component={Login} />
		</Stack.Navigator>
	</NavigationContainer>
);

export default Routes;
