import React from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import Button from '../../components/Button';
import Container, {
	TitleContainer,
	Title,
	SubTitle,
	Background,
	Label,
	Input,
	ContainerInputs,
	ContainerInput,
	ContainerButton,
	LabelTextReceiverPass,
	ContainerTextReceiverPass,
	ButtonReceiverPass,
	ReceiverPassText,
	ButtonGoBack,
} from './styles';
import logoImage from '../../images/logo.png';
import background from '../../images/background.png';

const Login = () => {
	const navigate = useNavigation();

	function goToHomePage() {
		navigate.navigate('Home');
	}
	return (
		<Container>
			<ButtonGoBack onPress={goToHomePage}>
				<AntDesign name="arrowleft" size={24} color="black" />
			</ButtonGoBack>
			<Background source={background} />
			<View>
				<Image source={logoImage} />
				<TitleContainer>
					<Title>Bem-vindo(a) de volta</Title>
					<SubTitle>Acesse sua conta usando seu e-mail cadastrado</SubTitle>
				</TitleContainer>
			</View>
			<ContainerInputs>
				<Label>E-mail</Label>
				<ContainerInput>
					<Input />
				</ContainerInput>
				<Label>Senha</Label>
				<ContainerInput>
					<Input />
				</ContainerInput>
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
				<Button text="Entrar" />
			</ContainerButton>
		</Container>
	);
};

export default Login;
