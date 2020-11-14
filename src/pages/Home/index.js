import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import Container, { Image, Background } from './styles';
import logoImage from '../../images/logo.png';
import background from '../../images/background.png';

const Home = () => {
	const navigate = useNavigation();

	function goToLoginPage() {
		navigate.navigate('Login');
	}
	return (
		<Container>
			<Background source={background} />
			<Image source={logoImage} />
			<Button
				onPress={goToLoginPage}
				activeOpacity={0.6}
				text="Já tenho conta"
			/>
			<Button secondary text="Sou novo" />
		</Container>
	);
};

export default Home;
