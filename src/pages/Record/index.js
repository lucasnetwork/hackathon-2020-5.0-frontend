import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import Container, {
	ButtonContainer,
	TitleContainer,
	Title,
	SubTitle,
	MicrophoneContainer,
} from './styles';
import ButtonGoBack from '../../components/ButtonGoBack';

const Record = () => {
	const navigate = useNavigation();

	function goBack() {
		navigate.goBack();
	}
	return (
		<Container>
			<ButtonContainer>
				<ButtonGoBack handlePress={goBack} />
			</ButtonContainer>
			<TitleContainer>
				<Title>Gravando...</Title>
				<SubTitle>A MENSAGEM SERÁ ENVIADA A NOSSA CENTRAL</SubTitle>
			</TitleContainer>
			<MicrophoneContainer>
				<FontAwesome name="microphone" size={80} color="#fff" />
				<SubTitle>10s</SubTitle>
			</MicrophoneContainer>
			<StatusBar style="light" />
		</Container>
	);
};

export default Record;
