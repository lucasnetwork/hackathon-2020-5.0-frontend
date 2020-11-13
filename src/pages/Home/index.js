import React from 'react';
import Button from '../../components/Button';
import Container, { Image } from './styles';
import logoImage from '../../images/logo.png';

const Home = () => (
	<Container>
		<Image source={logoImage} />
		<Button activeOpacity={0.6} text="Já tenho conta" />
		<Button secondary text="Sou novo" />
	</Container>
);

export default Home;
