import styled, { css } from 'styled-components/native';

export default styled.View`
	flex: 1;
	padding: 16px;
	align-items: center;
	justify-content: center;
`;

export const TitleContainer = styled.View`
	margin-top: 14px;
`;

export const ButtonContainer = styled.View``;

export const TextPaid = styled.Text`
	font-size: 20px;
	width: 40%;
`;

export const State = styled.Text`
	min-width: 101px;
	align-items: center;
	justify-content: center;
	padding: 8px;
	background: #00d12e;
	border-radius: 2323px;
	text-align: center;
	${({ venc }) =>
		venc &&
		css`
			background: #e32119;
		`}
	font-size: 10px;
	color: #fff;
`;
