import React from 'react';
import { Linking } from 'react-native';
import Container, {
	ContainerTitle,
	ContainerInput,
	MessageContainer,
	Text,
	LinkText,
} from './styles';
import { Title, SubTitle } from '../../components/Title';
import InputText from '../../components/InputText';
import Button from '../../components/Button';

const IndicateFriend = () => {
	return (
		<Container>
			<ContainerTitle>
				<Title>Indique um amigo</Title>
				<SubTitle>Indique um amigo e ganhe 200 pontos agora.</SubTitle>
			</ContainerTitle>
			<ContainerInput>
				<InputText label="Contato" />
				<MessageContainer>
					<Text>
						Estou indicando você para baixar o app do CPFL contendo diversas
						vantagem e benefícios para você, clique no link:
						<LinkText
							onPress={() => Linking.openURL('http://fly.com/cpfl/carloscosta')}
						>
							http://fly.com/cpfl/carloscosta
						</LinkText>
						.Esse link é válido por 5 dias, não perca!
					</Text>
				</MessageContainer>
			</ContainerInput>
			<Button text="Indicar agora" />
		</Container>
	);
};

export default IndicateFriend;
