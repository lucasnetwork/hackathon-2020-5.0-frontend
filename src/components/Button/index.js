import React from 'react';
import PropTypes from 'prop-types';
import Container, { TextButton } from './styles';

const Button = ({ text, secondary, tertiary, ...rest }) => {
	return (
		<Container secondary={secondary} tertiary={tertiary} {...rest}>
			<TextButton secondary={secondary}>{text}</TextButton>
		</Container>
	);
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
	secondary: PropTypes.bool,
	tertiary: PropTypes.bool,
};

Button.defaultProps = {
	secondary: false,
	tertiary: false,
};

export default Button;
