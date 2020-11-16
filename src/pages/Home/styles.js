import styled, { css } from 'styled-components/native';

export default styled.ScrollView`
	flex: 1;
	padding-top: 20px;
`;

export const TitleContainer = styled.View`
	margin-bottom: 32px;
	padding: 0 16px;
`;

export const Title = styled.Text`
	font-size: 26px;
	color: #582a2a;
	font-weight: bold;
`;

export const TitleInvoice = styled.Text`
	font-size: 16px;
	font-weight: bold;
	color: #464646;
	margin-bottom: 8px;
`;

export const TitleClub = styled.Text`
	font-size: 16px;
	font-weight: bold;
	color: #464646;
	margin-top: 36px;
	margin-bottom: 12px;
`;

export const ContainerGroup = styled.View`
	padding: 0 16px;
	width: 100%;
	margin-bottom: 16px;
`;

export const TextCard = styled.Text`
	font-weight: bold;
	font-size: 22px;

	color: #464646;
	${({ small }) =>
		small &&
		css`
			font-size: 12px;
		`}
	${({ secondary }) =>
		secondary &&
		css`
			color: #fff;
		`}
	${({ tertiary }) =>
		tertiary &&
		css`
			color: #0098d1;
		`}
`;

export const TextService = styled.Text`
	font-size: 20px;
	color: #fff;
	text-transform: uppercase;
	${({ small }) =>
		small &&
		css`
			font-size: 12px;
		`}
`;

export const ContainerButton = styled.View`
	padding: 0 16px;
	margin-bottom: 20px;
`;
