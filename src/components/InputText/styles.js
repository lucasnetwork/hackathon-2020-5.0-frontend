import styled from 'styled-components/native';

export default styled.View`
	border-color: #464646;
	border-bottom-width: 1px;
`;

export const Label = styled.Text`
	font-size: 12px;
	color: #464646;
	opacity: 0.5;
	margin-top: 36px;
`;

export const Input = styled.TextInput`
	max-width: 100%;
	height: auto;
	flex: 1;
	font-size: 16px;
	color: #464646;
`;

export const ContainerInput = styled.View`
	max-width: 100%;
	width: 100%;
	flex-direction: row;
	align-items: stretch;
`;
