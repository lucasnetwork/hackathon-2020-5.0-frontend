import React from 'react';
import Button from '../../components/Button';
import Container, { Image, Background } from './styles';
import logoImage from '../../images/logo.png';
import background from '../../images/background.png';

const Home = () => (
	<Container>
		<Background source={background} />
		<Image source={logoImage} />
		<Button activeOpacity={0.6} text="Já tenho conta" />
		<Button secondary text="Sou novo" />
	</Container>
);

export default Home;
