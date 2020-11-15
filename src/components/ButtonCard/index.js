import React from 'react';
import PropTypes from 'prop-types';
import Container from './styles';

const ButtonCard = ({ children, secondary, tertiary, ...rest }) => {
	return (
		<Container secondary={secondary} tertiary={tertiary} {...rest}>
			{children}
		</Container>
	);
};

ButtonCard.propTypes = {
	secondary: PropTypes.bool,
	tertiary: PropTypes.bool,
};

ButtonCard.defaultProps = {
	secondary: false,
	tertiary: false,
};

export default ButtonCard;
