import React from 'react';
import { Image, View } from 'react-native';
import Container, {
	TitleContainer,
	Title,
	TitleInvoice,
	InvoiceList,
	Invoice,
	Price,
	PointsInvoice,
	ContainerInvoiceRow,
	StateInvoice,
	StateInvoiceText,
	DateContainer,
	DateText,
	Card,
	Containerclub,
	InvoiceContainer,
	TitleCard,
} from './styles';

import InputSearch from '../../components/InputSearch';
import giftBoxImage from '../../images/giftBox.png';
import ButtonChat from '../../components/ButtonChat';

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
					<Invoice>
						<Price>343R$</Price>
						<PointsInvoice>+21 pontos</PointsInvoice>
						<ContainerInvoiceRow>
							<StateInvoice>
								<StateInvoiceText>Fatura Paga</StateInvoiceText>
							</StateInvoice>
							<DateContainer>
								<DateText normal>Vencimento</DateText>
								<DateText>08/10/2020</DateText>
							</DateContainer>
						</ContainerInvoiceRow>
					</Invoice>
					<Invoice>
						<Price>343R$</Price>
						<PointsInvoice>+21 pontos</PointsInvoice>
						<ContainerInvoiceRow>
							<StateInvoice waiting>
								<StateInvoiceText>Aguardando Pagamento</StateInvoiceText>
							</StateInvoice>
							<DateContainer>
								<DateText normal>Vencimento</DateText>
								<DateText>08/10/2020</DateText>
							</DateContainer>
						</ContainerInvoiceRow>
					</Invoice>
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
