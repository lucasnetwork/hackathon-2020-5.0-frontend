import React from 'react';
import { MaterialIcons, Feather } from '@expo/vector-icons';

import Container from './styles';

const ButtonChat = ({ open, ...props }) => {
	return (
		<Container {...props}>
			{open ? (
				<Feather name="x" size={32} color="#fff" />
			) : (
				<MaterialIcons name="message" size={32} color="#fff" />
			)}
		</Container>
	);
};

export default ButtonChat;
