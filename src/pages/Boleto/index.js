import React from 'react';
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

	function goToPayInvoiceDash() {
		navigate.navigate('PayInvoiceDash');
	}

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
				<Button text="Gerar boleto" onPress={goToPayInvoiceDash} />
			</ContainerButton>
		</Container>
	);
};

export default Boleto;
