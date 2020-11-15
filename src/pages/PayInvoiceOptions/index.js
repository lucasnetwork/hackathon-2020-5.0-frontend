import React from 'react';
import { ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Container, { TitleContainer, TextPaid, State } from './styles';
import { Title } from '../../components/Title';
import Card from '../../components/Card';

const PayInvoiceOptions = () => {
	const navigate = useNavigation();

	function goToPayInvoiceDash() {
		navigate.navigate('PayInvoiceDash');
	}
	return (
		<Container>
			<TitleContainer>
				<Title>Pagar Conta</Title>
			</TitleContainer>
			<ScrollView
				style={{ flex: 1, width: '100%' }}
				contentContainerStyle={{ padding: 16 }}
			>
				<Card onPress={goToPayInvoiceDash}>
					<TextPaid>Novembro</TextPaid>
					<State venc>Vencida</State>
					<Ionicons name="md-arrow-round-forward" size={30} color="#3F3F3F" />
				</Card>
				<Card onPress={goToPayInvoiceDash}>
					<TextPaid>Outubro</TextPaid>
					<State>Pagar</State>
					<Ionicons name="md-arrow-round-forward" size={30} color="#3F3F3F" />
				</Card>
				<Card onPress={goToPayInvoiceDash}>
					<TextPaid>Setembro</TextPaid>
					<State>Pagar</State>
					<Ionicons name="md-arrow-round-forward" size={30} color="#3F3F3F" />
				</Card>
			</ScrollView>
		</Container>
	);
};

export default PayInvoiceOptions;
