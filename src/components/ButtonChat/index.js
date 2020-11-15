import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import Container from './styles';

const ButtonChat = () => {
	return (
		<Container>
			<MaterialIcons name="message" size={32} color="#fff" />
		</Container>
	);
};

export default ButtonChat;
