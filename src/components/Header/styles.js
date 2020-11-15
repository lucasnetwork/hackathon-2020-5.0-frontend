import styled from 'styled-components/native';
import Constants from 'expo-constants';

export default styled.View`
	justify-content: space-between;
	flex-direction: row;
	margin-top: ${`${Constants.statusBarHeight + 16}px`};
	margin-left: 16px;
	margin-right: 16px;
`;

export const Background = styled.Image`
	position: absolute;
	top: -80px;
	right: 0;
`;
export const LogoImage = styled.Image`
	width: 57px;
`;
