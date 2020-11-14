import styled from 'styled-components/native';
import Contants from 'expo-constants';

export default styled.View`
	flex: 1;
	padding: 16px;
	align-items: center;
	justify-content: center;
`;

export const TitleContainer = styled.View`
	margin-top: 14px;
`;

export const Title = styled.Text`
	font-size: 26px;
	font-weight: bold;
	color: #582a2a;
	margin-bottom: 6px;
`;

export const SubTitle = styled.Text`
	font-size: 16px;
	color: #582a2a;

	opacity: 0.5;
`;

export const Background = styled.Image`
	position: absolute;
	top: 0;
	right: 0;
`;

export const ContainerInputs = styled.View`
	width: 100%;
`;

export const ContainerButton = styled.View`
	margin-top: 40px;
	width: 100%;
`;

export const ContainerTextReceiverPass = styled.View`
	width: 100%;
	flex-direction: row;
	margin-bottom: 20px;
`;

export const LabelTextReceiverPass = styled.Text`
	font-size: 14px;
	color: #464646;
	opacity: 0.5;
`;

export const ButtonReceiverPass = styled.TouchableOpacity`
	margin-left: 8px;
`;

export const ReceiverPassText = styled.Text`
	font-size: 14px;
	font-weight: bold;
	color: #0098d1;
`;

export const ButtonGoBack = styled.TouchableOpacity`
	width: 40px;
	height: 40px;
	position: absolute;
	border-radius: 50px;
	background: #ffffff;
	box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.06);
	top: ${`${Contants.statusBarHeight + 12}px`};
	left: 16px;
	align-items: center;
	justify-content: center;
`;
