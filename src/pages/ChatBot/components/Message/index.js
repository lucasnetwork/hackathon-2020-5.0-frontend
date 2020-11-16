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

const Message = ({ title, description, createdAt }) => {
	return (
		<Container>
			<ImageContainer>
				<MaterialIcons name="person" size={24} color="black" />
			</ImageContainer>
			<View>
				<TitleContainer>
					<Title>{title}</Title>
					<SubTitle>{createdAt} às 10:33</SubTitle>
				</TitleContainer>
				<MessageText>{description}</MessageText>
			</View>
		</Container>
	);
};

export default Message;
