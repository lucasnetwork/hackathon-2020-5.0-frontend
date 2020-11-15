import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Image } from 'react-native';
import Container from './styles';

import chatIcon from '../../images/chatIcon/chatIcon.png';

const ButtonChat = ({ open, ...props }) => {
	return (
		<Container {...props}>
			{open ? (
				<Feather name="x" size={32} color="#fff" />
			) : (
				<Image source={chatIcon} />
			)}
		</Container>
	);
};

export default ButtonChat;
