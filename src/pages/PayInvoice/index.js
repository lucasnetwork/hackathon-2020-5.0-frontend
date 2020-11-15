import React from 'react';
import Container, { ContainerTitle, ContainerButtons, TextOr } from './styles';
import Button from '../../components/Button';
import InputText from '../../components/InputText';
import { Title, SubTitle } from '../../components/Title';

const PayInvoice = () => {
	return (
		<Container>
			<ContainerTitle>
				<Title>Pagar conta</Title>
				<SubTitle>Digite seu código de barra</SubTitle>
			</ContainerTitle>
			<InputText label="Código de Barra" />
			<ContainerButtons>
				<Button text="Pagar conta" />
				<TextOr>ou</TextOr>
				<Button text="Usar leitor de código" />
			</ContainerButtons>
		</Container>
	);
};

export default PayInvoice;
