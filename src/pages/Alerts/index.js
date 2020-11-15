import React from 'react';
import Container, { ContainerTitle, AlertsContainer } from './styles';
import { Title, SubTitle } from '../../components/Title';
import AudioContainer from './components/AudioContainer';

const Alerts = () => {
	return (
		<Container>
			<ContainerTitle>
				<Title>Meus alertas</Title>
				<SubTitle>Obrigado por colaborar com nossos serviços</SubTitle>
			</ContainerTitle>
			<AlertsContainer>
				<AudioContainer />
			</AlertsContainer>
		</Container>
	);
};
export default Alerts;
