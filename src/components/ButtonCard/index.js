import React from 'react';
import PropTypes from 'prop-types';
import Container, { BackgroundImage } from './styles';
import detailsButton from '../../images/DetailButton/detailButton.png';

const ButtonCard = ({ children, secondary, tertiary, fourth, ...rest }) => {
	return (
		<Container
			secondary={secondary}
			tertiary={tertiary}
			fourth={fourth}
			{...rest}
		>
			{children}
			<BackgroundImage source={detailsButton} />
		</Container>
	);
};

ButtonCard.propTypes = {
	secondary: PropTypes.bool,
	tertiary: PropTypes.bool,
	fourth: PropTypes.bool,
};

ButtonCard.defaultProps = {
	secondary: false,
	tertiary: false,
	fourth: false,
};

export default ButtonCard;
