import styled from 'styled-components/native';

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
