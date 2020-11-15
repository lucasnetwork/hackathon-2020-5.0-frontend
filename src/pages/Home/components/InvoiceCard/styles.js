import styled, { css } from 'styled-components/native';

export default styled.View`
	margin-left: 16px;
	width: 312px;
	height: 126px;
	background: #f0f0f0;
	border-radius: 12px;
	padding: 16px 18px;
`;

export const Price = styled.Text`
	font-weight: bold;
	font-size: 20px;

	color: #0098d1;
`;

export const Points = styled.Text`
	font-size: 12px;
	color: #464646;
`;

export const State = styled.Text`
	min-width: 101px;
	align-items: center;
	justify-content: center;
	padding: 8px;
	background: #00d12e;
	border-radius: 2323px;
	text-align: center;
	${({ waiting }) =>
		waiting &&
		css`
			background: #424242;
		`}
	font-size: 10px;
	color: #fff;
`;

export const ContainerInvoiceRow = styled.View`
	flex-direction: row;
	margin-top: 27px;
	justify-content: space-between;
	width: 100%;
	align-self: flex-end;
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
