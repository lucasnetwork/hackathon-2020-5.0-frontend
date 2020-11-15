import React from 'react';
import Container, { ContainerTitle, ContainerInput } from './styles';
import { Title, SubTitle } from '../../components/Title';
import InputText from '../../components/InputText';
import Button from '../../components/Button';

const IndicateFriend = () => {
	return (
		<Container>
			<ContainerTitle>
				<Title>Indique um amigo</Title>
				<SubTitle>Indique um amigo e ganhe 200 pontos agora.</SubTitle>
			</ContainerTitle>
			<ContainerInput>
				<InputText label="Contato" />
				<InputText label="Mensagem" />
			</ContainerInput>
			<Button text="Indicar agora" />
		</Container>
	);
};

export default IndicateFriend;
