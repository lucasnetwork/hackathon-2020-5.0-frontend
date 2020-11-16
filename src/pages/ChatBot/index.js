import React, { useEffect, useState } from 'react';
import Container, { MessageContainer } from './styles';
import Message from './components/Message';
import InputText from './components/InputText';
import ButtonChat from '../../components/ButtonChat';
import services from '../../services';
import { ScrollView } from 'react-native-gesture-handler';

const ChatBot = () => {
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		getInitialState();
	});

	async function getInitialState() {
		const response = await services.index.chatBotMessages();
		setMessages(response.data || []);
	}

	return (
		<Container>
			<MessageContainer>
				<ScrollView>
					{messages.map(({ title, description, created_at }) => (
						<Message
							title={title}
							description={description}
							createdAt={created_at}
						/>
					))}
				</ScrollView>
				<ButtonChat open />
			</MessageContainer>
			<InputText />
		</Container>
	);
};

export default ChatBot;
