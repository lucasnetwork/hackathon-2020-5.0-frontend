import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Container, { ContainerTitle, ContainerInputs } from './styles';
import Button from '../../components/Button';
import InputText from '../../components/InputText';
import { Title, SubTitle } from '../../components/Title';

const PayInvoice = () => {
	const navigate = useNavigation();
	function goToPayInvoiceOptions() {
		navigate.navigate('PayInvoiceOptions');
	}

	return (
		<Container>
			<ContainerTitle>
				<Title>Pagar conta</Title>
			</ContainerTitle>
			<ContainerInputs>
				<InputText label="CPF" />
				<InputText label="Data de Nascimento" />
			</ContainerInputs>
			<Button text="Pagar Conta" onPress={goToPayInvoiceOptions} />
		</Container>
	);
};

export default PayInvoice;
