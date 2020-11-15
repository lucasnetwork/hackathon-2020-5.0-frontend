import React from 'react';
import { View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Container, { ContainerTitle, ImageIcon } from './styles';
import { Title, SubTitle } from '../../components/Title';
import warning from '../../images/warning/warning.png';
import Button from '../../components/Button';

const Emergency = () => {
	return (
		<Container>
			<ContainerTitle>
				<Title>Emergência</Title>
				<SubTitle>
					APERTE O BOTÃO PARA EMITIR UM ALERTA PARA NOSSA CENTRAL
				</SubTitle>
			</ContainerTitle>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<AntDesign name="arrowright" size={24} color="#CD2A00" />
				<ImageIcon>
					<Image source={warning} />
				</ImageIcon>
				<AntDesign name="arrowleft" size={24} color="#CD2A00" />
			</View>
			<Button tertiary text="Meus alertas" />
		</Container>
	);
};

export default Emergency;
