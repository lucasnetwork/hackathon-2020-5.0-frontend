import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ButtonGoBack from '../ButtonGoBack';
import background from '../../images/background.png';
import Container, { Background } from './styles';

const HeaderLogin = () => {
	const navigate = useNavigation();

	function goToHomePage() {
		navigate.navigate('PreLogin');
	}
	return (
		<>
			<Container>
				<ButtonGoBack handlePress={goToHomePage} />
			</Container>
			<Background source={background} />
		</>
	);
};

export default HeaderLogin;
