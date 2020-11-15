import styled, { css } from 'styled-components/native';

export default styled.View`
	flex: 1;
	padding: 16px;
	align-items: center;
	justify-content: center;
	background: #f5f5f5;
	margin-top: 50px;
`;

export const TitleContainer = styled.View`
	margin-bottom: 32px;
`;

export const Title = styled.Text`
	font-size: 26px;
	color: #582a2a;
	font-weight: bold;
`;

export const InvoiceContainer = styled.View``;

export const TitleInvoice = styled.Text`
	font-size: 16px;
	font-weight: bold;
	color: #464646;
	margin-bottom: 8px;
`;

export const InvoiceList = styled.ScrollView`
	max-height: 126px;
	margin-bottom: 36px;
`;

export const Invoice = styled.View`
	margin-left: 16px;
	width: 312px;
	height: 126px;
	background: #f0f0f0;
	border-radius: 12px;
	padding: 16px 18px;
	/* shadowcolor: '#000';
	shadowoffset: ${{
		width: 0,
		height: 4,
	}};
	shadowopacity: 0.3;
	shadowradius: 4.65; */

	/* elevation: 8; */
`;

export const Price = styled.Text`
	font-weight: bold;
	font-size: 20px;

	color: #0098d1;
`;

export const ContainerInvoiceRow = styled.View`
	flex-direction: row;
	margin-top: 27px;
	justify-content: space-between;
	width: 100%;
	align-self: flex-end;
`;

export const PointsInvoice = styled.Text`
	font-size: 12px;
	color: #464646;
`;

export const StateInvoice = styled.View`
	min-width: 101px;
	align-items: center;
	justify-content: center;
	padding: 8px;
	background: #00d12e;
	border-radius: 2323px;
	${({ waiting }) =>
		waiting &&
		css`
			background: #424242;
		`}
`;

export const StateInvoiceText = styled.Text`
	font-size: 10px;
	color: #fff;
`;

export const DateContainer = styled.View``;

export const DateText = styled.Text`
	color: #464646;
	font-size: 12px;
	font-weight: 600;
	${({ normal }) =>
		normal &&
		css`
			font-weight: normal;
		`}
`;

export const TitleClub = styled(TitleInvoice)`
	margin-top: 36px;
	margin-bottom: 8px;
`;

export const Containerclub = styled.View`
	width: 100%;
`;

export const Card = styled.View`
	width: 100%;
	min-height: 74px;
	padding: 13px;
	background: #f0f0f0;
	border-radius: 12px;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
`;

export const TitleCard = styled(Price)`
	font-size: 22px;
`;
