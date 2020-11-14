import styled from 'styled-components/native';

import Contants from 'expo-constants';

export default styled.TouchableOpacity`
	width: 40px;
	height: 40px;
	border-radius: 50px;
	background: #ffffff;
	box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.06);
	margin-top: ${`${Contants.statusBarHeight + 12}px`};
	margin-left: 16px;
	align-items: center;
	justify-content: center;
`;
