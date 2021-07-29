import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import RNPickerSelect from 'react-native-picker-select'
import { ArrowDownOutline } from '../../assets/icons/ArrowDownOutline'
import { styles as customInputStyles } from '../Input/stylesInput'
import { styles } from './stylesSelect'


export const Select = ({ label, value, setValue, list }) => {
	return (
		<View style={customInputStyles.container}>
			<Text style={customInputStyles.label}>{label}</Text>
			<View style={styles.container}>
				<RNPickerSelect
					onValueChange={val => setValue(val)}
					items={list}
					value={value}
					useNativeAndroidPickerStyle={false}
					style={{
						inputAndroid: styles.inputAndroid,
						inputIOS: styles.inputIOS,
						iconContainer: styles.iconContainer
					}}
					Icon={() => (
						<ArrowDownOutline
							width={styles.arrow.width}
							height={styles.arrow.height}
							fillColor='#8E8E8E'
						/>
					)}
				/>
			</View>
		</View>
	)
}


Select.propTypes = {
	value: PropTypes.string.isRequired,
	setValue: PropTypes.func.isRequired,
	list: PropTypes.arrayOf(PropTypes.object).isRequired
}
