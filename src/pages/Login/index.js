import React from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import Container, {
	TitleContainer,
	Title,
	SubTitle,
	ContainerInputs,
	ContainerButton,
	LabelTextReceiverPass,
	ContainerTextReceiverPass,
	ButtonReceiverPass,
	ReceiverPassText,
} from './styles';

import logoImage from '../../images/logo.png';
import InputText from '../../components/InputText';

const Login = () => {
	const navigate = useNavigation();

	function goToHome() {
		navigate.navigate('Home');
	}

	return (
		<Container>
			<View>
				<Image source={logoImage} />
				<TitleContainer>
					<Title>Bem-vindo(a) de volta</Title>
					<SubTitle>Acesse sua conta usando seu e-mail cadastrado</SubTitle>
				</TitleContainer>
			</View>
			<ContainerInputs>
				<InputText label="E-mail" />
				<InputText label="Senha" password />
			</ContainerInputs>
			<ContainerButton>
				<ContainerTextReceiverPass>
					<LabelTextReceiverPass>
						Caso tenha esquecido sua senha
					</LabelTextReceiverPass>
					<ButtonReceiverPass>
						<ReceiverPassText>clique aqui</ReceiverPassText>
					</ButtonReceiverPass>
				</ContainerTextReceiverPass>
				<Button text="Entrar" onPress={goToHome} />
			</ContainerButton>
		</Container>
	);
};

export default Login;
