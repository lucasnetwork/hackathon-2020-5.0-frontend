import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ButtonGoBack from '../ButtonGoBack';
import background from '../../images/background.png';
import { Background } from './styles';

const HeaderLogin = () => {
	const navigate = useNavigation();

	function goToHomePage() {
		navigate.navigate('PreLogin');
	}
	return (
		<>
			<ButtonGoBack handlePress={goToHomePage} />
			<Background source={background} />
		</>
	);
};

export default HeaderLogin;
