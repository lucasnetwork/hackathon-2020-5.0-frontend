import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PreLogin from './pages/PreLogin';
import Login from './pages/Login';
import HeaderLogin from './components/HeaderLogin';
import Register from './pages/Register';
import QuickAcess from './pages/QuickAcess';
import Boleto from './pages/Boleto';
import Header from './components/Header';
import Home from './pages/Home';
import ChatBot from './pages/ChatBot';
import PayInvoice from './pages/PayInvoice';
import IndicateFriend from './pages/IndicateFriend';
import PayInvoiceDash from './pages/PayInvoiceDash';
import Emergency from './pages/Emergency';
import Alerts from './pages/Alerts';
import CpflClub from './pages/CpflClub';
import Record from './pages/Record';

const Stack = createStackNavigator();

const Routes = () => (
	<NavigationContainer>
		<Stack.Navigator initialRouteName="PreLogin">
			<Stack.Screen
				name="PreLogin"
				component={PreLogin}
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
				options={{ header: (props) => <Header {...props} /> }}
			/>
			<Stack.Screen
				name="Boleto"
				component={Boleto}
				options={{ header: (props) => <Header {...props} /> }}
			/>
			<Stack.Screen
				name="Home"
				component={Home}
				options={{ header: (props) => <Header {...props} /> }}
			/>
			<Stack.Screen
				name="ChatBot"
				component={ChatBot}
				options={{ header: (props) => <Header {...props} /> }}
			/>
			<Stack.Screen
				name="PayInvoice"
				component={PayInvoice}
				options={{ header: (props) => <Header {...props} /> }}
			/>
			<Stack.Screen
				name="IndicateFriend"
				component={IndicateFriend}
				options={{ header: (props) => <Header {...props} /> }}
			/>
			<Stack.Screen
				name="PayInvoiceDash"
				component={PayInvoiceDash}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Emergency"
				component={Emergency}
				options={{ header: (props) => <Header {...props} /> }}
			/>
			<Stack.Screen
				name="Alerts"
				component={Alerts}
				options={{ header: (props) => <Header {...props} /> }}
			/>
			<Stack.Screen
				name="CpflClub"
				component={CpflClub}
				options={{ header: (props) => <Header {...props} /> }}
			/>
			<Stack.Screen
				name="Record"
				component={Record}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	</NavigationContainer>
);

export default Routes;
