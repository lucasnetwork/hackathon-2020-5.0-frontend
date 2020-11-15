import React from 'react';
import PropTypes from 'prop-types';
import Container, {
	Price,
	Points,
	State,
	ContainerInvoiceRow,
	DateContainer,
	DateText,
} from './styles';

const InvoiceCard = ({ price, points, state, dateVenc }) => {
	return (
		<Container>
			<Price>R$ {price}</Price>
			<Points>+ {points} pontos</Points>
			<ContainerInvoiceRow>
				{state === 'paid' ? (
					<State>Fatura Paga</State>
				) : state === 'wait' ? (
					<State waiting>Aguardando Pagamento</State>
				) : (
					<State waiting>Aguardando Pagamento</State>
				)}
				<DateContainer>
					<DateText normal>Vencimento</DateText>
					<DateText>{dateVenc}</DateText>
				</DateContainer>
			</ContainerInvoiceRow>
		</Container>
	);
};

InvoiceCard.propTypes = {
	price: PropTypes.string.isRequired,
	points: PropTypes.string.isRequired,
	dateVenc: PropTypes.string.isRequired,
	state: PropTypes.string,
};

InvoiceCard.defaultProps = {
	state: 'paid',
};

export default InvoiceCard;
