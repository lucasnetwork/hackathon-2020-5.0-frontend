import styled from 'styled-components/native';
import Constants from 'expo-constants';

export default styled.View`
	flex: 1;
	padding: 16px;
	background: #e32119;
`;

export const TitleContainer = styled.View`
	align-self: center;
	align-items: center;
	margin-top: 40px;
	max-width: 235px;
`;
export const ButtonContainer = styled.View`
	margin-top: ${`${Constants.statusBarHeight + 12}px`};
	margin-bottom: 16px;
`;

export const Title = styled.Text`
	font-size: 26px;
	font-weight: bold;
	color: #fff;
	margin-bottom: 6px;
`;

export const SubTitle = styled.Text`
	font-size: 16px;
	color: #fff;
	text-align: center;
	opacity: 0.5;
`;

export const MicrophoneContainer = styled.View`
	align-self: center;
	margin-top: 87px;
	width: 139px;
	height: 139px;
	border-width: 1px;
	border-color: #fff;
	border-radius: 100px;
	align-items: center;
	justify-content: center;
`;
