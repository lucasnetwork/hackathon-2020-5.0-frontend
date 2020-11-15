import React from 'react';
import { StatusBar, View, Image, ScrollView } from 'react-native';
import {
	MaterialCommunityIcons,
	MaterialIcons,
	Ionicons,
} from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import mastercardeImage from '../../images/mastercardImage/mastercardImage.png';
import Container, {
	Header,
	ViewButton,
	HeaderTitle,
	ContainerHeaderValues,
	HeaderPrice,
	HeaderBarCode,
	ButtonsContainer,
	MainContainer,
	MainTitleContainer,
	MainTitle,
	MainSubTitle,
	CardText,
	CardAdd,
	FooterContainer,
} from './styles';
import ButtonHeader from './components/ButtonHeader';
import ButtonGoBack from '../../components/ButtonGoBack';
import Card from '../../components/Card';
import Button from '../../components/Button';

const PayInvoiceDash = () => {
	const navigate = useNavigation();
	function goBack() {
		navigate.goBack();
	}
	return (
		<Container>
			<Header>
				<ViewButton>
					<ButtonGoBack handlePress={goBack} />
				</ViewButton>
				<ContainerHeaderValues>
					<HeaderTitle>Fatura atual</HeaderTitle>
					<HeaderPrice>R$ 385,80</HeaderPrice>
					<HeaderBarCode>
						929874320987249087423987234987233423242423423423423423423
					</HeaderBarCode>
				</ContainerHeaderValues>
				<ButtonsContainer>
					<ButtonHeader text="Gerar Boleto" />
					<ButtonHeader text="Copiar Código" />
				</ButtonsContainer>
			</Header>
			<ScrollView>
				<MainContainer>
					<MainTitleContainer>
						<MainTitle>Formas de pagamento</MainTitle>
						<MainSubTitle>
							Você pode pagar com até 3 cartões de crédito
						</MainSubTitle>
					</MainTitleContainer>
					<Card>
						<Image source={mastercardeImage} />
						<View>
							<CardText>Meu cartão</CardText>
							<CardText>Cartão com final: 0808</CardText>
						</View>
						<MaterialCommunityIcons name="pencil" size={24} color="black" />
					</Card>
					<Card>
						<MaterialCommunityIcons
							name="plus-circle-outline"
							size={24}
							color="#0098D1;"
						/>
						<CardAdd>Adicionar cartão de crédito</CardAdd>
					</Card>
					<Button text="Pagar" />
				</MainContainer>
				<FooterContainer>
					<Card>
						<MaterialIcons name="receipt" size={30} color="#464646" />
						<View>
							<CardText>Boleto bancário</CardText>
							<CardText>Pague em até 3 dias úteis</CardText>
						</View>
						<Ionicons name="ios-arrow-forward" size={30} color="#464646" />
					</Card>
				</FooterContainer>
			</ScrollView>
			<StatusBar barStyle="light-content" />
		</Container>
	);
};

export default PayInvoiceDash;
