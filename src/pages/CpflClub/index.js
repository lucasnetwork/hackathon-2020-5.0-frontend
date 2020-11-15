import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Container, {
	ContainerTitle,
	Points,
	TitleList,
	TitleListContainer,
} from './styles';
import { Title } from '../../components/Title';
import Card from '../../components/Card';

const CpflClub = () => {
	return (
		<Container>
			<ContainerTitle>
				<Title>Saldo atual</Title>
				<Points>450 pontos</Points>
			</ContainerTitle>
			<TitleListContainer>
				<TitleList>Resgatar seus pontos</TitleList>
				<TitleList light>
					Troque seus pontos por descontos na sua fatura.
				</TitleList>
			</TitleListContainer>
			<ScrollView contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}>
				<Card>
					<View>
						<Text
							style={{
								fontSize: 12,
								color: '#464646',
							}}
						>
							Instalação de tomadas elétricas
						</Text>
						<Points>230 pontos</Points>
					</View>
					<Ionicons name="md-arrow-round-forward" size={30} color="#3F3F3F" />
				</Card>
			</ScrollView>
		</Container>
	);
};

export default CpflClub;
