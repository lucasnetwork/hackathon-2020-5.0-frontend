import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import Container from './styles';

const ButtonGoBack = ({ handlePress }) => {
	return (
		<Container onPress={handlePress}>
			<AntDesign name="arrowleft" size={24} color="black" />
		</Container>
	);
};

ButtonGoBack.propTypes = {
	handlePress: PropTypes.func.isRequired,
};

export default ButtonGoBack;
