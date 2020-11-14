import styled, { css } from 'styled-components/native';

export default styled.TouchableOpacity`
	background: #0098d1;
	box-shadow: 6px 6px 10px rgba(19, 193, 67, 0.06);
	border-radius: 6px;
	width: 100%;
	height: 56px;
	margin-bottom: 24px;
	justify-content: center;
	align-items: center;
	${({ secondary }) =>
		secondary &&
		css`
			background: #f5f5f5;
			border: 1px solid rgba(70, 70, 70, 0.1);
		`}
	${({ tertiary }) =>
		tertiary &&
		css`
			background: #e32119;
		`}
`;

export const TextButton = styled.Text`
	color: #fff;
	font-size: 16px;
	${({ secondary }) =>
		secondary &&
		css`
			color: #464646;
		`}
`;
