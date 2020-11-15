import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import Container, { Input } from './styles';

const InputSearch = () => {
	return (
		<Container>
			<Input placeholder="O que está procurando?" />
			<AntDesign name="arrowright" size={24} color="black" />
		</Container>
	);
};

export default InputSearch;
