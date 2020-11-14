import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Login from './pages/Login';
import HeaderLogin from './components/HeaderLogin';
import Register from './pages/Register';
import QuickAcess from './pages/QuickAcess';

const Stack = createStackNavigator();

const Routes = () => (
	<NavigationContainer>
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen
				name="Home"
				component={Home}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Login"
				component={Login}
				options={{ header: (props) => <HeaderLogin {...props} /> }}
			/>
			<Stack.Screen
				name="Register"
				component={Register}
				options={{ header: (props) => <HeaderLogin {...props} /> }}
			/>
			<Stack.Screen
				name="QuickAcess"
				component={QuickAcess}
				options={{ header: (props) => <HeaderLogin {...props} /> }}
			/>
		</Stack.Navigator>
	</NavigationContainer>
);

export default Routes;
