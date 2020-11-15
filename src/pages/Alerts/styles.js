import styled from 'styled-components/native';

export default styled.View`
	flex: 1;
	padding: 16px;
	align-items: center;
	justify-content: center;
`;

export const ContainerTitle = styled.View`
	align-items: center;
	justify-content: flex-start;
`;

export const AlertsContainer = styled.ScrollView`
	margin-top: 45px;
	flex: 1;
	width: 100%;
`;

export const AlertContainer = styled.View`
	width: 100%;
	margin-bottom: 40px;
`;

export const TitleAlert = styled.Text`
	font-size: 10px;
	color: #464646;
`;
