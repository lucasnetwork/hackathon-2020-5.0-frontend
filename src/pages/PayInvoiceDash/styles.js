import styled from 'styled-components/native';
import Constants from 'expo-constants';

export default styled.View`
	flex: 1;
`;

export const Header = styled.View`
	width: 100%;
	height: 327px;
	background: #0098d1;
	box-shadow: 6px 6px 10px rgba(19, 193, 67, 0.06);
`;

export const ViewButton = styled.View`
	margin-top: ${`${Constants.statusBarHeight}px`};
	padding: 16px 0 0 16px;
`;

export const ContainerHeaderValues = styled.View`
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 0 44px;
`;

export const HeaderTitle = styled.Text`
	font-size: 18px;
	color: #ffffff;
`;

export const HeaderPrice = styled.Text`
	font-weight: bold;
	font-size: 40px;
	color: #ffffff;
`;

export const HeaderBarCode = styled.Text`
	margin-top: 22px;
	font-size: 16px;
	color: #ffffff;
	width: 100%;
`;

export const MainContainer = styled.View`
	flex: 1;
	padding: 16px;
	border-bottom-width: 1px;
	border-color: #464646;
`;

export const MainTitle = styled.Text`
	font-weight: bold;
	font-size: 16px;
	color: #464646;
`;
export const MainSubTitle = styled.Text`
	font-size: 16px;
	color: #464646;
	opacity: 0.5;
`;
export const MainTitleContainer = styled.View`
	margin-bottom: 36px;
`;

export const ButtonsContainer = styled.View`
	width: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	margin-top: 27px;
`;

export const CardText = styled.Text`
	font-weight: bold;
	font-size: 14px;
	color: #464646;
`;

export const CardAdd = styled.Text`
	font-weight: bold;
	font-size: 16px;
	color: #0098d1;
	flex: 1;
	margin-left: 16px;
`;

export const FooterContainer = styled.View`
	border-top-width: 1px;
	height: 100px;
	border-color: #464646;
	padding: 16px;
`;
