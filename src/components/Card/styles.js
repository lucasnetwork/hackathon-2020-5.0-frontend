import styled, { css } from 'styled-components/native';
import { StyleSheet } from 'react-native';

export default styled.TouchableOpacity`
	width: 100%;
	min-height: 74px;
	padding: 13px;
	background: #f0f0f0;
	border-radius: 12px;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 20px;
	${({ secondary }) =>
		secondary &&
		css`
			background: #8fbf31;
		`}
`;

export const style = StyleSheet.create({
	shadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 6,
		},
		shadowOpacity: 0.25,
		shadowRadius: 8.3,

		elevation: 13,
	},
});
