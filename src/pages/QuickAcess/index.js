import React from 'react';
import Container, { Title, TitleButton, SubTitleButton } from './styles';
import ButtonCard from '../../components/ButtonCard';

const QuickAcess = () => {
	return (
		<Container>
			<Title>Acesso rápido</Title>
			<ButtonCard>
				<TitleButton>2ª via do Boleto</TitleButton>
				<SubTitleButton>Acesse já a segunda via do seu boleto.</SubTitleButton>
			</ButtonCard>
			<ButtonCard secondary>
				<TitleButton>Pagar conta</TitleButton>
				<SubTitleButton>
					Maior facilidade de pagar sua conta de energia.
				</SubTitleButton>
			</ButtonCard>
			<ButtonCard tertiary>
				<TitleButton>Emergência</TitleButton>
				<SubTitleButton>Nos informe sua emergência.</SubTitleButton>
			</ButtonCard>
		</Container>
	);
};

export default QuickAcess;
