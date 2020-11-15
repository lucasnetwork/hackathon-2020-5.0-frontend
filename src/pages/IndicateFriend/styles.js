import styled from 'styled-components/native';

export default styled.View`
	flex: 1;
	padding: 16px;
	align-items: center;
	justify-content: center;
`;

export const ContainerTitle = styled.View`
	align-self: flex-start;
	margin-bottom: 20px;
`;

export const ContainerInput = styled.View`
	width: 100%;
	margin: 42px 0;
`;

export const MessageContainer = styled.View`
	border-color: #464646;
	border-bottom-width: 1px;
`;

export const Text = styled.Text`
	font-size: 16px;
	color: #464646;
`;

export const LinkText = styled.Text`
	font-size: 16px;
	color: #0098d1;
`;
