import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import Container, {
	TitleContainer,
	Title,
	SubTitle,
	ContainerInputs,
	ContainerButton,
} from './styles';

import InputText from '../../components/InputText';

const Boleto = () => {
	const navigate = useNavigation();

	return (
		<Container>
			<TitleContainer>
				<Title>2ª via do boleto</Title>
				<SubTitle>
					Preencha os campos para gerar sua segunda via da fatura.
				</SubTitle>
			</TitleContainer>
			<ContainerInputs>
				<InputText label="CPF" />
				<InputText label="Data de Nascimento" />
			</ContainerInputs>
			<ContainerButton>
				<Button text="Gerar boleto" />
			</ContainerButton>
		</Container>
	);
};

export default Boleto;
