import styled from 'styled-components/native';

export default styled.View`
	height: auto;
	flex-direction: row;
`;

export const TitleContainer = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const MessageText = styled.Text`
	font-size: 16px;
	color: #7b7b7b;
	padding-right: 16px;
`;

export const Title = styled.Text`
	font-weight: bold;
	font-size: 12px;
	color: #464646;
`;

export const SubTitle = styled.Text`
	font-size: 8px;
	color: #464646;
	margin-left: 4px;
`;

export const ImageContainer = styled.View`
	width: 33px;
	height: 33px;
	border: 1px solid #464646;
	border-radius: 50px;
	align-items: center;
	justify-content: center;
	margin-right: 8px;
`;
