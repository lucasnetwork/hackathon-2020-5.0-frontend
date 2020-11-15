import React from 'react';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Container, {
	TitleContainer,
	MessageText,
	Title,
	SubTitle,
	ImageContainer,
} from './styles';

const Message = () => {
	return (
		<Container>
			<ImageContainer>
				<MaterialIcons name="person" size={24} color="black" />
			</ImageContainer>
			<View>
				<TitleContainer>
					<Title>Chatbot Name</Title>
					<SubTitle>10/10/2020 às 10:33</SubTitle>
				</TitleContainer>
				<MessageText>
					Reprehenderit posuere rerum aliquip possimus aptent alias quos sint
					nisl morbi autem. Sequi luctus sapien ultricies! Duis.
				</MessageText>
			</View>
		</Container>
	);
};

export default Message;
