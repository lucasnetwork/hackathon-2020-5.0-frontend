import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import Container, {
	ButtonPlay,
	ProgressBarContainer,
	ProgressBar,
} from './styles';

const AudioContainer = () => {
	return (
		<Container>
			<ButtonPlay>
				<AntDesign name="caretright" size={33} color="#fff" />
			</ButtonPlay>
			<ProgressBarContainer>
				<ProgressBar />
			</ProgressBarContainer>
		</Container>
	);
};

export default AudioContainer;
