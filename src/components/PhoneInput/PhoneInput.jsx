import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { View, Text, TouchableWithoutFeedback, TextInput } from 'react-native'
import CountryPicker from 'react-native-country-picker-modal'
import { ArrowDownPrimary } from '../../assets/icons/ArrowDownPrimary'
import { styles as customInputStyles } from '../CustomInput/stylesInput'
import { styles } from './stylesPhoneInput'


export const PhoneInput = (props) => {

	const [countryCode, setCountryCode] = useState(props.countryCode)
	const [country, setCountry] = useState({callingCode: props.callingCode})
	const [visible, setVisible] = useState(false)

	const selectCountry = (country) => {
		setCountryCode(country.cca2)
		setCountry(country)
	}

	const toggleVisible = () => setVisible(!visible)

	return (
		<View style={customInputStyles.container}>
			{props.label && <Text style={customInputStyles.label}>{props.label}</Text>}
			<View style={styles.body}>
				<TouchableWithoutFeedback onPress={toggleVisible}>
					<View style={styles.countryPicker}>
						<View style={styles.countryPickerInner}>
							<CountryPicker
								countryCode={countryCode}
								onSelect={selectCountry}
								onOpen={toggleVisible}
								onClose={toggleVisible}
								withFilter
								visible={visible}
							/>
						</View>
						{country?.callingCode && (
							<Text style={styles.callingCode}>
								{`(+${country?.callingCode})`}
							</Text>
						)}
						<View style={styles.iconContainer}>
							<ArrowDownPrimary
								width={styles.arrow.width}
								height={styles.arrow.height}
								fillColor='#323131'
							/>
						</View>
						<View style={styles.divider}/>
					</View>
				</TouchableWithoutFeedback>
				<TextInput style={styles.input}/>
			</View>
		</View>
	)
}


PhoneInput.propTypes = {
	label: PropTypes.string,
	countryCode: PropTypes.string,
	callingCode: PropTypes.string
}

PhoneInput.defaultProps = {
	countryCode: 'DK',
	callingCode: '45'
}
