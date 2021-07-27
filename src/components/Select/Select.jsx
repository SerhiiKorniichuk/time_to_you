import React from 'react'
import { View, Image, Text } from 'react-native'
import PropTypes from 'prop-types'
import RNPickerSelect from 'react-native-picker-select'
import { layout } from '../../helpers/responseLayout'
import { styles } from './stylesSelect'

const chevronDown = require('../../assets/images/Select/chevron_mini.png')

export const Select = ({ label, value, setValue, list }) => {
	return (
		<View style={styles.mainContainer}>
			<Text style={styles.textLabel}>{label}</Text>
			<View style={styles.container}>
				<RNPickerSelect
					onValueChange={val => setValue(val)}
					items={list}
					value={value}
					useNativeAndroidPickerStyle={false}
					style={{
						inputAndroid: styles.inputAndroid,
						inputIOS: styles.inputIOS,
						iconContainer: styles.iconContainer,
					}}
					Icon={() => <Image source={chevronDown} />}
				/>
			</View>
		</View>
	)
}

Select.propTypes = {
	value: PropTypes.string.isRequired,
	setValue: PropTypes.func.isRequired,
	list: PropTypes.arrayOf(PropTypes.object).isRequired,
}
