import React from 'react';
import { Image, View } from 'react-native';
import Container, {
	TitleContainer,
	Title,
	TitleInvoice,
	InvoiceList,
	DateText,
	Card,
	Containerclub,
	InvoiceContainer,
	TitleCard,
} from './styles';

import InputSearch from '../../components/InputSearch';
import giftBoxImage from '../../images/giftBox.png';
import ButtonChat from '../../components/ButtonChat';
import InvoiceCard from './components/InvoiceCard';

const Home = () => {
	return (
		<Container>
			<ButtonChat />
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
				<Title>CPFL Clube</Title>
				<Card>
					<Image source={giftBoxImage} />
					<View>
						<DateText>Saldo total</DateText>
						<TitleCard>450 pontos</TitleCard>
					</View>
				</Card>
			</Containerclub>
		</Container>
	);
};

export default Home;
