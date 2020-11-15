import React from 'react';
import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Container, {
	TitleContainer,
	Title,
	TitleInvoice,
	InvoiceList,
	Containerclub,
	InvoiceContainer,
	TextCard,
	TitleClub,
} from './styles';
import InputSearch from '../../components/InputSearch';
import giftBoxImage from '../../images/giftBox.png';
import handShakeImage from '../../images/handShake/handshake.png';
import ButtonChat from '../../components/ButtonChat';
import InvoiceCard from './components/InvoiceCard';
import Card from '../../components/Card';

const Home = () => {
	const navigate = useNavigation();

	function goToChatBot() {
		navigate.navigate('ChatBot');
	}
	function goToIndicateFriend() {
		navigate.navigate('IndicateFriend');
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
					<InvoiceContainer>
						<TitleInvoice>Suas Faturas</TitleInvoice>
						<InvoiceList horizontal>
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
						</InvoiceList>
					</InvoiceContainer>
					<Containerclub>
						<TitleClub>CPFL Clube</TitleClub>
						<Card>
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
					</Containerclub>
					<Containerclub>
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
					</Containerclub>
				</View>
			</Container>
		</>
	);
};

export default Home;
