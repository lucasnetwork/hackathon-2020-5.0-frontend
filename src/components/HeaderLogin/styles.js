import styled from 'styled-components/native';

import Constants from 'expo-constants';

export default styled.View`
	margin-top: ${`${Constants.statusBarHeight + 16}px`};
	margin-left: 16px;
	margin-right: 16px;
`;

export const Background = styled.Image`
	position: absolute;
	top: 0;
	right: 0;
`;
