import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ButtonGoBack from '../ButtonGoBack';
import background from '../../images/background.png';
import Container, { Background, LogoImage } from './styles';
import logo from '../../images/logoSmall.png';

const HeaderLogin = () => {
	const navigate = useNavigation();

	function goToHomePage() {
		navigate.goBack();
	}
	return (
		<>
			<Background source={background} />
			<Container>
				<ButtonGoBack handlePress={goToHomePage} />
				<LogoImage source={logo} />
			</Container>
		</>
	);
};

export default HeaderLogin;
