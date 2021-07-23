import PropTypes from 'prop-types'
import React from 'react'
import { TextInput, View, Text } from 'react-native'
import { styles } from './stylesInput'


export const Input = ({label, type, onChange, value, placeholder }) => {
	return (
		<View style={styles.container}>
			{label && <Text style={styles.label}>{label}</Text>}
			<TextInput
				style={styles.input}
				onChangeText={onChange}
				value={value}
				placeholder={placeholder}
				secureTextEntry={type === 'password'}
			/>
		</View>
	)
}


Input.propTypes = {
	label: PropTypes.string,
	type: PropTypes.oneOf(['password']),
	onChange: PropTypes.func,
	value: PropTypes.string,
	placeholder: PropTypes.string
}
