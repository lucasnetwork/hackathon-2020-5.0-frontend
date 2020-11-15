import React from 'react';
import PropTypes from 'prop-types';
import Container, { style } from './styles';

const Card = ({ children, secondary, ...props }) => {
	return (
		<Container secondary={secondary} style={style.shadow} {...props}>
			{children}
		</Container>
	);
};

Card.propTypes = {
	secondary: PropTypes.bool,
};

Card.defaultProps = {
	secondary: false,
};

export default Card;
