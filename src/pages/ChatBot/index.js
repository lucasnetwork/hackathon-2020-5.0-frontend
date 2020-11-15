import React from 'react';
import Container, { MessageContainer } from './styles';
import Message from './components/Message';
import InputText from './components/InputText';
import ButtonChat from '../../components/ButtonChat';

const ChatBot = () => {
	return (
		<Container>
			<MessageContainer>
				<Message />
				<ButtonChat open />
			</MessageContainer>
			<InputText />
		</Container>
	);
};

export default ChatBot;
