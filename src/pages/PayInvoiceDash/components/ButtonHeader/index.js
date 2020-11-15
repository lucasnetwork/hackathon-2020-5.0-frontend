import React from 'react';
import Container, { Text } from './styles';

const ButtonHeader = ({ text }) => {
	return (
		<Container>
			<Text>{text}</Text>
		</Container>
	);
};

export default ButtonHeader;
