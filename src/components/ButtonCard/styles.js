import styled, { css } from 'styled-components/native';

export default styled.TouchableOpacity`
	background: #0098d1;
	box-shadow: 6px 6px 10px rgba(19, 193, 67, 0.06);
	border-radius: 12px;
	width: 100%;
	height: 79px;
	margin-bottom: 16px;
	justify-content: center;
	padding: 16px;
	${({ secondary }) =>
		secondary &&
		css`
			background: #f39800;
		`}
	${({ tertiary }) =>
		tertiary &&
		css`
			background: #e32119;
		`}
`;
