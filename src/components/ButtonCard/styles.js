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
	position: relative;
	overflow: hidden;
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
	${({ fourth }) =>
		fourth &&
		css`
			background: #83b81a;
		`}
	${({ small }) =>
		small &&
		css`
			height: 92px;
			max-width: 157px;
		`}
`;

export const BackgroundImage = styled.Image`
	position: absolute;
	right: -270px;
	bottom: -150px;
`;
