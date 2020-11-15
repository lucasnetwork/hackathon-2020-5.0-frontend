import React from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import Container, {
	TitleContainer,
	ContainerInputs,
	ContainerButton,
	LabelTextReceiverPass,
	ContainerTextReceiverPass,
	ButtonReceiverPass,
	ReceiverPassText,
} from './styles';

import logoImage from '../../images/logo.png';
import InputText from '../../components/InputText';
import { Title, SubTitle } from '../../components/Title';

const Register = () => {
	const navigate = useNavigation();

	function goToLogin() {
		navigate.navigate('Login');
	}

	return (
		<Container>
			<View>
				<Image source={logoImage} />
				<TitleContainer>
					<Title>Bem-vindo(a)</Title>
					<SubTitle>
						Cadastre seus dados para ter acesso as suas informações.
					</SubTitle>
				</TitleContainer>
			</View>
			<ContainerInputs>
				<InputText label="Nome" />
				<InputText label="E-mail" />
				<InputText label="Senha" password />
			</ContainerInputs>
			<ContainerButton>
				<Button text="Criar conta" onPress={goToLogin} />
			</ContainerButton>
		</Container>
	);
};

export default Register;
