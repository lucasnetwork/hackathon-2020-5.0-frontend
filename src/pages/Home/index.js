import React from 'react';
import { Image, View, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Container, {
	TitleContainer,
	Title,
	TitleInvoice,
	ContainerGroup,
	TextCard,
	TitleClub,
	TextService,
} from './styles';
import InputSearch from '../../components/InputSearch';
import giftBoxImage from '../../images/giftBox.png';
import handShakeImage from '../../images/handShake/handshake.png';
import ButtonChat from '../../components/ButtonChat';
import InvoiceCard from './components/InvoiceCard';
import Card from '../../components/Card';
import ButtonCard from '../../components/ButtonCard';

const Home = () => {
	const navigate = useNavigation();

	function goToChatBot() {
		navigate.navigate('ChatBot');
	}
	function goToIndicateFriend() {
		navigate.navigate('IndicateFriend');
	}

	function goToCpflClub() {
		navigate.navigate('CpflClub');
	}

	return (
		<>
			<ButtonChat onPress={goToChatBot} />
			<Container>
				<View style={{ flex: 1, paddingBottom: 32 }}>
					<TitleContainer>
						<Title>Olá, Carlos!</Title>
						<InputSearch />
					</TitleContainer>
					<ContainerGroup>
						<TitleInvoice>Suas Faturas</TitleInvoice>
						<ScrollView
							contentContainerStyle={{ paddingVertical: 16 }}
							horizontal
						>
							<InvoiceCard
								price="343"
								points="21"
								state="paid"
								dateVenc="08/10/2020"
							/>
							<InvoiceCard
								price="343"
								points="21"
								state="wait"
								dateVenc="08/10/2020"
							/>
						</ScrollView>
					</ContainerGroup>
					<ContainerGroup>
						<TitleClub>Nossos Serviços</TitleClub>
						<View
							style={{ flexDirection: 'row', justifyContent: 'space-between' }}
						>
							<ButtonCard small>
								<TextService>2ª via do boleto</TextService>
							</ButtonCard>
							<ButtonCard small tertiary>
								<TextService>Falta de energia</TextService>
							</ButtonCard>
						</View>
						<View
							style={{ flexDirection: 'row', justifyContent: 'space-between' }}
						>
							<ButtonCard small secondary>
								<TextService>Desligar energia</TextService>
							</ButtonCard>
							<ButtonCard small fourth>
								<TextService>Religar energia</TextService>
							</ButtonCard>
						</View>
					</ContainerGroup>
					<ContainerGroup>
						<TitleClub>CPFL Clube</TitleClub>
						<Card onPress={goToCpflClub}>
							<Image source={giftBoxImage} />
							<View>
								<TextCard small>Saldo total</TextCard>
								<TextCard tertiary>450 pontos</TextCard>
							</View>
							<Ionicons
								name="md-arrow-round-forward"
								size={30}
								color="#3F3F3F"
							/>
						</Card>
					</ContainerGroup>
					<ContainerGroup>
						<TitleClub>Ganhe pontos</TitleClub>
						<Card secondary onPress={goToIndicateFriend}>
							<Image source={handShakeImage} />
							<View>
								<TextCard secondary small>
									Indique um amigo e ganhe agoral
								</TextCard>
								<TextCard secondary>200 pontos</TextCard>
							</View>
							<Ionicons name="md-arrow-round-forward" size={30} color="#fff" />
						</Card>
					</ContainerGroup>
				</View>
			</Container>
		</>
	);
};

export default Home;
