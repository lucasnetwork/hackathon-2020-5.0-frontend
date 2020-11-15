import styled, { css } from 'styled-components/native';

export default styled.View`
	flex: 1;
	background: #f5f5f5;
`;

export const ContainerTitle = styled.View`
	width: 100%;
	border-color: #464646;
	border-bottom-width: 1px;
	padding: 16px;
	flex-direction: row;
	justify-content: space-between;
`;

export const Points = styled.Text`
	font-weight: bold;
	font-size: 22px;
	color: #0098d1;
`;

export const TitleList = styled.Text`
	font-weight: bold;
	font-size: 16px;
	color: #464646;
	${({ light }) =>
		light &&
		css`
			font-weight: normal;
			color: #7b7b7b;
		`}
`;

export const TitleListContainer = styled.View`
	margin-bottom: 20px;
	padding: 0 20px;
	margin-top: 40px;
`;
