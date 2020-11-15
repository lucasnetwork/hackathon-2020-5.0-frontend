import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import Container, { Input } from './styles';

const InputSearch = () => {
	return (
		<Container>
			<MaterialIcons name="search" size={24} color="black" />
			<Input placeholder="O que está procurando?" />
		</Container>
	);
};

export default InputSearch;
