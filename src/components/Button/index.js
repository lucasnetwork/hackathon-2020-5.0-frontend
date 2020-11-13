import React from 'react';
import PropTypes from 'prop-types';
import Container, { TextButton } from './styles';

const Button = ({ text, secondary, ...rest }) => {
	return (
		<Container secondary={secondary} {...rest}>
			<TextButton secondary={secondary}>{text}</TextButton>
		</Container>
	);
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
	secondary: PropTypes.bool,
};

Button.defaultProps = {
	secondary: false,
};

export default Button;
