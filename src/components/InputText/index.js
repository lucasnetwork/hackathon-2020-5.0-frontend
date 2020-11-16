import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

import Container, { Label, Input, ContainerInput } from './styles';

const InputText = ({ label, type, password, value }) => {
	const [passwordVisible, setPasswordVisible] = useState(false);
	useEffect(() => {
		if (password) {
			setPasswordVisible(true);
		}
	}, []);
	return (
		<Container>
			<Label>{label}</Label>
			<ContainerInput>
				<Input
					keyboardType={type}
					value={value}
					secureTextEntry={passwordVisible}
				/>
				{password && (
					<TouchableOpacity
						onPress={() => setPasswordVisible(!passwordVisible)}
					>
						{passwordVisible ? (
							<MaterialCommunityIcons
								name="eye-off"
								size={24}
								color="rgba(70,70,70,0.5)"
							/>
						) : (
							<AntDesign name="eye" size={24} color="rgba(70,70,70,0.5)" />
						)}
					</TouchableOpacity>
				)}
			</ContainerInput>
		</Container>
	);
};

InputText.propTypes = {
	label: PropTypes.string.isRequired,
	type: PropTypes.string,
	password: PropTypes.bool,
};

InputText.defaultProps = {
	type: 'default',
	password: false,
};

export default InputText;
