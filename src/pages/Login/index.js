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
import services from '../../services';

const Login = () => {
	const navigate = useNavigation();
	const [email, setEmail] = React.useState('admin@email.com');
	const [password, setPassword] = React.useState('123456');

	async function goToHome() {
		const response = await services.post.authenticate({
			email,
			password,
		});

		if (response.status == 200) {
			navigate.navigate('Home');
		}
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
				<InputText
					label="E-mail"
					value={email}
					onChangeText={(e) => setEmail(e)}
				/>
				<InputText
					label="Senha"
					password
					value={password}
					onChangeText={(e) => setPassword(e)}
				/>
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
