import styled from 'styled-components/native';

import Contants from 'expo-constants';

export default styled.TouchableOpacity`
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
